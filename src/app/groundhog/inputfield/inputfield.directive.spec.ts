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
        InputContainerWithUidTestController,
        InputContainerWithInputIdTestController,
        InputContainerWithLabelTestController,
        InputContainerHintTestController,
      ],
    });

    TestBed.compileComponents();
  }));

  it('should create an instance', () => {
    let fixture = TestBed.createComponent(InputContainerTestController);
    fixture.detectChanges();
    expect(fixture).toBeTruthy();
  });

  it('should add id if there is no id set', () => {
    let fixture = TestBed.createComponent(InputContainerTestController);
    fixture.detectChanges();
    const inputElement: HTMLInputElement =
        fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputElement.id).toBeTruthy();
  });

  it('should take uid of container and apply it to id of input', () => {
    let fixture = TestBed.createComponent(InputContainerWithUidTestController);
    fixture.detectChanges();
    const inputElement: HTMLInputElement =
        fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputElement.id).toBeTruthy();
  });

  it('should use existing id', () => {
    let fixture = TestBed.createComponent(InputContainerWithInputIdTestController);
    fixture.detectChanges();
    const inputElement: HTMLInputElement =
        fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputElement.id).toEqual('1');
  });

  it('should have the inputs id as the label for prop', () => {
    let fixture = TestBed.createComponent(InputContainerWithLabelTestController);
    fixture.detectChanges();
    const inputElement: HTMLInputElement =
        fixture.debugElement.query(By.css('input')).nativeElement;
    const labelElement: HTMLInputElement =
        fixture.debugElement.query(By.css('label')).nativeElement;
    expect(inputElement.id).toEqual(labelElement.getAttribute('for'));
  });

  it('should set the ariaDescribedby prop if there is a hint', () => {
    let fixture = TestBed.createComponent(InputContainerHintTestController);
    fixture.detectChanges();
    const inputElement: HTMLInputElement =
        fixture.debugElement.query(By.css('input')).nativeElement;
    const hintElement: HTMLInputElement =
        fixture.debugElement.query(By.css('p')).nativeElement;
    expect(inputElement.getAttribute('aria-describedby')).toEqual(hintElement.id);
  })
});

@Component({
  template: `
  <gh-input-container>
    <input gh-inputfield type="text">
  </gh-input-container>`
})
class InputContainerTestController {}

@Component({
  template: `
  <gh-input-container uid="1">
    <input gh-inputfield type="text">
  </gh-input-container>`
})
class InputContainerWithUidTestController {}

@Component({
  template: `
  <gh-input-container>
    <input gh-inputfield id="1" type="text">
  </gh-input-container>`
})
class InputContainerWithInputIdTestController {}

@Component({
  template: `
  <gh-input-container>
    <label gh-label></label>
    <input gh-inputfield type="text">
  </gh-input-container>`
})
class InputContainerWithLabelTestController {}

@Component({
  template: `
  <gh-input-container>
    <input gh-inputfield type="text">
    <p gh-hint></p>
  </gh-input-container>`
})
class InputContainerHintTestController {}
