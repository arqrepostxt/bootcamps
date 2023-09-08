import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  usernameRetrieved: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
    });
    this.fetchUsernameFromServer();
  }

  fetchUsernameFromServer(): void {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${authToken}`,
      });

      this.http
        .get('http://localhost:8080/v4/api/customer/get-username', {
          headers,
          responseType: 'text',
        })
        .subscribe(
          (username) => {
            console.log('Username:', username);
            this.usernameRetrieved = username;
            this.fetchProfileData();
          },
          (error) => {
            console.error('Error fetching username:', error);
          }
        );
    } else {
      console.error('No authToken found in localStorage');
    }
  }

  fetchProfileData(): void {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      const headers = new HttpHeaders({
        Authorization: authToken ? authToken : '',
      });

      this.http
        .get<any>(`http://localhost:8080/v4/api/customer/profile/${this.usernameRetrieved}`, {
          headers,
        })
        .subscribe(
          (data) => {
            this.profileForm.patchValue({
              name: data.name,
              email: data.email,
              address: data.address,
            });
          },
          (error) => {
            console.error('Error fetching profile data:', error);
          }
        );
    }
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const authToken = localStorage.getItem('authToken');
      const headers = new HttpHeaders({
        Authorization: authToken ? authToken : '',
      });

      const { name, email, address } = this.profileForm.value;
      const profileData = {
        name: name,
        email: email,
        address: address,
      };

      this.http
        .put(
          `http://localhost:8080/v4/api/customer/profile/${this.usernameRetrieved}`,
          profileData,
          {
            headers,
          }
        )
        .subscribe(
          (response) => {
            console.log('Profile updated successfully');
          },
          (error) => {
            console.error('Profile update failed');
          }
        );
    }
  }
}
