import { Directive, ElementRef, Input, HostListener } from "@angular/core";
@Directive({
    selector: "textarea[autosize]"
})
export class AutoSize {
    @Input() disableLinebreak: boolean = false;

    @HostListener("keydown.enter", ["$event.target"])
    onKeydownEnter(): boolean {
        return !this.disableLinebreak;
    }

    @HostListener("input", ["$event.target"])
    onInput(textArea: HTMLTextAreaElement): void {
        this.replaceLinebreaks();
        this.adjust();
    }

    constructor(public element: ElementRef) {
    }

    ngAfterContentChecked(): void {
        this.adjust();
    }

    replaceLinebreaks() {
        if (this.disableLinebreak) {
            this.element.nativeElement.value = this.replaceAll(this.element.nativeElement.value, "\n\r", "");
        }
    }

    adjust(): void {
        this.element.nativeElement.style.overflow = "hidden";
        this.element.nativeElement.style.height = "auto";
        this.element.nativeElement.style.height = this.element.nativeElement.scrollHeight + "px";
    }

    replaceAll(str: string, find: string, replace: string): string {
        return str.replace(new RegExp(find, "g"), replace);
    }
}