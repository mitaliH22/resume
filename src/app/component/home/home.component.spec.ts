import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SocialsComponent } from '../socials/socials.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, SocialsComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

        it('should create container for Home page', () => {
          fixture.detectChanges();
          const compiled = fixture.nativeElement as HTMLElement;
          expect(compiled.querySelector('section')).toBeTruthy();
        });
});
