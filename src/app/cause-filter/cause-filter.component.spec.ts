import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseFilterComponent } from './cause-filter.component';

describe('CauseFilterComponent', () => {
  let component: CauseFilterComponent;
  let fixture: ComponentFixture<CauseFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CauseFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CauseFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
