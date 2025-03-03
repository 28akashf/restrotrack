import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstaffComponent } from './newstaff.component';

describe('NewstaffComponent', () => {
  let component: NewstaffComponent;
  let fixture: ComponentFixture<NewstaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewstaffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
