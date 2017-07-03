import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'label[gh-label]',
  host:  {
    'class': 'label',
    '[for]': 'for',
  }
})

export class LabelDirective {

  private _for: string;

  @Input()
  get for() { return this._for; }
  set for(value: string) { this._for = value }

  constructor() { }

}
