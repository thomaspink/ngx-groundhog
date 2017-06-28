import { Directive, Input, Output, EventEmitter, Optional, Self, ElementRef, Renderer2, } from '@angular/core';
import { FormGroupDirective, NgControl, NgForm, FormControl } from '@angular/forms';

const INPUT_VALID_TYPES = [
  'text',
  'password',
  'email',
  'date',
  'datetime',
  'datetime-local',
  'month',
  'time',
  'week',
  'number',
  'search',
  'url',
];

let nextUniqueId = 0;

@Directive({
  selector: 'input[gh-inputfield]',
  host:  {
    'class': 'inputfield',
    // Native input properties that are overwritten by Angular inputs need to be synced with
    // the native input element. Otherwise property bindings for those don't work.
    '[id]': 'id',
    '[placeholder]': 'placeholder',
    '[disabled]': 'disabled',
    '[required]': 'required',
    '[attr.aria-describedby]': 'ariaDescribedby || null',
    '[attr.aria-invalid]': '_isErrorState()',
    '(blur)': '_onBlur()',
    '(focus)': '_onFocus()',
    '(input)': '_onInput()',
  }
})
export class InputfieldDirective {

  /** Variables used as cache for getters and setters. */
  private _type = 'text';
  private _placeholder: string = '';
  private _disabled = false;
  private _required = false;
  private _id: string;
  private _cachedUid: string;
  private errorStateMatcher: Function;

  /** Whether the element is focused or not. */
  focused = false;

  /** Sets the aria-describedby attribute on the input for improved a11y. */
  ariaDescribedby: string;

  /** Whether the element is disabled. */
  @Input()
  get disabled() {
    return this._ngControl ? this._ngControl.disabled : this._disabled;
  }

  set disabled(value: any) {
    this._disabled = value != null && `${value}` !== 'false';
  }

  /** Unique id of the element. */
  @Input()
  get id() { return this._id; }
  set id(value: string) {this._id = value || this._uid; }

  /** Placeholder attribute of the element. */
  @Input()
  get placeholder() { return this._placeholder; }
  set placeholder(value: string) {
    if (this._placeholder !== value) {
      this._placeholder = value;
      this._placeholderChange.emit(this._placeholder);
    }
  }

  /** Whether the element is required. */
  @Input()
  get required() { return this._required; }
  set required(value: any) { this._required = value != null && `${value}` !== 'false'; }

  /** Input type of the element. */
  @Input()
  get type() { return this._type; }
  set type(value: string) {
    this._type = value || 'text';
    this._validateType();

    // When using Angular inputs, developers are no longer able to set the properties on the native
    // input element. To ensure that bindings for `type` work, we need to sync the setter
    // with the native property.
    if (INPUT_VALID_TYPES.includes(this._type)) {
      this._renderer.setProperty(this._elementRef.nativeElement, 'type', this._type);
    }
  }

  /** The input element's value. */
  get value() { return this._elementRef.nativeElement.value; }
  set value(value: string) { this._elementRef.nativeElement.value = value; }

  /**
   * Emits an event when the placeholder changes so that the `md-input-container` can re-validate.
   */
  @Output() _placeholderChange = new EventEmitter<string>();

  /** Whether the input is empty. */
  get empty() {
    return !this._isNeverEmpty() &&
        (this.value == null || this.value === '') &&
        // Check if the input contains bad input. If so, we know that it only appears empty because
        // the value failed to parse. From the user's perspective it is not empty.
        // TODO(mmalerba): Add e2e test for bad input case.
        !this._isBadInput();
  }

  private get _uid() { return this._cachedUid = this._cachedUid || `gh-inputfield-${nextUniqueId++}`; }

  private _neverEmptyInputTypes = [
    'date',
    'datetime',
    'datetime-local',
    'month',
    'time',
    'week'
  ].filter(t => INPUT_VALID_TYPES.includes(t));

  constructor(private _elementRef: ElementRef,
              private _renderer: Renderer2,
              @Optional() @Self() public _ngControl: NgControl,
              @Optional() private _parentForm: NgForm,
              @Optional() private _parentFormGroup: FormGroupDirective) {

    // Force setter to be called in case id was not specified.
    this.id = this.id;
    this.errorStateMatcher = (control: FormControl, form: FormGroupDirective | NgForm) => {
      const isSubmitted = form && form.submitted;
      return !!(control.invalid && (control.touched || isSubmitted)); 
    };
  }

  /** Focuses the input element. */
  focus() { this._elementRef.nativeElement.focus(); }

  _onFocus() { this.focused = true; }

  _onBlur() { this.focused = false; }

  _onInput() {
    // This is a noop function and is used to let Angular know whenever the value changes.
    // Angular will run a new change detection each time the `input` event has been dispatched.
    // It's necessary that Angular recognizes the value change, because when floatingLabel
    // is set to false and Angular forms aren't used, the placeholder won't recognize the
    // value changes and will not disappear.
    // Listening to the input event wouldn't be necessary when the input is using the
    // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
  }

  /** Whether the input is in an error state. */
  _isErrorState(): boolean {
    const control = this._ngControl;
    const form = this._parentFormGroup || this._parentForm;
    return control && this.errorStateMatcher(control.control as FormControl, form);
  }

  /** Make sure the input is a supported type. */
  private _validateType() {
    if (INPUT_VALID_TYPES.indexOf(this._type) === -1) {
      throw new Error(`${this._type} is not supported`);
    }
  }

  private _isNeverEmpty() { return this._neverEmptyInputTypes.indexOf(this._type) !== -1; }

  private _isBadInput() {
    // The `validity` property won't be present on platform-server.
    let validity = (this._elementRef.nativeElement as HTMLInputElement).validity;
    return validity && validity.badInput;
  }

}
