import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ApiInfoComponent } from './api-info.component';

describe('ApiInfoComponent', () => {
  let component: ApiInfoComponent;
  let fixture: ComponentFixture<ApiInfoComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ApiInfoComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
