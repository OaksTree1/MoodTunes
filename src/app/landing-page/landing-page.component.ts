import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './../login/login.component';
import { colorsList } from './colors';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.setBackgroundColors();
  }

  setBackgroundColors()
  {
    //Get random color scheme
    var randColors = new RandomColorScheme();

    var elements = document.getElementsByClassName("waveWrapperInner");
    Array.prototype.forEach.call(elements , function(element)
    {
        element.setAttribute("style", `background-image : linear-gradient(to top, #${randColors.color1} 20%,#${randColors.color2} 80%)`)
    });
  }
}

class RandomColorScheme
{
  color1: string;
  color2: string;

  constructor()
  {
    var colorIndex = Math.round(Math.random() * (colorsList.length - 1));
    this.color1 = colorsList[colorIndex][1];
    this.color2 = colorsList[colorIndex][0];
  }
}

