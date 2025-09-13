import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

  // step 1 import ReactiveFormsModule

  // step 2 create form group and bind it on form tag in html
  userForm: FormGroup = new FormGroup({
    // Define form controls here
    userId: new FormControl(0),
    emailId: new FormControl('',[Validators.required, Validators.email]), // ✅ add validations
    password: new FormControl('',[Validators.required, Validators.minLength(6)]), // ✅ add validations
    fullName: new FormControl('',[Validators.required]),
    mobileNo: new FormControl('',[Validators.required, Validators.pattern('^[0-9]{10}$')]),   // ✅ match API key
  });

  //step 3: in input tage use formControlName

  http = inject(HttpClient);
  userList$: Observable<any>;

  constructor(){
    // we are using async pipe
    this.userList$ = this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers'); 
  }

  onSaveUser() {
    debugger
    // step 5 it give you values in object for so we pass in api
    const formValue = this.userForm.value;
    console.log(this.userForm.value);
    // You can add further logic to handle form submission, e.g., sending data to a server

    // Create User and subscribe ma new method ha ye next and error wala
    this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register', formValue).subscribe({
      next: (response: any) => {
        alert('User created successfully')
      },
      error: (error) => {
        alert(error)
      }
    });
  }

  // for edit you need to pass the entire object again
  onEdit(data: any) {
    
this.userForm = new FormGroup({
  
    userId: new FormControl(data.userId),
    emailId: new FormControl(data.emailId),
    password: new FormControl(data.password),
    fullName: new FormControl(data.fullName),
 mobileNo: new FormControl(data.mobileNo),   
  });
  }

  onReset() {
    this.userForm.reset()
  }
}