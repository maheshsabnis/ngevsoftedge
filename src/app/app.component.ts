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
  names: Array<string>;
  seleName: string;
  constructor(){
    this.message = 'The Message';
    this.name = '';
    this.names  =new Array<string>();
    this.names.push('James Bond');
    this.names.push('Ethan Hunt');
    this.names.push('Indiana Jones');
    this.names.push('Jason Bourn');
    this.names.push('R.N. Kao');
    this.seleName = '';
  }

  display(event): void {
      this.message = `The New Message ${event.target.value}`;
  }

  selectedName(evt): void {
      this.seleName = evt.target.value;
      console.log(`Selected name ${this.seleName}`);
  }
}
