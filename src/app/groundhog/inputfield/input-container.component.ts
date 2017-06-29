import { AfterViewInit, AfterContentInit, AfterContentChecked, Component, OnInit, Input, ViewEncapsulation, ChangeDetectorRef, ElementRef, ContentChild } from '@angular/core';

import { InputfieldDirective } from './inputfield.directive';
import { LabelDirective } from './label.directive';
import { HintDirective } from './hint.directive';

let nextUniqueId = 0;

/**
 * Container for text inputs that applies Material Design styling and behavior.
 */
@Component({
  moduleId: module.id,
  selector: 'gh-input-container',
  templateUrl: './input-container.component.html',
  host: {
    // Remove align attribute to prevent it from interfering with layout.
    '[attr.uid]': '_shouldSetIdForChildren()',
    '[attr.align]': 'null',
    '[class.gh-inputfield-invalid]': '_inputChild._isErrorState()',
    '[class.gh-focused]': '_inputChild.focused',
    '[class.ng-untouched]': '_shouldForward("untouched")',
    '[class.ng-touched]': '_shouldForward("touched")',
    '[class.ng-pristine]': '_shouldForward("pristine")',
    '[class.ng-dirty]': '_shouldForward("dirty")',
    '[class.ng-valid]': '_shouldForward("valid")',
    '[class.ng-invalid]': '_shouldForward("invalid")',
    '[class.ng-pending]': '_shouldForward("pending")',
    '(click)': '_focusInput()',
  },
  encapsulation: ViewEncapsulation.None,
})

export class InputContainerComponent implements AfterViewInit, AfterContentInit, AfterContentChecked {

  private _uid: string;

  @Input()
  get uid() { return this._uid; }
  set uid(value: string) {this._uid = value }

  @ContentChild(InputfieldDirective) _inputChild: InputfieldDirective;
  @ContentChild(LabelDirective) _labelChild: LabelDirective;

  @ContentChild(HintDirective) _hint: HintDirective;

  constructor(public _elementRef: ElementRef, private _changeDetectorRef: ChangeDetectorRef) {}

  ngAfterContentInit() {
    this._validateInputChild();
    this._syncAriaDescribedby();
  }

  ngAfterContentChecked() {
    this._validateInputChild();
  }

  ngAfterViewInit() {
    this._changeDetectorRef.detectChanges();
  }

  /** Determines whether a class from the NgControl should be forwarded to the host element. */
  _shouldForward(prop: string): boolean {
    let control = this._inputChild ? this._inputChild._ngControl : null;
    return control && (control as any)[prop];
  }

  _shouldSetIdForChildren() {
    if(this._uid) {
      if(this._inputChild) {
        this._inputChild.id = this._inputChild.id || this._uid;
      }
      if(this._labelChild) {
        this._labelChild.for = this._labelChild.for || this._inputChild.id;
      }
    }
  }

  /** Whether the input has a placeholder. */
  _hasPlaceholder() { return !!(this._inputChild.placeholder); }

  /** Focuses the underlying input. */
  _focusInput() { this._inputChild.focus(); }

  /**
   * Sets the child input's `aria-describedby` to a space-separated list of the ids
   * of the currently-specified hints, as well as a generated id for the hint label.
   */
  private _syncAriaDescribedby() {
    if (this._inputChild) {
      if (this._hint) {
        this._inputChild.ariaDescribedby = this._hint.id;
      }
    }
  }

  /**
   * Throws an error if the container's input child was removed.
   */
  private _validateInputChild() {
    if (!this._inputChild) {
      throw new Error('input child was removed');
    }
  }
}