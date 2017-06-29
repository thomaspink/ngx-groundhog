import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './button/button.directive';
import { ExpandableComponent } from './expandable/expandable.component';
import { InputfieldDirective } from './inputfield/inputfield.directive';
import { InputContainerComponent } from './inputfield/input-container.component';
import { InputFormExampleComponent } from './input-form-example/input-form-example.component';
import { LabelDirective } from './inputfield/label.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ButtonDirective, ExpandableComponent, InputfieldDirective, InputContainerComponent, InputFormExampleComponent, LabelDirective],
  declarations: [ButtonDirective, ExpandableComponent, InputfieldDirective, InputContainerComponent, InputFormExampleComponent, LabelDirective]
})
export class GroundhogModule { }
