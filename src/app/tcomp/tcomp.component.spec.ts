import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcompComponent } from './tcomp.component';

describe('TcompComponent', () => {
  let component: TcompComponent;
  let fixture: ComponentFixture<TcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
