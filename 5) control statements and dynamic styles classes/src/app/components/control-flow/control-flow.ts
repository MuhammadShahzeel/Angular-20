import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-control-flow',
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {
  selectedCaste: string = '';
  isStudentActive: boolean = false;

  changeStatus(status: boolean) {
    this.isStudentActive = status;}


    cityList: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
students = [
    { name: 'Ali Khan', rollNo: '101', class: 'BSCS-7A', marks: 85, isActive: true },
    { name: 'Sara Ahmed', rollNo: '102', class: 'BSCS-7A', marks: 92, isActive: false },
    { name: 'Bilal Raza', rollNo: '103', class: 'BSCS-7B', marks: 74, isActive: true },
    { name: 'Hina Malik', rollNo: '104', class: 'BSCS-7B', marks: 66, isActive: false },
    { name: 'Usman Iqbal', rollNo: '105', class: 'BSCS-7C', marks: 88, isActive: true }
  ];

  //dynamic classes 
  myClass: string = 'text-white';
  textColor: string = 'text-danger';
  //css from api

cssApi: any= {
  'color': 'red',
  'background-color': 'black'
}

}



