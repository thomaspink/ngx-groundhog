import { Component, OnInit, Input, Output, ViewChild, ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'gh-checkbox',
  templateUrl: './checkbox.component.html',
  host: {
    'class': 'gh-checkbox',
    '[class.checkbox-checked]': 'checked',
    '[class.checkbox-disabled]': 'disabled',
  },
  inputs: ['disabled'],
})

export class CheckboxComponent {
  @Input() title:string;
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;
  private _checked: boolean = false;
  

  ngOnInit() {
    if(!this.title || this.title === '') throw new Error("Attribute 'title' is required");
  }


  onTrigger() {
    this.checked = !this.checked;
  }

  constructor() {
  }
}
