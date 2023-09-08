import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { CredentialService } from '../../services/credential.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    // Define animation for entering components
    trigger('fadeInOut', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)',
        }),
        animate('0.3s ease-in-out'),
      ]),
      transition(':leave', [
        animate('0.3s ease-in-out', style({ opacity: 0, transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class LoginComponent {
  showUsernameComponent: boolean = true;

  constructor(private credentialService: CredentialService) {}

  toggleComponents() {
    this.showUsernameComponent = !this.showUsernameComponent;
  }

}
