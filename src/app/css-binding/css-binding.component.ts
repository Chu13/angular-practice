import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-binding',
  templateUrl: './css-binding.component.html',
  styleUrls: ['./css-binding.component.css']
})
export class CssBindingComponent implements OnInit {

  someProperty = true;
  anotherProperty = true;

  constructor() { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      extraclass: this.someProperty,
      anotherclass: this.anotherProperty
    }
    return classes;
  }

  setStyles() {
    let styles = {
      'font.style' : this.someProperty ? 'italic' : 'normal',
      'font-weight' : this.anotherProperty ? 'bold' : 'normal'
    };
    return styles;
  }

}
