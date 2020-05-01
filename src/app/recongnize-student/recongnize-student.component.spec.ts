import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecongnizeStudentComponent } from './recongnize-student.component';

describe('RecongnizeStudentComponent', () => {
  let component: RecongnizeStudentComponent;
  let fixture: ComponentFixture<RecongnizeStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecongnizeStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecongnizeStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
