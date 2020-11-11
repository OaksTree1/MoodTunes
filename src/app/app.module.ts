import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication-pieces/login/login.component';
import { pkce } from './authentication-pieces/spotify/pkce';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MoodsurveyComponent } from './pages/moodsurvey/moodsurvey.component';
import { HttpClientModule } from '@angular/common/http';
import { UserPortalPageComponent } from './pages/user-portal-page/user-portal-page.component';
import { GetCodeComponent } from './authentication-pieces/get-code/get-code.component';
import { RuntimeAuthCodesService } from './authentication-pieces/spotify/runtime-auth-codes.service';
import { auth_token } from './authentication-pieces/spotify/auth_token';

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
  providers: [pkce, RuntimeAuthCodesService, auth_token],
  bootstrap: [AppComponent]
})
export class AppModule { }
