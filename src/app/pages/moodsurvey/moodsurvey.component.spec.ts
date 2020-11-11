import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodsurveyComponent } from './moodsurvey.component';

describe('MoodsurveyComponent', () => {
  let component: MoodsurveyComponent;
  let fixture: ComponentFixture<MoodsurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoodsurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodsurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
