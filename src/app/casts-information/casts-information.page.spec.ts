import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastsInformationPage } from './casts-information.page';

describe('CastsInformationPage', () => {
  let component: CastsInformationPage;
  let fixture: ComponentFixture<CastsInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastsInformationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastsInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
