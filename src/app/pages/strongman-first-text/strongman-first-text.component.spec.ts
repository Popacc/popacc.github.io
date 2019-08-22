import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongmanFirstTextComponent } from './strongman-first-text.component';

describe('StrongmanFirstTextComponent', () => {
  let component: StrongmanFirstTextComponent;
  let fixture: ComponentFixture<StrongmanFirstTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrongmanFirstTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrongmanFirstTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
