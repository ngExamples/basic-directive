import { Input, Directive, ElementRef, HostListener } from "@angular/core"

@Directive({
    selector: "[highlight]"
})
export class HighlightDirective {
    @Input('highlight') selectedColor: string|null = null;

    constructor(private el: ElementRef) { }

    @HostListener('mouseenter')
    UpdateColorOnEnter() {
        this.setColor(this.selectedColor);
    }

    @HostListener('mouseleave')
    UpdateColorOnLeave() {
        this.setColor(null);
    }

    private setColor(color: string|null) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
