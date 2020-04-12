import { Directive, Input,ElementRef, Renderer2, HostListener  } from '@angular/core';

// since the directive is attribute directive, it will be used for
// property binding. Set the selector of the dirctive using syntax
// for property binding e.g. selector:'[color]'
@Directive({
  selector: '[setColor]',
})
export class ColorDirective {
   constructor(
     private ele: ElementRef, private renderer: Renderer2
   ){}
    // map the property to the selector of the directive
   @Input('setColor') setColor: string;

   // business logic methods
    private applyColor(color: string): void {
        this.renderer.setStyle(this.ele.nativeElement,
          'backgroundColor',
          color);
    }
   // methods for activating the directive
   @HostListener('mouseenter')
   onMouseEnter(): void {
     this.applyColor(this.setColor);
   }
   @HostListener('mouseleave')
   onMouseLeave(): void {
     this.applyColor(null);
   }
}
