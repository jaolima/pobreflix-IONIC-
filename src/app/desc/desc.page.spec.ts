import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescPage } from './desc.page';

describe('DescPage', () => {
  let component: DescPage;
  let fixture: ComponentFixture<DescPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
