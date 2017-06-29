import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gh-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})

export class CheckboxComponent {

  @Input() disable: boolean = false;


  constructor() {
  }
}
