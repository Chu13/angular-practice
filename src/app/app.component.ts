import { Component } from '@angular/core';
import { ExampleService } from './example.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ExampleService]
})
export class AppComponent {

  constructor(private _exampleService: ExampleService) {

  }

  ngOnInit() {

  }
}
