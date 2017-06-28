import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-form-example',
  templateUrl: './input-form-example.component.html',
  styleUrls: ['./input-form-example.component.scss']
})
export class InputFormExampleComponent implements OnInit {

  model: any;

  constructor() {
    this.model = {
      first: '',
      second: '',
    }
   }

  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.model); }
}
