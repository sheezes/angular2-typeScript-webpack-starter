import 'zone.js';
import 'reflect-metadata';
import { Component, bootstrap } from 'angular2/angular2';

@Component({
  selector: 'App',
  template: '<h1>{{ title }}</h1>'
})

class App {

  private title:string;

  constructor() {
    this.title = "Angular Components"
  }
}

bootstrap(App);