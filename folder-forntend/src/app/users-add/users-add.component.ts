import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms' ;
import { UsersService } from '../users.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {
  // Start Validation On Form
  UsersForm: FormGroup;
  constructor(private fb: FormBuilder , private UsersService: UsersService ) {
    this.createForm();
   }
   createForm() {
    this.UsersForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.email
      ])],
      username: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])]
    });
  }
  // End Validation On Form
  // Start

  //  End
  addUser(name, email, username, password) {
    this.UsersService.addUser(name, email, username, password);
  }
  ngOnInit() {
  }

}
