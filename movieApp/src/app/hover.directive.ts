import { Directive, HostBinding, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{
  constructor(private element:ElementRef){}
  @HostListener('mouseenter', ['$event']) mouseenter(eventData:Event){
    this.element.nativeElement.style.backgroundColor = 'purple';
  }
  @HostListener('mouseleave', ['$event'])mouseleave(eventData:Event){   
    this.element.nativeElement.style.backgroundColor = 'pink'
  }
 ngOnInit(){
   console.log('hello')
   this.element.nativeElement.style.backgroundColor = 'green'  
 }
}
