import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GithubIconComponent } from './github-icon.component';

describe('GithubIconComponent', () => {
  let component: GithubIconComponent;
  let fixture: ComponentFixture<GithubIconComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [GithubIconComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
