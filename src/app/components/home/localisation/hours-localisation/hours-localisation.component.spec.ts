import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursLocalisationComponent } from './hours-localisation.component';

describe('HoursLocalisationComponent', () => {
    let component: HoursLocalisationComponent;
    let fixture: ComponentFixture<HoursLocalisationComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HoursLocalisationComponent]
        });
        fixture = TestBed.createComponent(HoursLocalisationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});