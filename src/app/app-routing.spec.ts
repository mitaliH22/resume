import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { routes } from './app-routing.module';
import { HomeComponent } from './component/home/home.component';
import { ResumeComponent } from './component/resume/resume.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { ContactComponent } from './component/contact/contact.component';
import { AppComponent } from './app.component';

describe('Router: App', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        HomeComponent,
        ResumeComponent,
        ProjectsComponent,
        ContactComponent,
      ],
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/home');
    });
  }));

  it('navigate to "home" redirects you to /home', fakeAsync(() => {
    router.navigate(['/home']).then(() => {
      expect(location.path()).toBe('/home');
    });
  }));

  it('navigate to "resume" redirects you to /resume', fakeAsync(() => {
    router.navigate(['/resume']).then(() => {
      expect(location.path()).toBe('/resume');
    });
  }));

  it('navigate to "projects" redirects you to /projects', fakeAsync(() => {
    router.navigate(['/projects']).then(() => {
      expect(location.path()).toBe('/projects');
    });
  }));

  it('navigate to "contact" redirects you to /contact', fakeAsync(() => {
    router.navigate(['/contact']).then(() => {
      expect(location.path()).toBe('/contact');
    });
  }));
});
