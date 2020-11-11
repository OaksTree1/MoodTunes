import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { spotify_auth } from './spotify_auth';


var headers_object = {'Content-Type':'application/x-www-form-urlencoded'};

  const httpOptions = {
    headers: headers_object,
    responseType: 'text' as const,
  };

  @Injectable({
    providedIn: 'root',
  })
export class auth_token
{
    accessToken: string;
    
    constructor(private http: HttpClient){}


    //TO DO - set this fucntion to return an observable so that the next page can be loaded when this finishes.
    //Also - find a way to save the tokens returned from this http.post
    initToken(code: string, verifier: string)
    {
        if(!code)
        {
            console.error("YOU DONE FUCKED UP NOW");
            return;
        }

        var body = `client_id=${spotify_auth.clientID}&grant_type=authorization_code&code=${code}&redirect_uri=${spotify_auth.testing_redirect_uri}&code_verifier=${verifier}`;

        this.http.post(
        'https://accounts.spotify.com/api/token', body, httpOptions
        ).subscribe(data => function()
            {
                console.log(data);
                //spotify_auth.accessToken;
            }
            );
    }
}