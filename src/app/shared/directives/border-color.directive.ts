import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective implements OnInit {
  private readonly red: string = 'red';
  private readonly blue: string = 'blue';
  private readonly green: string = 'green';

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}
}
