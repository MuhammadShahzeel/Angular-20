import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Master } from '../../services/master';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  router = inject(Router);
  loggedUserName: string = ''
 constructor(private masterService: Master) {
  this.readLoggedData();
  this.masterService.onLogin.subscribe(res => {
    this.readLoggedData();
  })
}

readLoggedData() {
  const loggedData = localStorage.getItem("userName");
  if (loggedData != null) {
    this.loggedUserName = loggedData;
  }
}

onLogOff() {
  localStorage.removeItem("userName");
  this.readLoggedData();
  this.loggedUserName = '';
  this.router.navigateByUrl("/login");
}
}
