import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudenthomePage } from './studenthome.page';

describe('StudenthomePage', () => {
  let component: StudenthomePage;
  let fixture: ComponentFixture<StudenthomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenthomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
