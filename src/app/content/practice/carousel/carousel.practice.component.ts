import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.practice.component.html',
  styleUrls: ['./carousel.practice.component.css']
})
export class CarouselPracticeComponent {
  width = '100%';
  height = '500px';
  myInterval = 5000;
  slides: Array<any> = [];
  imgUrl: Array<any> = [
    `assets/img/slider1.jpg`,
    `assets/img/slider2.jpg`,
    `assets/img/slider3.jpg`,
    `assets/img/slider0.jpg`
    ];

  constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  addSlide() {
    const i = this.slides.length;
    this.slides.push({
      image: this.imgUrl[i]
    });
  }
}
