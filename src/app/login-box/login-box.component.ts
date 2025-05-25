import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-box',
  standalone: true,
  imports: [FormsModule],  // IMPORTANTE para usar ngModel
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent {
  user = {
    user: '',
    password: ''
  };

  storedUser = {
    user: 'test@gmail.com',
    password: '123'
  };

  router = inject(Router);

  validateLogin(user: string, password: string): boolean {
    return user === this.storedUser.user && password === this.storedUser.password;
  }

  login() {
    if (this.validateLogin(this.user.user, this.user.password)) {
      localStorage.setItem('loggedInUser', JSON.stringify(this.user.user));
      this.router.navigate(['/dashboard']);
    } else {
      alert('Usuário ou senha incorretos');
    }
  }
}
