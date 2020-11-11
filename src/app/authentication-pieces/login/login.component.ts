import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pkce } from '../spotify/pkce';
import { spotify_auth } from '../spotify/spotify_auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private SpotifyURL: string;

  public accept_code: string;

  constructor(
    private CodeGenerator: pkce,
    public router: Router,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.queryParams.subscribe(params => {
            this.accept_code = params['code'];
        });
    }

  ngOnInit(): void 
  {
    this.CodeGenerator.challenge.then(data => this.generateSpotifyURL(data));
  }

  generateSpotifyURL(codeChallenge: string)
  {
    this.SpotifyURL = `https://accounts.spotify.com/en/authorize?response_type=code&client_id=${spotify_auth.clientID}&redirect_uri=${spotify_auth.testing_redirect_uri}`;

    if(spotify_auth.scopes.length != 0)
    {
      this.SpotifyURL += `&scope=`;
    }
    
    for(var i = 0; i < spotify_auth.scopes.length; i++)
    {
        this.SpotifyURL += spotify_auth.scopes[i] + `%20`;
    }

    this.SpotifyURL += `&code_challenge=${codeChallenge}&code_challenge_method=S256`;
  }

  goToSpotify()
  {
    window.open(this.SpotifyURL, "_self");
  }

  goToSurvey()
  {
      this.router.navigate(['/moodsurvey']);
  }

}
