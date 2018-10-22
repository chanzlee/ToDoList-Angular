//Root Module - "company headquarters" of the app.
//Loads other parts of app and any Angular dependencies.

import { BrowserModule } from '@angular/platform-browser';
//BrowserModule imports code to run app in the browser.
//Includes built-in directives - allow adding conditionals and loops to components.
import { NgModule } from '@angular/core';
//NgModule imports general Module code from Angular framework
import { AppComponent } from './app.component';
//AppComponent is this app's root component. Angular CLI auto-creates this.


//Informs Angular this is a module. Includes declarations, imports, providers, and bootstrap
@NgModule({
//all the components that will be part of this module.
//new components, generated using CLI will automatically be added here.
  declarations: [
    AppComponent
  ],
// import statements - imports other pieces of our application to include in this module.
// above imports - import functionality from the Angular core.
  imports: [
    BrowserModule
  ],
  providers: [],
// "bootstrapping" - launching app with min required resources.
// ex: AppComponent is used right away on launch of this app.
// bootstrap here has nothng to do with front-end framework bootstrap.
  bootstrap: [AppComponent]
})
export class AppModule { }


//Code blocks without notes

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { AppComponent } from './app.component';

// @NgModule({
//
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
