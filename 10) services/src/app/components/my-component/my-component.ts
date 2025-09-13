import { Component, inject } from '@angular/core';
import { MyService } from '../../services/my-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-component',
  imports: [],
  templateUrl: './my-component.html',
  styleUrl: './my-component.css'
})
export class MyComponent {

  // to use service inject
//   constructor(private myService: MyService) {}

//or inject like this
myService = inject(MyService);





ngOnInit() {
  const result = this.myService.sum(2, 3);
  console.log('Sum:', result);
}

getUsers() {
  //api data
  this.myService.getData().subscribe((data) => {
    console.log('API Data:', data);
  });
}}
