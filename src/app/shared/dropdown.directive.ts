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
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {

      console.log(String(event.target));
      let pHead = this.el.nativeElement.querySelector('.panel-heading')
      let pBody = this.el.nativeElement.querySelector('.panel-body');
      this.isOpen = this.el.nativeElement.contains(event.target) ? !this.isOpen : false;
      if (this.isOpen) {
        this.phoneBookService.editIndex = pBody.id;
        this.phoneBookService.phBookEdited.next(this.phoneBookService.editIndex);
        this.renderer.removeClass(pBody, "collapse");
        this.renderer.addClass(pHead, "select-color");
      } else {
        if (pBody.id == this.phoneBookService.editIndex) {  
          // this.phoneBookService.phBookEdited.next(-1);
        }
        this.renderer.addClass(pBody, "collapse");
        this.renderer.removeClass(pHead, "select-color");
      }

      
    }





}
