import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnhComponent } from './snh.component';

describe('SnhComponent', () => {
  let component: SnhComponent;
  let fixture: ComponentFixture<SnhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
