import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionHitechComponent } from './fashion-hitech.component';

describe('FashionHitechComponent', () => {
  let component: FashionHitechComponent;
  let fixture: ComponentFixture<FashionHitechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionHitechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionHitechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
