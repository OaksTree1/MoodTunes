import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { pkce } from './spotify/pkce';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MoodsurveyComponent } from './moodsurvey/moodsurvey.component';
import { HttpClientModule } from '@angular/common/http';
import { UserPortalPageComponent } from './user-portal-page/user-portal-page.component';
import { GetCodeComponent } from './get-code/get-code.component';
import { RuntimeAuthCodesService } from './spotify/runtime-auth-codes.service';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'moodsurvey', component: MoodsurveyComponent },
  { path: 'myAccount', component: UserPortalPageComponent },
  { path: 'getCode', component: GetCodeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    MoodsurveyComponent,
    UserPortalPageComponent,
    GetCodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [pkce, RuntimeAuthCodesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
