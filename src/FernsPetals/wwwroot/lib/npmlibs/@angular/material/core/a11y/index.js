var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { FocusTrap } from './focus-trap';
import { MdLiveAnnouncer } from './live-announcer';
import { InteractivityChecker } from './interactivity-checker';
export { FocusTrap } from './focus-trap';
export { MdLiveAnnouncer } from './live-announcer';
export { InteractivityChecker } from './interactivity-checker';
export var A11yModule = (function () {
    function A11yModule() {
    }
    A11yModule.forRoot = function () {
        return {
            ngModule: A11yModule,
            providers: [MdLiveAnnouncer, InteractivityChecker],
        };
    };
    A11yModule = __decorate([
        NgModule({
            declarations: [FocusTrap],
            exports: [FocusTrap],
        }), 
        __metadata('design:paramtypes', [])
    ], A11yModule);
    return A11yModule;
}());

//# sourceMappingURL=index.js.map
