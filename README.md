rxjs --> Reactive JavaScript Extenions --> provides 'observable' operators for workign with collection

zone.js --> Post Render Statck Trace for Angular Objects in Browser

tslib.js --> Bridge between ES 6 and Browser's JavaScript

polyfills.js
---------------------------------------------------------------------
Angular 9

Angular 2 to Angular 7 --> angular-html-template compiler
Angular 8 --> View Engine --> Compiled HTML as integrated Code
Angular 9 --> Ivy compilation
	--> Optimized Comilation for Compressing the Angular Build using  Ahead-of-Time (AOT) Compilation 

angular.json file
-- Project Configuration for Build/Test/Execution
-- AOT now default to true in Angular 9 to support Ivy
-- styles references, to load external and internal styles in Build
-- scripts references, to load external scripts in angular app
-- configure angular custom libs in current project e.g. like dll
package.json
-- standard Angular references and dependency references e.g. rxjs, tslib and zone.js
-- angular/cli, angular-devkit, jasmine, protractor, karma
--scripts, to run/build/test the app.
main.ts 	
-- Entry point to angular app
	-- bootstrap the Angular Application by loading the Entry-Module 
-- index.html
	-- contains selector aka custom HTML tag to bootstrap / load the first component (means render it) in browser

-- app.module.ts
	-- The File that defines AppModule, this is a bootstrap module and this module loads standard Angular Module, declare components, register services in DI and Boottsrap the one or more components from declarations

========================================================================

Angular Decorators
1. @NgModule --> Apply on class to make it as Angular Module
2. @Component --> Apply on class to make it as Angular Component
3. @Injectable --> Apply on class to make it as Angular Service
4. @Directive --> Apply on class to make it as Angular Directive
5. @Pipe --> Apply on class to make it as Angular Pipe
6. @Input --> Apply on public property of Component to Accept Input data
7. @Output --> Applied on EventEmitter object to emit an event from child component to parent component
8. @ViewChild --> Applied on the Component's instance in its parent component to define it as child component
9. @HostListener --> Applied on Method to specify for which event the method will be called
   







Angular Two Way Binding
Combination of Property Binding and Event Binding
Two-Way Binding = Property Binding [] + Event Binding()

[(ngModel)]="<PUBLIC-PROPERTY-FROM-COMPONENT-CLASS>"

ngModel --> The angular's standard Directive (custom HTML Attribute) for Two-Way binding

We need to import FormsModule from @angular/forms in @NgModule's import array for AppMpdule

1. ngModel will listen the default event of HTML element (e.g. KeyUp in input text) 
2. It will read the current value of element and raise 'ngModelChanged' event on element
3. It will send the updated value of the property to Component
4. Component will receive update can call its ngOnChange event
5. Component will update the property and all other properties depending on this propery
6. Component will send updated values of properties to UI and update the UI
