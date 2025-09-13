import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Signal } from "./components/signal/signal";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Signal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my_app');
}
