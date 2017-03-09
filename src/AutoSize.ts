import { Directive, ElementRef, Input, HostListener } from "@angular/core";
@Directive({
    selector: "textarea[autosize]"
})
export class AutoSize {
    @HostListener("input", ["$event.target"])
    onInput(textArea: HTMLTextAreaElement): void {
        this.adjust();
        this.element.nativeElement.style.height = "auto";
    }

    constructor(public element: ElementRef) {
    }

    ngAfterContentChecked(): void {
        this.adjust();
    }

    adjust(): void {
        this.element.nativeElement.style.overflow = "hidden";
        this.element.nativeElement.style.height = this.element.nativeElement.scrollHeight + "px";
    }
}