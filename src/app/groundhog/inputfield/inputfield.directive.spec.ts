import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InputfieldDirective } from './inputfield.directive';
import { FormsModule }   from '@angular/forms';
import { GroundhogModule } from '../groundhog.module';

describe('InputfieldDirective', () => {
   beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        GroundhogModule,
      ],
      declarations: [
        InputContainerTestController,
      ],
    });

    TestBed.compileComponents();
  }));

  it('should create an instance', () => {
    let fixture = TestBed.createComponent(InputContainerTestController);
    fixture.detectChanges();
    expect(fixture).toBeTruthy();
  });

  it('should add id', () => {
    let fixture = TestBed.createComponent(InputContainerTestController);
    fixture.detectChanges();
    const inputElement: HTMLInputElement =
        fixture.debugElement.query(By.css('input')).nativeElement;
    // const labelElement: HTMLInputElement =
    //     fixture.debugElement.query(By.css('label')).nativeElement;

    expect(inputElement.id).toBeTruthy();
    // expect(inputElement.id).toEqual(labelElement.getAttribute('for'))
  });
});

@Component({
  template: `
  <gh-input-container>
    <input gh-inputfield type="text">
  </gh-input-container>`
})
class InputContainerTestController {}
