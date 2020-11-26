import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesEditComponent } from './machines-edit.component';

describe('MachinesEditComponent', () => {
  let component: MachinesEditComponent;
  let fixture: ComponentFixture<MachinesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachinesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
