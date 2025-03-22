import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DashboardComponent implements OnInit {
  username: string = '';
  
  constructor(private router: Router) {}
  
  ngOnInit() {
    // Check if user is logged in
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      this.router.navigate(['/login']);
      return;
    }
    
    // Get user data
    try {
      const userData = JSON.parse(currentUser);
      this.username = userData.username;
    } catch (error) {
      console.error('Error parsing user data', error);
      this.logout();
    }
  }
  
  logout() {
    // Clear local storage
    localStorage.removeItem('currentUser');
    // Navigate to login
    this.router.navigate(['/login']);
  }
}