rxjs --> Reactive JavaScript Extenions --> provides 'observable' operators for workign with collection

zone.js --> Post Render Statck Trace for Angular Objects in Browser

tslib.js --> Bridge between ES 6 and Browser's JavaScript

## polyfills.js

Angular 9

Angular 2 to Angular 7 --> angular-html-template compiler
Angular 8 --> View Engine --> Compiled HTML as integrated Code
Angular 9 --> Ivy compilation
--> Optimized Comilation for Compressing the Angular Build using Ahead-of-Time (AOT) Compilation

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

#============================================================================================

Programming With Angular

1. Creating Components
   1. Selector
   2. Template and Template Url
      1. internal HTML or External Html file
      2. Apply Directives(?)
   3. Express, Property Binding, Event Binding and TwoWay Binding
2. Working with Forms
   1. Template Form
      1. the # base identity for each element
   2. Reactive Form
      1. A FormGroup that create a FormModel for all Editable HTML Elementts in it 
         1. FormModel --> Collection of name/value pair of each editable element
      2. ReactiveFormsModule from @angular/forms
         1. FormGroup --> Has the 'value' property to read the FormModel, and setValue() method to write bthe FormModel
            1. The class that is used to define a collection of FormControl (?) that is mapped with Model class(?)
               1. Model Class --> Class of which property values are set based on data entered in HTML elements in the form
                  1. Establish Tight-Coupling between Form and Model class
               2. FormControl --> Class that is used to link Editable HTML element with the Public proeprty from the Model class 
                  1. The 'formControlName' attribute is used by HTML Editable element to map/bind with the public property of the form class. 
                  2. FormControl--> Has 'value' property to read value of each editable element and 'setValue()' method to write value
         2. Validators
            1. Defining the validation rules for The Mdoel class properties
               1. Static Method for valilidations
                  1. required(AbstractControl) and requiredTrue(AbstractControl)
                     1. AbstractControl: The class that represent HTML element on whihc the validations are applied
                  2. minLength(int) --> The minimum length
                  3. maxLength(int) --> The max length 
                  4. min(int) / max(int)
                  5. pattern(string/RegEx)
                  6. email(RegEx/string) 
                  7. compose([]) / composeAsync([])
                     1. Accepts array of vaidators methods
            2. Validations are applied on HTML editable elements using fromControlName
               1. The validation message must be evaluated using following
                  1. <FormGroup>.controls.<formControlName>.dirty
                     1. The Element is changed
                  2. <FormGroup>.controls.<formControlName>.invalid /!<FormGroup>.controls.<formControlName>.valid
                     1. The value in element is invalid
                  3. Decide which error message is to be shown
                     1. <FormGroup>.controls.<formControlName>.errors.<rule>
                        1. rule --> required/requredTrue/minlength/maxlength/min/max.pattern/email
3. Working With Services
4. Communication Across Components
  
5. Creating Directives
   1. They are Custom Reusable UI Elements like User/Custom Controles
   2. 3 Types
      1. Component Directive
      2. Structural Directive
         1. Add / Remove DOM based on Collections or If Condition
            1. \*ngFor --> Execute for..of loop to generate DOM
            2. \*ngIf --> Execute if condition to show/hide DOM elements
            3. \*ngSwitch--nhSwitchCase
      3. Attribute Directives
         1. Add a custom behavior to HTML elements
            1. ngModel
   3. Custom Directive is a class that bis decorated with @Directive decorator 
      1. Custom Directives must have @Input() properties to accept data from its parent
      2. @Output() decorated events to emit data to its parent
   4. Custom Attibute Directive
      1. This is applied as an 'attribute' of HTML element in template and it is used to change propeties of the HTML element
         1. Use following classes for creation of Custom Attribute Directive 
            1. Renderer2 --> Manage the HTML rendering when the directive is activated
            2. ElementRef --> The HTML Element that will be updated based in directive
            3. @Input() --> applied on aproperties that will accept values to update the directive and hence will update the HTML element
            4. @HostListener --> The class that will be used to register events for directive to acticvate
         2. Inject Renderer2 and ElementRef in Ctor of Directive, these references will be resolved by BrowserModules
         3. Write public data members for accepting data to manipulate in the directive. These public data membres will be decorated witn @Input()
         4. Write method for business logic for the directive
         5. Write methods for registering events to activate the custom directive based on events. These methods will be decorated with @HostListener('<NAME- OF-THE-EVENT>')  
6. Routing
