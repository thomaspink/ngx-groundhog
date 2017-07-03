import { Directive, Input } from '@angular/core';

let nextUniqueId = 0;

@Directive({
  selector: '[gh-hint]',
  host:  {
    'class': 'hint',
    '[id]': 'id',
  },
})

export class HintDirective {

  private _id: string;

  constructor() {
    // Force setter to be called in case id was not specified.
    this.id = this.id;
  }

  @Input()
  get id() { return this._id; }
  set id(value: string) { this._id = value ||  `gh-hint-${nextUniqueId++}`}
}
