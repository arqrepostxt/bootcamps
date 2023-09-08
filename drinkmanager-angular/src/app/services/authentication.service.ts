import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = 'http://localhost:8080';
  
  constructor(private http: HttpClient) { }

  getAuthToken(): string | null {
    return window.localStorage.getItem("auth_token");
  }

  setAuthToken(token: string | null): void {
    if (token !== null) {
      window.localStorage.setItem("auth_token", token);
    } else {
      window.localStorage.removeItem("auth_token");
    }
  }

  onLogin(login: string, password: string): Observable<any> {
    const requestBody = {
      login: login,
      password: password
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.baseUrl}/api/v1/login`, requestBody, { headers }).pipe(
      map((response: any) => {
        this.setAuthToken(response.token);
        return response;
      }),
      catchError((error: any) => {
        this.setAuthToken(null);
        return throwError(error);
      })
    );
  }
  
  onRegister(firstName: string, lastName: string, login: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/api/v1/register`;
    const requestBody = {
      firstName: firstName,
      lastName: lastName,
      login: login,
      password: password
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(url, requestBody, { headers }).pipe(
      map((response: any) => {
        this.setAuthToken(response.token);
        return response;
      }),
      catchError((error: any) => {
        this.setAuthToken(null);
        return throwError(error);
      })
    );
  }

}