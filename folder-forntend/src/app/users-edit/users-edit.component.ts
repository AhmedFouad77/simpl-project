import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service' ;
import { ActivatedRoute ,Router } from '@angular/router' ;
import { FormGroup , FormBuilder , Validators } from '@angular/forms' ;

import { from } from 'rxjs';
@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  
user:any = {};
UsersForm : FormGroup ;
  constructor(private route :  ActivatedRoute ,
              private router : Router , 
              private us : UsersService ,
              private fb : FormBuilder) {
    this.createForm();
    
   };

   ngOnInit() {
     this.route.params.subscribe(params => {
      this.us.editUser(params['id']).subscribe(res => {
        this.user = res ;
      })
     })
   };

   createForm() {
    this.UsersForm = this.fb.group({
      name : ['',Validators.required],
      username : ['',Validators.required],
      email : ['',Validators.required],
      password : ['',Validators.required],
    })
 };
  
 UpdateUser(name , email ,username ,password){
   this.route.params.subscribe(params => {
     this.us.updateUser(name ,email ,username ,password , params['id']);
     this.router.navigate(['users'])
   })
 }
}
