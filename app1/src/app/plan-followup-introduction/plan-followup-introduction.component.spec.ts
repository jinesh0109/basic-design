import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanFollowupIntroductionComponent } from './plan-followup-introduction.component';

describe('PlanFollowupIntroductionComponent', () => {
  let component: PlanFollowupIntroductionComponent;
  let fixture: ComponentFixture<PlanFollowupIntroductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanFollowupIntroductionComponent]
    });
    fixture = TestBed.createComponent(PlanFollowupIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
