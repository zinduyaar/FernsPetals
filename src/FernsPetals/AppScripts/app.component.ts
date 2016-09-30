import { Component } from '@angular/core';
import {MdIconRegistry} from '@angular/material';

@Component({
    moduleId: module.id,
    viewProviders: [MdIconRegistry],
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent { }