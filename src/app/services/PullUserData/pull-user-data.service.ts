import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PullUserDataService {

  private accessToken;

  constructor() { }

  setToken(token: string)
  {
    this.accessToken = token;
  }

  getUsername()
  {
    return this.sendHttpRequest(`https://api.spotify.com/v1/me`);
  }

  getListeningHistory()
  {
    return this.sendHttpRequest(`https://api.spotify.com/v1/me`);
  }

  getCurrentlyListening()
  {
    return this.sendHttpRequest(`https://api.spotify.com/v1/me/player/currently-playing`);
  }

  getTopPlayed(type: string)
  {
    return this.sendHttpRequest(`https://api.spotify.com/v1/me/top/${type}`);
  }

  getLibrary()
  {
    return this.sendHttpRequest(`https://api.spotify.com/v1/me`);
  }

  sendHttpRequest(url: string)
  {
    fetch(url, {
      headers: 
      {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.accessToken}`,
      }
    })
    .then(res => res.json())
    .then(data => {return data});
  }
}
