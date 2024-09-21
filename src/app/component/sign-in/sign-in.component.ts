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
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    MatIconModule,
    NgIf,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  constructor(private router: Router) {}

  passwordType = 'password';

  ShowPass() {
    this.passwordType = 'text';
  }

  HidePass() {
    this.passwordType = 'password';
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  SignInForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  SignIn() {
    console.log(this.SignInForm.value);
    this.router.navigate(['/']);
  }
}
