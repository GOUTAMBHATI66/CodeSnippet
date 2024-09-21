import { Routes } from '@angular/router';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { AboutComponent } from './component/about/about.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { CodeSnippetComponent } from './component/code-snippet/code-snippet.component';

export const routes: Routes = [
  { path: 'codeSnippet', component: CodeSnippetComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
