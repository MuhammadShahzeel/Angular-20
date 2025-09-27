import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RTable } from './r-table';

describe('RTable', () => {
  let component: RTable;
  let fixture: ComponentFixture<RTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
