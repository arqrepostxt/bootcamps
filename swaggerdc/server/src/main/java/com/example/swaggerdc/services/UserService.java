package com.example.swaggerdc.services;

import com.example.swaggerdc.model.User;
import com.example.swaggerdc.repository.UserRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;

  public List<User> findAllUser() {
    System.out.println("LIST - Listando os usários do sistema");
    return userRepository.findAll();
  }

  public void save(User userNew) {
    System.out.println("SAVE - Recebendo o usuário na camada de repositório");
    User user = new User();
    user.setUsername(userNew.getUsername());
    user.setPassword(userNew.getPassword());
    user.setCustomerInformation(userNew.getCustomerInformation());

    userRepository.save(user);
  }

  public void update(int userId, User userEdited) {
    System.out.println(
      String.format(
        "UPDATE - Recebendo o id de usuário %d na camada de repositório",
        userId
      )
    );
    User user = userRepository.findById(userId).orElse(null);

    if (user != null) {
      user.setUsername(userEdited.getUsername());
      user.setPassword(userEdited.getPassword());

      userRepository.save(user);
    }
  }

  public void delete(int userId) {
    User user = userRepository.findById(userId).orElse(null);
    System.out.println(
      String.format(
        "DELETE/id - Recebendo o id: %d para excluir um usuário",
        userId
      )
    );

    if (user != null) {
      userRepository.delete(user);
    }
  }

  public User findById(int userId) {
    System.out.println(
      String.format(
        "FIND/id - Recebendo o id: %d para localizar um usuário",
        userId
      )
    );
    return userRepository.findById(userId).orElse(null);
  }

  
}
