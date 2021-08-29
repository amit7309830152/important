import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'product-catalog';
  isClickProductList = true;
  isClickProductSave = false;

  isClickProductListHandler() {
    console.log('sadf');

    this.isClickProductList = true;
    this.isClickProductSave = false;
  }

  isClickProductSaveHandler() {
    console.log('qwety');
    this.isClickProductList = false;
    this.isClickProductSave = true;
  }
}
