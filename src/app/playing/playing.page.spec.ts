import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingPage } from './playing.page';

describe('PlayingPage', () => {
  let component: PlayingPage;
  let fixture: ComponentFixture<PlayingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
