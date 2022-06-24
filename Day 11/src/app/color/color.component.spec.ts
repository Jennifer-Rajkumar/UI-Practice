import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ColorComponent } from './color.component';

describe('ColorComponent', () => {
  let component: ColorComponent;
  let fixture: ComponentFixture<ColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should add green class to div on click of the green button',()=>{
    //Getting instance of green button
    const btn = fixture.debugElement.query(By.css('.green-btn'));
    //Triggering the click event of that button
    btn.triggerEventHandler('click',null);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.green'))).toBeTruthy();
  });

  it('Should add red class to div on click of the red button',()=>{
    //Getting instance of green button
    const btn = fixture.debugElement.query(By.css('.red-btn'));
    //Triggering the click event of that button
    btn.triggerEventHandler('click',null);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.green'))).toBeFalsy();
  });
});
