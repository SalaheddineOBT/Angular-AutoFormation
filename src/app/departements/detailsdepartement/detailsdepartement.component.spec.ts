import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsdepartementComponent } from './detailsdepartement.component';

describe('DetailsdepartementComponent', () => {
  let component: DetailsdepartementComponent;
  let fixture: ComponentFixture<DetailsdepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsdepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsdepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
