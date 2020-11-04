import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactFormComponent } from '../layout/contactform/contactform.component';



@NgModule({
  declarations: [
    HomeComponent,
    BlogComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'home', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'blog', component: BlogComponent }
    ])
  ]
})
export class ShellModule { }
