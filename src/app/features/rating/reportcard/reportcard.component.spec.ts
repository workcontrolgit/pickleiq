import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReportcardComponent } from './reportcard.component';

describe('ReportcardComponent', () => {
  let component: ReportcardComponent;
  let fixture: ComponentFixture<ReportcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReportcardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
