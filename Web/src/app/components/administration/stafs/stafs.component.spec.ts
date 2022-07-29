import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StafsComponent } from './stafs.component';

describe('StafsComponent', () => {
  let component: StafsComponent;
  let fixture: ComponentFixture<StafsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StafsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StafsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
