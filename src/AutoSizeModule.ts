import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoSize } from "./AutoSize";

@NgModule({
  imports: [CommonModule],
  declarations: [AutoSize],
	exports: [AutoSize]
})
export class AutoSizeModule {}