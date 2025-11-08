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

  it('should render title in a h1 tag', waitForAsync(async () => {
    const fixture = TestBed.createComponent(CompareEditorComponent);
    fixture.detectChanges();
    const compareEditor = fixture.debugElement.nativeElement as HTMLElement;
    const h1Element = compareEditor.querySelector('h1');
    await expect(h1Element).toBeTruthy('h1 element should exist');
    if (h1Element) {
      await expect(h1Element.textContent).toContain('Text Compare');
    }
  }));
});
