import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ele:ElementRef) { }
  @HostListener('mouseenter', ['$event'])mouseEnter(e){
    console.log(e);
    this.ele.nativeElement.style.backgroundColor = 'pink'
  }
  @HostListener('mouseleave', ['$event'])mouseLeave(e){
    console.log(e)
    this.ele.nativeElement.style.backgroundColor = 'green'
  }
}
