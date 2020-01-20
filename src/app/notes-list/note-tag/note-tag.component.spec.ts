import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTagComponent } from './note-tag.component';

describe('NoteTagComponent', () => {
  let component: NoteTagComponent;
  let fixture: ComponentFixture<NoteTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
