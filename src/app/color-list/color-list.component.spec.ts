import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorListComponent } from './color-list.component';

describe('ColorListComponent', () => {
  let component: ColorListComponent;
  let fixture: ComponentFixture<ColorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
