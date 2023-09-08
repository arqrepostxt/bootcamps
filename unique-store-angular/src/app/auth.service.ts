import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/v4/api/login';
  private authToken: string = ''; // The authToken is a string

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(`${this.baseUrl}`, body, {responseType : 'text'});
  }

  setLocalAuthToken(token: string): void {
    this.authToken = token;
    localStorage.setItem('authToken', token);
  }

  getAuthHeaders(): HttpHeaders {
    if (this.authToken) {
      return new HttpHeaders({
        Authorization: `Bearer ${this.authToken}`,
      });
    } else {
      return new HttpHeaders();
    }
  }

  isAuthenticated(): boolean {
    const authToken = localStorage.getItem('authToken');
    return !!authToken;
  }

}
