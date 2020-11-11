import { RuntimeAuthCodesService } from './runtime-auth-codes.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class pkce
{
    verifier: any;
    challenge: any;

    constructor(
        private runtimeCodes: RuntimeAuthCodesService
    )
    {
        runtimeCodes.setCodeVerifier(this.generateRandomString());
        this.challenge = this.challenge_from_verifier(runtimeCodes.getCodeVerifier());
    }

    //Create the Verifier
    dec2hex(dec: any)
    {
        return("0" + dec.toString(16)).substr(-2);
    }

    generateRandomString()
    {
        var array = new Uint32Array(56 / 2);
        window.crypto.getRandomValues(array);
        return Array.from(array, this.dec2hex).join("");
    }

    //Create the Challenge
    sha256(plain) 
    { // returns promise ArrayBuffer
        const encoder = new TextEncoder();
        const data = encoder.encode(plain);
        return window.crypto.subtle.digest('SHA-256', data);
    }
      
    base64urlencode(a) 
    {
        var str = "";
        var bytes = new Uint8Array(a);
        var len = bytes.byteLength;

        for (var i = 0; i < len; i++) 
        {
            str += String.fromCharCode(bytes[i]);
        }

        return btoa(str)
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=+$/, "");
    }
      
    async challenge_from_verifier(v) 
    {
        const hashed = await this.sha256(v);
        const base64encoded = this.base64urlencode(hashed);
        return base64encoded;
    }
      
    
}

