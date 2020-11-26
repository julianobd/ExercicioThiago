import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesGetComponent } from './machines-get.component';

describe('MachinesGetComponent', () => {
  let component: MachinesGetComponent;
  let fixture: ComponentFixture<MachinesGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachinesGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinesGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
