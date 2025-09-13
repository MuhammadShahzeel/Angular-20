import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  router = inject(Router);
onLogout() {
  this.router.navigateByUrl('/login');
}
  
}
