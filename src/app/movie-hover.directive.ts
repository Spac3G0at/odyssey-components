import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
	selector: '[appMovieHover]'
})
export class MovieHoverDirective implements OnInit {

	constructor(private elRef: ElementRef, private renderer: Renderer2) { }

	ngOnInit() {}

	@HostListener('mouseenter') mouseEnterEvent (eventData: Event) {
		this.renderer.addClass(this.elRef.nativeElement, 'text-danger');
	}

	@HostListener('mouseleave') mouseLeaveEvent (eventData: Event) {
		this.renderer.removeClass(this.elRef.nativeElement, 'text-danger');
	}

}
