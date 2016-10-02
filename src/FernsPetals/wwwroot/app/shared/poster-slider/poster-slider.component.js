"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var angular2_swiper_1 = require('angular2-swiper');
var PosterSliderComponent = (function () {
    function PosterSliderComponent() {
        this.images = [
            { "title": "We are covered", "url": "http://i4.fnp.com/images/ban/l/gifts-online.jpg" },
            { "title": "Generation Gap", "url": "http://i4.fnp.com/images/ban/l/midnight-delivery-gifts.gif" },
            { "title": "Potter Me", "url": "http://i4.fnp.com/images/ban/l/birthday-flowers.jpg" },
            { "title": "Pre-School Kids", "url": "http://i4.fnp.com/images/ban/l/gifts-online.jpg" },
            { "title": "Young Peter Cech", "url": "http://i4.fnp.com/images/ban/l/midnight-delivery-gifts.gif" }
        ];
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
    PosterSliderComponent.prototype.moveNext = function () {
        this.swiperContainer.swiper.slideNext();
    };
    PosterSliderComponent.prototype.movePrev = function () {
        this.swiperContainer.swiper.slidePrev();
    };
    PosterSliderComponent.prototype.ngAfterViewInit = function () {
        console.log(this.swiperContainer);
    };
    __decorate([
        core_1.ViewChild(angular2_swiper_1.KSSwiperContainer), 
        __metadata('design:type', angular2_swiper_1.KSSwiperContainer)
    ], PosterSliderComponent.prototype, "swiperContainer", void 0);
    PosterSliderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'poster-slider',
            templateUrl: 'poster.slider.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PosterSliderComponent);
    return PosterSliderComponent;
}());
exports.PosterSliderComponent = PosterSliderComponent;
//# sourceMappingURL=poster-slider.component.js.map