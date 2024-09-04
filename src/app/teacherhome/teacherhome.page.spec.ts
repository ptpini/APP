import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeacherhomePage } from './teacherhome.page';

describe('TeacherhomePage', () => {
  let component: TeacherhomePage;
  let fixture: ComponentFixture<TeacherhomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
