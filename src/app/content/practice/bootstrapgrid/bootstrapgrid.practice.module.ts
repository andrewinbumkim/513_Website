import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapGridPracticeComponent } from './bootstrapgrid.practice.component';
import { BootstrapGridRouting } from './bootstrapgrid.practice.routing';

@NgModule({
    declarations: [BootstrapGridPracticeComponent],
    imports: [
        CommonModule,
        BootstrapGridRouting
    ]
})

export class BootstrapgridPracticeModule { }
