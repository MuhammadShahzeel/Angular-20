import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {


  //variables
  courseName: string = "Angular 20";
  isActive: boolean = false;
  currentDate: Date = new Date();
  rollNo: number = 222;
  myClass: string = "secondary";


  constructor() {
    // accessing variables
    console.log(this.courseName);
    // updating variables
    this.courseName = "Angular 20 Tutorial";
    
    console.log(this.courseName);
  }
  showAlert():void{
    alert('alert!');
  }

  //aesi function ki example
  anotherFunction(name:string):string{

    return name;
  }


  }

