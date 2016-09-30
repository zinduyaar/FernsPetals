import { Component } from '@angular/core';


@Component({
    moduleId: module.id,
    template: `
        <md-toolbar color="primary">
  Angular Material 2 App
</md-toolbar>

<div style="padding: 7px">
  <button md-button>Basic Button</button>
  <button md-raised-button>Raised Button</button>

  <md-slide-toggle>Slide Toggle</md-slide-toggle>
</div>
    `
})
export class AboutComponent { }