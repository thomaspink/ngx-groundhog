import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './button/button.directive';
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
  exports: [ButtonDirective, ExpandableComponent, InputfieldDirective, InputContainerComponent, LabelDirective, HintDirective],
  declarations: [ButtonDirective, ExpandableComponent, InputfieldDirective, InputContainerComponent, LabelDirective, HintDirective]
})
export class GroundhogModule { }
