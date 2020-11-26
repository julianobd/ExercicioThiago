import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersAddComponent } from './servers-add.component';

describe('ServersAddComponent', () => {
  let component: ServersAddComponent;
  let fixture: ComponentFixture<ServersAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServersAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
