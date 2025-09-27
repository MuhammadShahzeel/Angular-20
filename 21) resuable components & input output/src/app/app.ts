import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RTable } from "./components/shared/r-table/r-table";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first_app');

  //data for table
  colData :string[] = ['John', 'Jane', 'Doe'];
   rowData = [
    {  name: 'John Doe', email: 'john@gmail.com' },
    {  name: 'Jane Smith', email: 'jane@yahoo.com' },
    {  name: 'Michael Johnson', email: 'michael@outlook.com' }
  ];

  handleEdit(row: any) {
    //here you can use your edit logic
  console.log('Edit row:', row);
}

handleDelete(row: any) {
    //here you can use your delete logic
  console.log('Delete row:', row);
}

}
