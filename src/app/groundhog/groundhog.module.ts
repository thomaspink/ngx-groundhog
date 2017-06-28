import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './button/button.directive';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ExpandableComponent } from './expandable/expandable.component';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [ButtonDirective, CheckboxComponent]
  exports: [ButtonDirective, ExpandableComponent],
  declarations: [ButtonDirective, ExpandableComponent]
})
export class GroundhogModule { }
