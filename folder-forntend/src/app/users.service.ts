import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  uri = 'http://localhost:3333/users';

  constructor( private http: HttpClient ) { }

  addUser(name, email, username, password) {
    const user = {
      name : name ,
      email: email ,
      username: username ,
      password: password ,
    };

    console.log(user);
    this.http.post(`${this.uri}/add`, user).subscribe(res => {console.log('The res ' + res); });
   } // End Add User


   getUsers() {
     return this.http.get(`${this.uri}`)
   }; // End Get Users


   editUser( id ){
     return this.http.get(`${this.uri}/user/${id}`)
   }
   updateUser(name ,email ,username , password , id){
    let UserData = {
      name     : name,
      email    : email,
      username : username,
      password : password ,
    }
    this.http.put(`${this.uri}/update/${id}`, UserData).subscribe(res =>{console.log('User Updated Successfully , The rus = '+res['msg'])})
   }
   deleteUser(id){
     return this.http.delete(`${this.uri}/delete/${id}`)
   }
}
