import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmenuitemComponent } from './newmenuitem.component';

describe('NewmenuitemComponent', () => {
  let component: NewmenuitemComponent;
  let fixture: ComponentFixture<NewmenuitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewmenuitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewmenuitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
