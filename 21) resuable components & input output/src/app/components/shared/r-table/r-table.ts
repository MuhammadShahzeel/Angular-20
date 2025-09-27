import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-r-table',
  imports: [],
  templateUrl: './r-table.html',
  styleUrl: './r-table.css'
})
export class RTable {
  @Input() headers: string[] = [];
  @Input() data: any[] = [];

  // optional action buttons
  @Input() actions: boolean = false;

  // emit row data
  @Output() editRow = new EventEmitter<any>();
  @Output() deleteRow = new EventEmitter<any>();

  onEdit(row: any) {
    this.editRow.emit(row);
  }

  onDelete(row: any) {
    this.deleteRow.emit(row);
  }

}
