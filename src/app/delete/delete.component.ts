import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input() item: string | undefined;
  //@INPUT() used to hold data from the parent component
  @Output() onCancel = new EventEmitter();
  // oncancel==user defind event
  @Output() onDelete = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  cancel() {
    this.onCancel.emit();

  }
  delete() {
    // alert('delete clicked')
    this.onDelete.emit(this.item);
  }
}
