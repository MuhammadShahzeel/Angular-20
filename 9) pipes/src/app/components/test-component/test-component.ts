import { Component } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, JsonPipe, DatePipe } from '@angular/common';
import { NaPipe } from "../../pipes/na-pipe";

@Component({
  selector: 'app-test-component',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, JsonPipe, DatePipe, NaPipe],
  templateUrl: './test-component.html',
  styleUrl: './test-component.css'
})
export class TestComponent {
  name: string = "mUhAmMaD sHaZeEl";
  fruits: string[] = ["Apple", "Banana", "Mango", "Orange", "Peach"];
  student = { id: 101, name: "Ali", course: "Angular" };
  today: Date = new Date();
  emptyString: string = "";

}
