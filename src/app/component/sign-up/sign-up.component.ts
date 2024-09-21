import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    NgIf,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(private router: Router) {}

  passwordType = 'password';

  ShowPass() {
    this.passwordType = 'text';
  }

  HidePass() {
    this.passwordType = 'password';
  }

  username = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  email = new FormControl('', [Validators.required, Validators.email]);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  SignUpForm = new FormGroup({
    username: this.username,
    email: this.email,
    password: this.password,
  });

  SignUp() {
    console.log(this.SignUpForm.value);
    this.router.navigate(['/']);
  }
}
