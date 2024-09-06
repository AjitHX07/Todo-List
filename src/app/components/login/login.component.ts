import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  login(): void {
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/todo']); // Navigate to the todo page upon successful login
    } else {
      alert('Invalid credentials!');
    }
  }
}