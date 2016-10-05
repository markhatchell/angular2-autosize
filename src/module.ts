import { NgModule } from '@angular/core';
import { AutosizeDirective } from './autosize.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        AutosizeDirective,
        CommonModule
    ],
    declares: [],
    exports: [
        AutosizeDirective
    ]
})
export class AutoSizeModule {

}