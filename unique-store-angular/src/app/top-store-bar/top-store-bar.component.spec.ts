import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStoreBarComponent } from './top-store-bar.component';

describe('TopStoreBarComponent', () => {
  let component: TopStoreBarComponent;
  let fixture: ComponentFixture<TopStoreBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopStoreBarComponent]
    });
    fixture = TestBed.createComponent(TopStoreBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
