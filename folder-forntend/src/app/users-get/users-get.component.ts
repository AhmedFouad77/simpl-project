import { Component, OnInit } from '@angular/core';
import  User  from '../users';
import {UsersService} from '../users.service' ;


@Component({
  selector: 'app-users-get',
  templateUrl: './users-get.component.html',
  styleUrls: ['./users-get.component.css']
})
export class UsersGetComponent implements OnInit {
users : User[];
  constructor(private us : UsersService) { }

  ngOnInit() {
    this.us.getUsers().subscribe((data : User[])=>{
      this.users = data
    })
  }  
  deleteUser(id){
    this.us.deleteUser(id).subscribe((res) =>{
      console.log(res)
    })
  }

}
