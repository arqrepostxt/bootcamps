import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      try {
        this.authService.login(username, password).subscribe(
          (authToken: string) => {
            console.log('authToken string:', authToken);
            this.authService.setLocalAuthToken(authToken);
            console.log('Login successful');
            this.router.navigate(['/profile']);
          },
          (error) => {
            console.error("Login failed");
          }
        );
      } catch (error) {
        console.error("Login failed");
      }
    }
  }
}
