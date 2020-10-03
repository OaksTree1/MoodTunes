import { Component, OnInit } from '@angular/core';
import { pkce } from './../spotify/pkce';
import { spotify_auth } from './../spotify/spotify_auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private SpotifyURL: string;

  constructor(
    private CodeGenerator: pkce,
  ) { }

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

    console.log(this.SpotifyURL);
  }

  goToSpotify()
  {
    window.open(this.SpotifyURL, "_self");
  }


}
