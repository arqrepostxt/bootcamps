import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  checkoutForm!: FormGroup;
  usernameRetrieved: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      contact: ['', Validators.required],
      confirmCheckbox: [false, Validators.requiredTrue],
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
            this.checkoutForm.patchValue({
              name: data.name,
              contact: data.email,
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
    // Process checkout data here
    if (this.checkoutForm.invalid) {
    console.warn('Invalid information');
      return;
    }
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
