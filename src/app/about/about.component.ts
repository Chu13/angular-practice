import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  imageUrl = "https://angular.io/assets/images/logos/angular/angular.png";

  myMethod() {
    console.log("Clicked");
  }

  myMethod2() {
    console.log("You hovered");
  }

  ngOnInit() {
  }

}
