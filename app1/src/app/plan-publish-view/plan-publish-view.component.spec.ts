import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPublishViewComponent } from './plan-publish-view.component';

describe('PlanPublishViewComponent', () => {
  let component: PlanPublishViewComponent;
  let fixture: ComponentFixture<PlanPublishViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanPublishViewComponent]
    });
    fixture = TestBed.createComponent(PlanPublishViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
