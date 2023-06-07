import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  @Input() items: any[] = [];

  @Output() sendOutValue = new EventEmitter<string>();

  selectedValue: string = '';
  onChange() {
    this.sendOutValue.emit(this.selectedValue);
  }
  ngOnInit(): void {
    if (this.items.length == 0) {
      this.selectedValue = 'NA';
    } else {
      this.selectedValue = this.items[0].id;
    }
  }
}
