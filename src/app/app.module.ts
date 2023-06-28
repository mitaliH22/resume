import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { SocialsComponent } from './component/socials/socials.component';
import { FooterComponent } from './component/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './component/resume/resume.component';
import { CardComponent } from './component/card/card.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { ContactComponent } from './component/contact/contact.component';
import { PageComponent } from './component/page/page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SocialsComponent,
    FooterComponent,
    ResumeComponent,
    CardComponent,
    ProjectsComponent,
    PageComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
