import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './smart/home/home.component';
import { HeaderComponent } from './dumb/header/header.component';
import { HeroComponent } from './dumb/hero/hero.component';
import { SkillsComponent } from './dumb/skills/skills.component';
import { ProjectsComponent } from './dumb/projects/projects.component';
import { ResumeComponent } from './dumb/resume/resume.component';
import { EmailComponent } from './dumb/email/email.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        HeroComponent,
        SkillsComponent,
        ProjectsComponent,
        ResumeComponent,
        EmailComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        MatButtonModule,
    ],
    providers: [provideAnimationsAsync()],
    bootstrap: [AppComponent],
})
export class AppModule {}
