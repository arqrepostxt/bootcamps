import { Component, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';
import { CredentialService } from '../../../services/credential.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
		private credentialService: CredentialService,
    private router: Router,
    ) {
      this.registerForm = this.formBuilder.group({
				firstName: ['', Validators.required],
				lastName: ['', Validators.required],
				login: ['', Validators.required],
        password: ['', Validators.required],
      });
    }

		onSubmit(){
			if (this.registerForm.valid){
				const formData = this.registerForm.value;
				console.log(formData);
				const {firstName, lastName, login, password} = this.registerForm.value;
				this.authenticationService.onRegister(firstName, lastName, login, password).subscribe(
					response => {
						console.log('User registration was sucessfully', response)
        		this.credentialService.setTypedUsername(login);
						this.credentialService.setLoggedIn(true);
						this.router.navigate(['/manage']);
					}, error => {
						console.log('Error while registering user', error)
					}
				);
			}
		}
		
}
