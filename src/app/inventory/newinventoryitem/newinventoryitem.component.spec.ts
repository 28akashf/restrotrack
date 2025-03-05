import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewinventoryitemComponent } from './newinventoryitem.component';

describe('NewinventoryitemComponent', () => {
  let component: NewinventoryitemComponent;
  let fixture: ComponentFixture<NewinventoryitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewinventoryitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewinventoryitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
