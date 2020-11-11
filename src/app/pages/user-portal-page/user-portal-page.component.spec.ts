import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPortalPageComponent } from './user-portal-page.component';

describe('UserPortalPageComponent', () => {
  let component: UserPortalPageComponent;
  let fixture: ComponentFixture<UserPortalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPortalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPortalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
