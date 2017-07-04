import { Directive, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';


@Directive({
  selector: 'a[gh-button-primary], button[gh-button-primary]',
  host:  {
    'class': 'btn btn--primary',
    '[disabled]': 'disabled',
  }
})

export class ButtonPrimaryDirective {

  private _disabled = false;

  constructor(@Optional() @Self() public _ngControl: NgControl ) {
  }

  @Input()
  get disabled() {
    return this._ngControl ? this._ngControl.disabled : this._disabled;
  }

  set disabled(value: any) {
    this._disabled = value != null && `${value}` !== 'false';
  }
}


@Directive({
  selector: 'a[gh-button-secondary], button[gh-button-secondary]',
  host:  {
    'class': 'btn btn--secondary',
    '[disabled]': 'disabled',
  }
})

export class ButtonSecondaryDirective extends ButtonPrimaryDirective {}