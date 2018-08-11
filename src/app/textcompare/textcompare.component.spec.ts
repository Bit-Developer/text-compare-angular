import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCompareComponent } from './textcompare.component';

describe('TextCompareComponent', () => {
  let component: TextCompareComponent;
  let fixture: ComponentFixture<TextCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
