import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetProdComponent } from './det-prod.component';

describe('DetProdComponent', () => {
  let component: DetProdComponent;
  let fixture: ComponentFixture<DetProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
