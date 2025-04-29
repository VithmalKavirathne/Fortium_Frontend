import { Component } from '@angular/core';
import { UserService } from '../service/service.component';

@Component({
  selector: 'app-sign-in',
  imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  userService: UserService = new UserService();
  register(name: string,email: string, password: string){
    this.userService.saveUser(email, password, name).then((result) => {
      if (result) {
        console.log("User registered successfully!");
      } else {
        console.log("Failed to register user.");
      }
    });
  }
}
