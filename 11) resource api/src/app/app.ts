import { HttpClient } from '@angular/common/http';
import { Component, inject, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first_app');

  http = inject(HttpClient);


  //resource work with promise so we have to use fetch

  userData = resource({
    loader: () => 
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
  });

  //instead of using promise it uses httpClient
  userDataRx = rxResource({
    stream: () => this.http.get<any[]>("https://jsonplaceholder.typicode.com/users")
  });


  //refresh after 6s

  /**
   *
   */
  constructor() {
  
    setTimeout(() => {
      this.userData.reload();
    }, 6000);
  }
}

