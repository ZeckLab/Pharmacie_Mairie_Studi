import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationsPageComponent } from './prestations-page.component';

describe('PrestationsPageComponent', () => {
  let component: PrestationsPageComponent;
  let fixture: ComponentFixture<PrestationsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrestationsPageComponent]
    });
    fixture = TestBed.createComponent(PrestationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
