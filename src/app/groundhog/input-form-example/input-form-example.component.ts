import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'input-form-example',
  templateUrl: './input-form-example.component.html'
})
export class InputFormExampleComponent implements OnInit {

  model: any;
  @ViewChild('inputForm') inputForm: NgForm;

  constructor() {
    this.model = {
      first: '',
      second: '',
    }
   }

  ngOnInit() {
  }
}
