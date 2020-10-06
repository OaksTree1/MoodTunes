import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { spotify_auth } from './spotify_auth';

export class auth_token
{
    accessToken: string;
    
    constructor(private http: HttpClient){}

    initToken()
    {
        if(!spotify_auth.code)
        {
            console.error("YOU DONE FUCKED UP NOW");
            return;
        }

        this.http.post(
        'https://accounts.spotify.com/api/token',
        {
            client_id: spotify_auth.clientID,
            grant_type: 'authorization_code',
            code: spotify_auth.code,
            redirect_uri: spotify_auth.access_token_redirect_url,
            code_verifier: spotify_auth.code_verifier
        }
        ).subscribe(data => function()
            {
                console.log(data);
                //spotify_auth.accessToken;
            }
            );
    }
}