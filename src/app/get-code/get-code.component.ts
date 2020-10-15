import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RuntimeAuthCodesService } from '../spotify/runtime-auth-codes.service';
import { auth_token } from '../spotify/auth_token';
import { spotify_auth } from '../spotify/spotify_auth';

@Component({
  selector: 'app-get-code',
  templateUrl: './get-code.component.html',
  styleUrls: ['./get-code.component.css']
})
export class GetCodeComponent implements OnInit {
  
  constructor(
    private auth: auth_token,
    private runtimeCodes: RuntimeAuthCodesService,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      runtimeCodes.setCodeVerifier(this.getCookie('verifier'));
      runtimeCodes.setPreTokenCode(params['code']);
      });
  }

  ngOnInit(): void {
    this.auth.initToken(this.runtimeCodes.getPreTokenCode(), this.runtimeCodes.getCodeVerifier());
  }

  private getCookie(name: string) 
  {
    let ca: Array<string> = document.cookie.split(';');
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < ca.length; i += 1) 
    {
        c = ca[i].replace(/^\s+/g, '');
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return '';
}

}
