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
import { PageComponent } from './component/page/page.component';
import { ContactComponent } from './component/contact/contact.component';
import { SkillsComponent } from './component/skills/skills.component';
import { AppRoutingModule } from './app-routing.module';



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
    ContactComponent,
    SkillsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
