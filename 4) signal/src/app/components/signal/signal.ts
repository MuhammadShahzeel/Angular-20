import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css'
})
export class Signal {

  //normal variable
  myVariable: string = "Hello normal";

  //signal variable
  mySignalVariable = signal("Hello Signal");

  //signal which accepts a string data
  mySignalWithReturn = signal<string>("Hello Signal");


  // signal just like useState in React

  changeValue(): void {

    // updating normal variable
    this.myVariable = "New Normal Variable Value";

    // updating signal variable 

    //set only use when you want to replace the entire value
    this.mySignalVariable.set("New Signal Value");
    this.mySignalWithReturn.set("New Signal With Return Value");

  }
   // update only use when you want to change a part of the value exisiting value + new value

  // signal for cities
  //array
  cities = signal<string[]>(["New York", "Los Angeles", "Chicago"]);

  addCity(newCity: string) {
    this.cities.update((old: string[]) => [...old, newCity]);
  }

  // object 

  studentObj1 = signal<any>({
    name: 'John Doe',
    city: 'New York'
  })

  studentObj2 = signal<any>({
    name: 'shahzeel',
    city: 'Los Angeles'
  })



  updateObj() {
  this.studentObj1.update((oldObj: any) => ({ ...oldObj, city: 'Thane' }))

  
}
  setObj() {
  this.studentObj2.set({
    name: 'AAA',
    city: 'Mumbai'
  })
}}

