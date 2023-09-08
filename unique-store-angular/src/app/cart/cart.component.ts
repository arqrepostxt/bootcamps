import { Router } from "@angular/router";
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();

  cartForm!: FormGroup;
  usernameRetrieved: string = '';

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartForm = this.formBuilder.group({
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
          },
          (error) => {
            console.error('Error fetching username:', error);
          }
        );
    } else {
      console.error('No authToken found in localStorage');
    }
  }

  getTotalSum(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  onSubmit(): void {
    if (this.cartForm.invalid) {
    console.warn('Invalid information');
      return;
    }
    console.warn('Your order has been submitted', this.cartForm.value);
    this.router.navigate(['/checkout']);
  }

}
