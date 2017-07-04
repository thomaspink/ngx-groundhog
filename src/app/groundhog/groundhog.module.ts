import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryDirective } from './button/button.directive';
import { ButtonSecondaryDirective } from './button/button.directive';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ExpandableComponent } from './expandable/expandable.component';
import { InputfieldDirective } from './inputfield/inputfield.directive';
import { InputContainerComponent } from './inputfield/input-container.component';
import { LabelDirective } from './inputfield/label.directive';
import { HintDirective } from './inputfield/hint.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ButtonPrimaryDirective, ButtonSecondaryDirective, ExpandableComponent, InputfieldDirective, InputContainerComponent, LabelDirective, HintDirective, CheckboxComponent],
  declarations: [ButtonPrimaryDirective, ButtonSecondaryDirective, ExpandableComponent, InputfieldDirective, InputContainerComponent, LabelDirective, HintDirective, CheckboxComponent]
})
export class GroundhogModule { }
