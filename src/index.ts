import 'reflect-metadata';
import { Component, View, bootstrap } from 'angular2/angular2';

@Component({ selector: 'App' })
@View({
  template: '<h1>{{ what }}</h1>'
})

class App {

  what:string;

  constructor() {
    this.what = "Angular 2 + TypeScript + Webpcak Minimal Starter!";
  }
}

bootstrap(App);
