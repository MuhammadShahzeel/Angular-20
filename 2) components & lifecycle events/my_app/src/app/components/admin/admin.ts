import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, JsonPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, JsonPipe, DatePipe],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin implements OnInit, AfterViewInit, OnDestroy {

  // 🔹 constructor
  // When it runs: Immediately when component is CREATED in memory
  // Use: initialize variables, inject services
  // ❌ Don’t do API calls (component not ready yet)
  // constructor not part of lifecycle
  constructor() {
    console.log('constructor run');
  }

  //----lifecycle hooks/events----

  // 🔹 ngOnInit
  // When it runs: Right AFTER constructor, when component is INITIALIZED
  // Use: API calls, fetching data, starting subscriptions
  ngOnInit(): void {
    console.log('ngOnInit run');
  }

  // 🔹 ngAfterViewInit
  // When it runs: AFTER the HTML (view) of the component is CREATED & rendered
  // Use: DOM manipulations, initialize charts/maps, focus input fields
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit run');
  }

  // 🔹 ngOnDestroy
  // When it runs: Just BEFORE the component is DESTROYED (like navigating away or removing component)
  // Use: cleanup → unsubscribe from Observables, clear timers/intervals, remove event listeners
  ngOnDestroy(): void {
    console.log('ngOnDestroy run');
  }

    // 🔹 pipes
    // variables for pipes
  name: string = "mUhAmMaD sHaZeEl";
  fruits: string[] = ["Apple", "Banana", "Mango", "Orange", "Peach"];
  student = { id: 101, name: "Ali", course: "Angular" };
  today: Date = new Date();



}
