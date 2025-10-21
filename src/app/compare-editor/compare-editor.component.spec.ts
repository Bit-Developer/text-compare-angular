import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompareEditorComponent } from './compare-editor.component';

describe('TextCompareComponent', () => {
  let component: CompareEditorComponent;
  let fixture: ComponentFixture<CompareEditorComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompareEditorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    await expect(component).toBeTruthy();
  });
});
