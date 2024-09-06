import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {



  private loggedIn = false;  // Manage login state
  authService: any;

  constructor(private router: Router) { }

  signup(username: string, email: string, password: string): void {
    // Save the user details including the password
    localStorage.setItem('user', JSON.stringify({ username, email, password }));
    alert('Signup successful!');
    this.router.navigate(['/login']);
  }

  login(username: string, password: string): boolean {
    const userData = localStorage.getItem('user');

    if (!userData) {
      return false;
    }

    const user = JSON.parse(userData);

    if (username === user.username && password === user.password) {
      this.loggedIn = true;
      return true;
    } else {
      return false;
    }
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }


  canActivate(): boolean {
    if (this.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
