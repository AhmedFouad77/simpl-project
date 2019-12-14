import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersGetComponent } from './users-get/users-get.component';


const routes: Routes = [
  {
    path : 'users/create' ,
    component : UsersAddComponent
  },
  {
    path : 'users/edit/:id' ,
    component : UsersEditComponent
  },
  {
    path : 'users' ,
    component : UsersGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
