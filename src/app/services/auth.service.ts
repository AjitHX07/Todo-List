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

  // Mock signup method (replace with API call)
  signup(username: string, email: string, password: string): void {
    // Here you can send the user data to your backend API
    localStorage.setItem('user', JSON.stringify({ username, email }));
    alert('Signup successful!');
    this.router.navigate(['/login']);
  }

  // Mock login method (replace with API call)
  login(username: string, password: string): boolean {
    // Normally you'd check credentials against the backend here
    const user = JSON.parse(localStorage.getItem('user')!);

    if (user && username === user.username && password === 'admin') {
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
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }





}
