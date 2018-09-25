import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SreenFirstComponent } from './sreen-first.component';

describe('SreenFirstComponent', () => {
  let component: SreenFirstComponent;
  let fixture: ComponentFixture<SreenFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SreenFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SreenFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
