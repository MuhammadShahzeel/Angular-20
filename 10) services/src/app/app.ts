import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponent } from "./components/my-component/my-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first_app');
}
