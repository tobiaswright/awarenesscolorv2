import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorDropdownComponent } from './color-dropdown.component';

describe('ColorDropdownComponent', () => {
  let component: ColorDropdownComponent;
  let fixture: ComponentFixture<ColorDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
