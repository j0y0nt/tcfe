import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignTacosComponent } from './design-tacos.component';

describe('DesignTacosComponent', () => {
  let component: DesignTacosComponent;
  let fixture: ComponentFixture<DesignTacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignTacosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesignTacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
