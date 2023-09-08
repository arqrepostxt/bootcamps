import UserModel from '../model/User.model.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import otpGenerator from 'otp-generator';
import dotenv from 'dotenv';




// Load environment variables from .env file
dotenv.config();


/** middleware for verify user */
export async function verifyUser(req, res, next){
  try {
    
    const { username } = req.method == "GET" ? req.query : req.body;

    // check the user existance
    let exist = await UserModel.findOne({ username });
    if(!exist) return res.status(404).send({ error : "Can't find User!"});
    next();

  } catch (error) {
    return res.status(404).send({ error: "Authentication Error"});
  }
}


/** POST: http://localhost:8080/api/register 
 * @param : {
  "username" : "example123",
  "password" : "admin123",
  "email": "example@gmail.com",
  "firstName" : "bill",
  "lastName": "william",
  "mobile": 8009860560,
  "address" : "Apt. 556, Kulas Light, Gwenborough",
  "profile": ""
}
*/

export async function register(req, res) {
  try {
    const { username, password, profile, email } = req.body;

    // Check the existing user
    const existingUser = await UserModel.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      if (existingUser.username === username) {
        return res.status(400).send({ error: "Please use a unique username" });
      } else if (existingUser.email === email) {
        return res.status(400).send({ error: "Please use a unique Email" });
      }
    }

    // If no existing user, proceed with user registration
    if (password) {
      bcrypt.hash(password, 10, async (err, hashedPassword) => {
        if (err) {
          return res.status(500).send({ error: "Failed to hash the password" });
        }

        const user = new UserModel({
          username,
          password: hashedPassword,
          profile: profile || '',
          email
        });

        try {
          await user.save();
          return res.status(201).send({ msg: "User Register Successfully" });
        } catch (error) {
          return res.status(500).send({ error });
        }
      });
    }
  } catch (error) {
    return res.status(500).send({ error: "An error occurred while processing your request" });
  }
}


/** POST: http://localhost:8080/api/login 
 * @param: {
  "username" : "example123",
  "password" : "admin123"
}
*/
export async function login(req,res){
   
  const { username, password } = req.body;

  try {
    
    UserModel.findOne({ username })
      .then(user => {
        bcrypt.compare(password, user.password)
          .then(passwordCheck => {

            if(!passwordCheck) return res.status(400).send({ error: "Don't have Password"});

            // create jwt token
            const token = jwt.sign({
                    userId: user._id,
                    username : user.username
                  }, process.env.JWT_SECRET , { expiresIn : "24h"});

            return res.status(200).send({
              msg: "Login Successful...!",
              username: user.username,
              token
            });                                    

          })
          .catch(error =>{
            return res.status(400).send({ error: "Password does not Match"})
          })
      })
      .catch( error => {
        return res.status(404).send({ error : "Username not Found"});
      })

  } catch (error) {
    return res.status(500).send({ error});
  }
}


/** GET: http://localhost:8080/api/user/example123 */
export async function getUser(req,res){
  try {
    const { username } = req.params;
    if(!username) {
    return res.status(501).send({ error: "Invalid Username"});
    }
    const user = await UserModel.findOne({ username });

  if (!user) {
        return res.status(404).json({ error: "User not found." });
      }
  return res.status(200).json(user);
      
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ error: "An error occurred while fetching user." });
  }

}

// GET: http://localhost:8080/api/users
export async function getUsers(req, res) {
  try {
    const users = await UserModel.find({});
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: "An error occurred while fetching users." });
  }
}


/** PUT: http://localhost:8080/api/updateuser 
 * @param: {
  "id" : "<userid>"
}
body: {
  firstName: '',
  address : '',
  profile : ''
}
*/
export async function updateUser(req, res) {
  try {
    // const id = req.query.id;
    const { userId } = req.user;

    if (userId) {
      const body = req.body;

      // update the data using await
      await UserModel.updateOne({ _id: userId }, body);

      return res.status(201).send({ msg: "Record Updated...!" });
    } else {
      return res.status(401).send({ error: "User Not Found...!" });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).send({ error: "Error updating user data." });
  }
}



/** GET: http://localhost:8080/api/generateOTP
 * @param: {
  "username" : "example123",
}
*/
export async function generateOTP(req,res){
  req.app.locals.OTP = await otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false})
  res.status(201).send({ code: req.app.locals.OTP })
}


/** GET: http://localhost:8080/api/verifyOTP 
 * @param: {
  "username" : "example123",
  "code" : : "123456"
}
*/
export async function verifyOTP(req,res){
  const { code } = req.query;
  if(parseInt(req.app.locals.OTP) === parseInt(code)){
    req.app.locals.OTP = null; // reset the OTP value
    req.app.locals.resetSession = true; // start session for reset password
    return res.status(201).send({ msg: 'Verify Successsfully!'})
  }
  return res.status(400).send({ error: "Invalid OTP"});
}


// successfully redirect user when OTP is valid
/** GET: http://localhost:8080/api/createResetSession */
export async function createResetSession(req,res){
   if(req.app.locals.resetSession){
    return res.status(201).send({ msg: "Access granted!"})
   }
   return res.status(440).send({error : "Session expired!"})
}


// update the password when we have valid session
/** PUT: http://localhost:8080/api/resetPassword 
 * @param: {
  "username" : "user123",
  "password" : : "user123"
}
*/
export async function resetPassword(req,res){
  try {
    if (!req.app.locals.resetSession) {
      return res.status(440).send({ error: "Session expired!" });
    }
    const { username, password } = req.body;

    // The user should already be verified by the verifyUser function
    // No need to check for existence again, directly use the user object

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the password in the database
    await UserModel.updateOne({ username: username }, { password: hashedPassword });

    // Reset the resetSession flag
    req.app.locals.resetSession = false;

    return res.status(201).send({ msg: "Record Updated...!" });
  } catch (error) {
    return res.status(500).send({ error })
  }
}

