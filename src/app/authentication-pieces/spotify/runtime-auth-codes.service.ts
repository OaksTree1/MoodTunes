import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RuntimeAuthCodesService {

  private codeVerifier: string;
  private preTokenCode: string;
  private accessToken: string;

  constructor() { }

  setCodeVerifier(code: string)
  {
    this.codeVerifier = code;
    document.cookie = `verifier=${code}`;
  } 

  getCodeVerifier()
  {
    return this.codeVerifier;
  }

  setPreTokenCode(code: string)
  {
    this.preTokenCode = code;
  } 

  getPreTokenCode()
  {
    return this.preTokenCode;
  }

  setAccessToken(token: string)
  {
    this.accessToken = token;
  } 

  getAccessToken()
  {
    return this.accessToken;
  }
}
