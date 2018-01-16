import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  public user: User;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user = {
      fname:'',
      lname:'',
      email:'',
      phone:null,
      password:'',
      repeatpassword:'',
    }
  }

  save(userForm: User, isValid: boolean) {
  	console.log(userForm);
    if(isValid ==  true){
      // debugger;
      // console.log(userForm);      
      this.userService.saveUser(userForm); 
    }
  }

}
