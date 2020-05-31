import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WanttohelpComponent } from './wanttohelp.component';

describe('WanttohelpComponent', () => {
  let component: WanttohelpComponent;
  let fixture: ComponentFixture<WanttohelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WanttohelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WanttohelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
