import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './button/button.directive';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonDirective, CheckboxComponent]
})
export class GroundhogModule { }
