import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBoxComponent } from './login-box.component';

describe('LoginBoxComponent', () => {
  let component: LoginBoxComponent;
  let fixture: ComponentFixture<LoginBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
