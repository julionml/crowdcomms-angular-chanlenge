import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersDetailComponent } from './speakers-detail.component';

describe('SpeakersDetailComponent', () => {
  let component: SpeakersDetailComponent;
  let fixture: ComponentFixture<SpeakersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakersDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
