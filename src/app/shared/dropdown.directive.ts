import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';
import { PhoneBookService } from '../phone-book/phone-book.service';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private el: ElementRef, private renderer: Renderer2,
    private phoneBookService: PhoneBookService) {
    this.renderer.addClass(this.el.nativeElement, "open");
  }

    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen2(event: Event) {

      let pHead = this.el.nativeElement.querySelector('.panel-heading')
      let pBody = this.el.nativeElement.querySelector('.panel-body');
      this.isOpen = this.el.nativeElement.contains(event.target) ? !this.isOpen : false;
      if (this.isOpen) {
        this.renderer.removeClass(pBody, "collapse");
        this.renderer.addClass(pHead, "select-color");
      } else {
        this.renderer.addClass(pBody, "collapse");
        this.renderer.removeClass(pHead, "select-color");
      }

      
    }





}
