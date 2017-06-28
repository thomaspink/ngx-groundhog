import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './button/button.directive';
import { ExpandableComponent } from './expandable/expandable.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ButtonDirective, ExpandableComponent],
  declarations: [ButtonDirective, ExpandableComponent]
})
export class GroundhogModule { }
