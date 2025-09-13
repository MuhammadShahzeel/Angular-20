import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Master } from '../../services/master';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  masterService = inject(Master);

  router = inject(Router);
onLogin() {
  if(this.loginObj.userName == 'ad' && this.loginObj.password == '112') {
    localStorage.setItem('userName', this.loginObj.userName);
    this.masterService.onLogin.next(true);
    this.router.navigateByUrl("/about");
  } else {
    alert("Wrong Credentials")
  }
}


  loginObj :any= {
    userName: '',
    password: ''
  };

}
