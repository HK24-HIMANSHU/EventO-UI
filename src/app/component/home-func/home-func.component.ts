import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-func',
  templateUrl: './home-func.component.html',
  styleUrls: ['./home-func.component.css'],
})
export class HomeFuncComponent implements OnInit {
  @Output() type = new EventEmitter<string>();
  sortList = [
    { id: 1, name: 'Events' },
    { id: 2, name: 'Communities' },
  ];
  selectedValue: string = '';
  getSelectedValue(val: any) {
    this.selectedValue = val.toString();
    this.type.emit(this.selectedValue);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
