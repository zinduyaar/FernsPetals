import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {KSSwiperModule} from 'angular2-swiper';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routing, appRoutingProviders } from './app.routing';
import { CharacterService } from './shared/character.service';

import { HeaderComponent } from './layout/header/header.component';

// Shared components
import { PosterSliderComponent } from './shared/poster-slider/poster-slider.component';



import {MaterialModule} from '@angular/material';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        MaterialModule.forRoot(),
        KSSwiperModule
    ],
    providers: [
        appRoutingProviders,
        CharacterService
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        HeaderComponent,
        PosterSliderComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }