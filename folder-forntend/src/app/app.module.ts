import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersGetComponent } from './users-get/users-get.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { from } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms' ;
import { HttpClientModule } from '@angular/common/http' ;
import { UsersService } from './users.service' ;
@NgModule({
  declarations: [
    AppComponent,
    UsersAddComponent,
    UsersGetComponent,
    UsersEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
