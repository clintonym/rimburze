import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisasiPage } from './organisasi.page';

describe('OrganisasiPage', () => {
  let component: OrganisasiPage;
  let fixture: ComponentFixture<OrganisasiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisasiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
