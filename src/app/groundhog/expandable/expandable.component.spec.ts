import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { ExpandableComponent } from './expandable.component';

describe('ExpandableComponent', () => {
  let component: ExpandableComponent;
  let fixture: ComponentFixture<ExpandableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableComponent);
    component = fixture.componentInstance;
    component.title = 'test';
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should expanded and collapse the content', () => {
    let el = fixture.debugElement.query(By.css('.expandable'));
    fixture.detectChanges();
    expect(el.classes['is-active']).toBeFalsy();

    fixture.componentInstance.active = true;
    fixture.detectChanges();
    expect(el.classes['is-active']).toBeTruthy();
  });

  it('should handle trigger eq "right"', () => {
    component.trigger = 'right';
    let el = fixture.debugElement.query(By.css('.expandable__trigger'));
    fixture.detectChanges();
    expect(el.classes['expandable__trigger--right']).toBeTruthy();

    component.trigger = 'any';
    fixture.detectChanges();
    expect(el.classes['expandable__trigger--right']).toBeFalsy();

    component.trigger = null;
    fixture.detectChanges();
    expect(el.classes['expandable__trigger--right']).toBeFalsy();
  });

  it('should handle separated', () => {
    component.separated = true;
    let el = fixture.debugElement.query(By.css('.expandable'));
    fixture.detectChanges();
    expect(el.classes['expandable--separated']).toBeTruthy();

    component.separated = false;
    fixture.detectChanges();
    expect(el.classes['expandable--separated']).toBeFalsy();
  });
});