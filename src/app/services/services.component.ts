import { Component, OnInit } from '@angular/core';
import { ExampleService } from './../example.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {

  title: String;

  constructor(private _exampleService: ExampleService) { }

  ngOnInit() {
    this.title = this._exampleService.someMethod();
  }

}
