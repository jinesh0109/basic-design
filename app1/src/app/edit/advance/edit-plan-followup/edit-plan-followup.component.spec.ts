import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlanFollowupComponent } from './edit-plan-followup.component';

describe('EditPlanFollowupComponent', () => {
  let component: EditPlanFollowupComponent;
  let fixture: ComponentFixture<EditPlanFollowupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPlanFollowupComponent]
    });
    fixture = TestBed.createComponent(EditPlanFollowupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
