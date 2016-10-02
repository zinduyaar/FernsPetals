import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';


@Component({
    moduleId: module.id,
    selector: 'poster-slider',
    templateUrl: 'poster.slider.html'
})
export class PosterSliderComponent implements AfterViewInit {
    // this is how you get access to the child component
  @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;

  example1SwipeOptions: any;

  constructor() {
    this.example1SwipeOptions = {
      pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    };
  }

  moveNext() {
    this.swiperContainer.swiper.slideNext();
  }

  movePrev() {
    this.swiperContainer.swiper.slidePrev();
  }

  ngAfterViewInit() {
    console.log(this.swiperContainer);
  }

  public images = [
	{ "title": "We are covered", "url": "http://i4.fnp.com/images/ban/l/gifts-online.jpg" },
	{ "title": "Generation Gap", "url": "http://i4.fnp.com/images/ban/l/midnight-delivery-gifts.gif" },
	{ "title": "Potter Me", "url": "http://i4.fnp.com/images/ban/l/birthday-flowers.jpg" },
	{ "title": "Pre-School Kids", "url": "http://i4.fnp.com/images/ban/l/gifts-online.jpg" },
	{ "title": "Young Peter Cech", "url": "http://i4.fnp.com/images/ban/l/midnight-delivery-gifts.gif" }	
];
}