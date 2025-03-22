import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  
  constructor(private http: HttpClient, private router: Router) {}
  
  onSubmit() {
    // Simple validation
    if (!this.username || !this.password) {
      this.errorMessage = 'Username and password are required';
      return;
    }
    
    // Check user credentials against the database
    this.http.get<any[]>(`http://localhost:3000/users?username=${this.username}`)
      .subscribe({
        next: (users) => {
          if (users.length > 0 && users[0].password === this.password) {
            // Store user info in localStorage
            localStorage.setItem('currentUser', JSON.stringify(users[0]));
            
            // Dispatch a storage event to notify other components
            window.dispatchEvent(new Event('storage'));
            
            // Navigate to dashboard
            this.router.navigate(['/dashboard']);
          } else {
            this.errorMessage = 'Invalid username or password';
          }
        },
        error: (error) => {
          console.error('Login failed', error);
          this.errorMessage = 'Login failed. Please try again.';
        }
      });
  }
}