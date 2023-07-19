import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressLocalisationComponent } from './address-localisation.component';

describe('AddressLocalisationComponent', () => {
    let component: AddressLocalisationComponent;
    let fixture: ComponentFixture<AddressLocalisationComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AddressLocalisationComponent]
        });
        fixture = TestBed.createComponent(AddressLocalisationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});