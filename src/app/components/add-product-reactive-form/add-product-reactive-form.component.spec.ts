import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductReactiveFormComponent } from './add-product-reactive-form.component';

describe('AddProductReactiveFormComponent', () => {
  let component: AddProductReactiveFormComponent;
  let fixture: ComponentFixture<AddProductReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProductReactiveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddProductReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
