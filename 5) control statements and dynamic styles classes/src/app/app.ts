import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlFlow } from "./components/control-flow/control-flow";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ControlFlow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first_app');
}
