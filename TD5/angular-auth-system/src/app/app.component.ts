import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'auth-system';
  isLoggedIn = false;
  username = '';

  ngOnInit() {
    // Check login status initially
    this.checkLoginStatus();
    
    // Set up a listener to check login status when storage changes
    window.addEventListener('storage', this.checkLoginStatus.bind(this));
  }

  checkLoginStatus() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      try {
        const userData = JSON.parse(currentUser);
        this.isLoggedIn = true;
        this.username = userData.username;
      } catch (error) {
        this.isLoggedIn = false;
        this.username = '';
      }
    } else {
      this.isLoggedIn = false;
      this.username = '';
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.isLoggedIn = false;
    this.username = '';
    window.location.href = '/login';
  }
}