import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsianCupComponent } from './asian-cup.component';

describe('AsianCupComponent', () => {
  let component: AsianCupComponent;
  let fixture: ComponentFixture<AsianCupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsianCupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsianCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
