import { Component, OnInit } from '@angular/core';
import {MdIconRegistry} from '@angular/material';


@Component({
    moduleId: module.id,
    viewProviders: [MdIconRegistry],
    selector: 'header',
    templateUrl: 'header.component.html',
    styleUrls:['header.component.css']
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}