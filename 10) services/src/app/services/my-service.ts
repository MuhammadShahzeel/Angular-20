import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  // for apis
  http = inject(HttpClient);

  //function to sum two numbers
  sum(a: number, b: number): number {
    return a + b;
  }

  //you can use api calls
  getData() {
   

   return this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers"); 
  }

}
