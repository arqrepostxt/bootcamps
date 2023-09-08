import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialService } from '../../services/credential.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

   constructor(
    public credentialService: CredentialService,
    private router: Router,
     ) {}
     
   // TODO: TASK-001: Write tests
  
  onLogout() {
    this.credentialService.setLoggedIn(false);
    this.router.navigate(['/']);
    console.log("Logged out")
  }
}
