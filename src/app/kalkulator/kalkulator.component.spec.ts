import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalkulatorComponent } from './kalkulator.component';

describe('KalkulatorComponent', () => {
  let component: KalkulatorComponent;
  let fixture: ComponentFixture<KalkulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KalkulatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KalkulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
