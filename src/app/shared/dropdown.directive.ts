import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, "open");
  }

  @HostBinding('class.open') isOpen = true;

  @HostListener('click') toggleOpen() {
    console.log("testing directive fire");
    let pBody = this.el.nativeElement.querySelector('.panel-body');
    if (this.isOpen) {
      this.renderer.removeClass(pBody, "collapse");
      this.isOpen = false;
    } else {
      this.renderer.addClass(pBody, "collapse");
      this.isOpen = true;
    }
  }


  @HostListener('document:click', ['$event']) toggleClose(event: Event) {
    console.log("testing directive fire");
    let pBody = this.el.nativeElement.querySelector('.panel-body');
    if (!this.isOpen) {
      this.renderer.addClass(pBody, "collapse");
      this.isOpen = true;
    }
  }



}
