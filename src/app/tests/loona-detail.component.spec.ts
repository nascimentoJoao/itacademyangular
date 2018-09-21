import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoonaDetailComponent } from '../components/ts/loona-detail.component';

describe('LoonaDetailComponent', () => {
  let component: LoonaDetailComponent;
  let fixture: ComponentFixture<LoonaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoonaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoonaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
