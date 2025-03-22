import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // URL for your JSON Server (make sure JSON Server is running on this port)
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  // Signup: posts a new user object to the API
  signup(username: string, password: string): Observable<any> {
    const newUser = { username, password };
    return this.http.post(this.apiUrl, newUser).pipe(
      tap(_ => console.log('User signed up')),
      catchError(this.handleError<any>('signup'))
    );
  }

  // Login: get user by username and password
  login(username: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?username=${username}&password=${password}`).pipe(
      tap(users => {
        if (users && users.length) {
          localStorage.setItem('currentUser', JSON.stringify(users[0]));
        }
      }),
      catchError(this.handleError<any>('login'))
    );
  }

  // Logout: clear user from localStorage
  logout(): void {
    localStorage.removeItem('currentUser');
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
