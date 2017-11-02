import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ng2-bootstrap/modal';

import { ModalPracticeComponent } from './modal.practice.component';
import { ModalPracticeRouting } from './modal.practice.routing';

@NgModule({
    declarations: [ModalPracticeComponent],
    imports: [
        CommonModule,
        ModalPracticeRouting,
        ModalModule.forRoot()
    ]
})

export class ModalPracticeModule { }
