import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-code-snippet',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './code-snippet.component.html',
  styleUrl: './code-snippet.component.css',
})
export class CodeSnippetComponent {
  title = new FormControl('', [Validators.required]);

  code = new FormControl('', [Validators.required]);

  codeSnippet = new FormGroup({
    title: this.title,
    code: this.code,
  });

  saveSnippet() {
    console.log(this.codeSnippet.value);
  }
}
