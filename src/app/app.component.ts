import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MoodTunes';

  constructor(private elementRef: ElementRef)
  {

  }

  ngOnInit()
  {
      var ua = navigator.userAgent;
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua))
      {
        //Mobile site
        console.log("Mobile Site");
      }
      else if(/Chrome/i.test(ua))
      {
        //Chrome site
        console.log("Chrome Site");
      }
      else
      {
        //Other browser sites, may not need if chrome site doesnt break other browsers.
        console.log("Desktop Site");
      }
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#191414';
  }
}
