import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Featurettes } from './featurettes';

describe('Featurettes', () => {
  let component: Featurettes;
  let fixture: ComponentFixture<Featurettes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Featurettes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Featurettes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
