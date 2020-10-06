import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RuntimeAuthCodesService } from '../spotify/runtime-auth-codes.service';
import { spotify_auth } from '../spotify/spotify_auth';

@Component({
  selector: 'app-get-code',
  templateUrl: './get-code.component.html',
  styleUrls: ['./get-code.component.css']
})
export class GetCodeComponent implements OnInit {
  
  constructor(
    private runtimeCodes: RuntimeAuthCodesService,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      runtimeCodes.setPreTokenCode(params['code']);
      });
  }

  ngOnInit(): void {
    console.log(this.runtimeCodes);
  }

}
