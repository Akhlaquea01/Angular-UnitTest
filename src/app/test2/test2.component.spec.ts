import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2Component } from './test2.component';

describe('Test2Component', () => {
  let component: Test2Component;
  let fixture: ComponentFixture<Test2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('interpolation test case', () => {
    const name: HTMLElement = fixture.debugElement.nativeElement.querySelector('#name');
    expect(name.innerHTML).toEqual(component.name);

    component.name = 'Akhlaque Ahmad';
    fixture.detectChanges();
    expect(name.innerHTML).toEqual(component.name);
  });

  it('ngClass test case for P', () => {
    const p: HTMLElement = fixture.debugElement.nativeElement.querySelector('#header');
    expect(p.getAttribute('class')).toContain('red');
  });
});
