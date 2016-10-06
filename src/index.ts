import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AutoSize } from "./AutoSize";

export * from "./AutoSize";

@NgModule({
    imports: [CommonModule],
    declarations: [AutoSize],
    exports: [AutoSize],
    entryComponents: [AutoSize]
})
export class AutoSizeModule {
}