import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatyAngularComponent } from './platy-angular.component';

describe('PlatyAngularComponent', () => {
  let component: PlatyAngularComponent;
  let fixture: ComponentFixture<PlatyAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatyAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlatyAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
