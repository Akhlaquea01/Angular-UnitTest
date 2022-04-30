import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let h1: HTMLElement;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Add method', () => {
    expect(component.Addition(5, 5)).toBe(10);
  });

  it('ToBe and EqualTo Test case', () => {
    var a = 'Hello';
    var b = 'Hello';
    // expect(a).toBe(b); // To be works for premitive data Type i.e string,numbers, Boolean only
    expect(a).toEqual(b);
  });

  it('toBeGreaterThan', () => {
    // expect(component.Addition(5, 5)).toBeGreaterThan(1);
    expect(component.Addition(5, 5)).toBeGreaterThanOrEqual(1);
  });

  it('Jasmin Matcher', () => {
    var input = 'My name is Akhlaque';
    var mobileNo = "91-8797247279"
    expect(input).toMatch(/Akhlaque/);
    expect(input).toMatch(/name/);
    expect(input).not.toMatch(/Atts/);
    expect(mobileNo).toMatch(/\d{2}-\d{10}/);
  });
  
  it('toBeDefined', () => {
    expect(component.object).toBeDefined();
    expect(component.variableTobe).not.toBeDefined();
    expect(component.Addition).not.toBeUndefined();
  })

  beforeEach(() => {
    console.log('BeforeEach');
  });

  afterAll(() => {
    console.log('Finished');
  });

  it('increase Cont', () => {
    component.increaseCount(2);
    expect(component.count).toBe(2);
  });

  it('decrease Cont', () => {
    component.decreaseCount(2);
    expect(component.count).toBe(-2);
  });

  it('spyOn', () => {
    spyOn(component, 'saveData');
    component.saveData({
      sumValue: component.calculate(10, 20)
    });
    expect(component.saveData).toHaveBeenCalled();
  });

  it('verify the h1 element value', () => {
    component.studentSchoolResult();
    fixture.detectChanges();
    expect(h1.textContent).toBe(component.studentResult);
  });

  it('increase count click', () => {
    const h1 = debug.query(By.css('h1'));
    const btn = debug.query(By.css('#btnincreaseNumber'));

    btn.triggerEventHandler('click', {});
    fixture.detectChanges();

    expect(component.countNumber).toEqual(Number(h1.nativeElement.innerText)+1);
  });

  it('private method call', () => {
    component['privateMethod']();
    expect(component.countNumber).toEqual(50);
  });

  it('private method spyOn', () => {
    let spyName = spyOn<any>(component, 'privateMethod');
    component['privateMethod']();
    expect(spyName).toHaveBeenCalled();
  });
});
