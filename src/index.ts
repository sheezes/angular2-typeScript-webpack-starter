import 'reflect-metadata';
import { Component, View, bootstrap } from 'angular2/angular2';

@Component({ selector: 'App' })
@View({
  template: '<h1>Welcome to {{ what }} </h1>'
})

class App {

  what:string;

  constructor() {
    this.what = "your first angular2 project!";
  }
}

bootstrap(App);
