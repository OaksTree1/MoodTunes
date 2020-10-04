import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { pkce } from './spotify/pkce';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MoodsurveyComponent } from './moodsurvey/moodsurvey.component';

const routes: Routes = [
  { path: 'moodsurvey', component: MoodsurveyComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    MoodsurveyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [pkce],
  bootstrap: [AppComponent]
})
export class AppModule { }
