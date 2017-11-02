import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';

import { CarouselPracticeComponent } from './carousel.practice.component';
import { CarouselPracticeRouting } from './carousel.practice.routing';

@NgModule({
    declarations: [CarouselPracticeComponent],
    imports: [
        CommonModule,
        CarouselPracticeRouting,
        CarouselModule
    ]
})

export class CarouselPracticeModule { }
