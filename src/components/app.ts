import { Component } from 'angular2/core';

@Component({
  selector: 'App',
  template: `
    <h1>{{ title }}</h1>
   `
})

export class App {

  public title:string;

  constructor() {
    this.title = "Angular2 Application "
  }
}
