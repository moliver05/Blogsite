import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotolioComponent } from './photolio.component';

describe('PhotolioComponent', () => {
  let component: PhotolioComponent;
  let fixture: ComponentFixture<PhotolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
