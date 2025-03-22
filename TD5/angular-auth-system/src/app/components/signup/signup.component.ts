import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule]
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  
  constructor(private http: HttpClient, private router: Router) {}
  
  onSubmit() {
    // Validate form
    if (!this.username || !this.email || !this.password) {
      this.errorMessage = 'All fields are required';
      return;
    }
    
    // Create user object
    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    };
    
    // Send to JSON server
    this.http.post('http://localhost:3000/users', user)
      .subscribe({
        next: (response) => {
          console.log('User registered successfully', response);
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Registration failed', error);
          this.errorMessage = 'Registration failed. Please try again.';
        }
      });
  }
}