import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhotoStudentComponent } from './add-photo-student.component';

describe('AddPhotoStudentComponent', () => {
  let component: AddPhotoStudentComponent;
  let fixture: ComponentFixture<AddPhotoStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPhotoStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPhotoStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
