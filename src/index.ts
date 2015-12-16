import 'expose?Zone!zone.js';
import 'reflect-metadata';
import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

@Component({
  selector: 'App',
  template: `
    <h1>{{ title }}</h1>
  `
})

class App {

  public title:string;

  constructor() {
    this.title = "Angular2 Application "
  }

}

bootstrap(App);