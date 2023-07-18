import { TestBed } from '@angular/core/testing';

import { SharedJsonService } from './shared-json.service';

describe('SharedJsonService', () => {
    let service: SharedJsonService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SharedJsonService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});