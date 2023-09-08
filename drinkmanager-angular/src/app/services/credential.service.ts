import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {
  private mockUsername: string = 'admin';
  private mockPassword: string = 'pass321';
  private typedUsername: string = '';
  private loggedIn: boolean = false;

  setMockUsername(username: string) {
    this.mockUsername = username;
  }

  setTypedUsername(username: string) {
    this.typedUsername = username;
  }

  setLoggedIn(status: boolean) {
    if (status == true) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
      this.authService.setAuthToken(null);
    }
  }

  getMockUsername(): string {
    return this.mockUsername;
  }

  getTypedUsername(): string {
    return this.typedUsername;
  }

  // FIXME: Persist loggedIn on page reload
  getLoggedIn() {
    return this.loggedIn;
  }

  constructor(
    private authService: AuthenticationService,
  ) {}

  mockValidateCredentials(username: string, password: string): boolean {
    return username === this.mockUsername && password === this.mockPassword;
  }

  mockAuthValidation(username: string, password: string): boolean {
    return username === this.mockUsername && password === this.mockPassword;
  }

}
