import { Component } from '@angular/core';

// selector: string, that represents the custom HTML tag
// using which the component will be rendered
// templateUrl: the path of HTML file that will be compiled
// with this component. All public properties (property binding as well
// as for Expression) and methods (event binding) of this component
// will be bind with the HTML elements
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'James Bond is delyaed';
  message: string;
  name: string;
  constructor(){
    this.message = 'The Message';

    this.name = '';
  }

  display(event): void {
      this.message = `The New Message ${event.target.value}`;
  }
}
