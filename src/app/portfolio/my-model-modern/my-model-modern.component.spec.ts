import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModelModernComponent } from './my-model-modern.component';

describe('MyModelModernComponent', () => {
  let component: MyModelModernComponent;
  let fixture: ComponentFixture<MyModelModernComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyModelModernComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyModelModernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
