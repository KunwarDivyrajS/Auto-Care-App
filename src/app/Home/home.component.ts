import { Component } from '@angular/core';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public loaderService: LoaderService) {
    console.log("Test Home");
  }
  ngOnInit() {
    this.loaderService.hide();
  }
}
