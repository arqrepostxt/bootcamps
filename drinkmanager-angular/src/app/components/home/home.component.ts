import { Component } from '@angular/core';
import { CredentialService } from 'src/app/services/credential.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    public credentialService: CredentialService,
     ) {}
}
