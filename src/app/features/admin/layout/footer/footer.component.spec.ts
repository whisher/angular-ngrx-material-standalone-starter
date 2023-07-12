import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AdminLayoutFooterComponent } from './footer.component';

describe(AdminLayoutFooterComponent.name, () => {
  let fixture: ComponentFixture<AdminLayoutFooterComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutFooterComponent);
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('link href should contain owner', () => {
    const link = fixture.debugElement.queryAll(By.css('a'));
    const href = link[0].nativeElement.href;
    expect(href).toBe('https://twitter.com/ilwebdifabio');
  });
});
