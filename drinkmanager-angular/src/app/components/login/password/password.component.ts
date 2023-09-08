import { Component, EventEmitter, Output } from '@angular/core';
import { CredentialService } from '../../../services/credential.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  @Output() nextClicked: EventEmitter<void> = new EventEmitter<void>();
  passwordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private credentialService: CredentialService,
    private router: Router,
    ) {
      this.passwordForm = this.formBuilder.group({
        password: ['', Validators.required]
      });
    }

  onNextClick() {
    if (this.passwordForm.valid) {
      const password = this.passwordForm.get('password')!.value;
      const username = this.credentialService.getTypedUsername();
      this.authenticationService.onLogin(username, password).subscribe(
        response => {
          console.log('Login sucess', response);
          this.credentialService.setLoggedIn(true);
          this.router.navigate(['/manage']);
        }, error => {
          console.log('Login failed', error);
          this.router.navigate(['/login']);
        }
      );
    }
    
  }
}
