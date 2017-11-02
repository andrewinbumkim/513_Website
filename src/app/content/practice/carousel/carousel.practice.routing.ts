import { Routes, RouterModule } from '@angular/router';
import { CarouselPracticeComponent } from './carousel.practice.component';

const CAROUSEL_ROUTE: Routes = [
    {
        path: '',
        component: CarouselPracticeComponent
    }
];

export const CarouselPracticeRouting = RouterModule.forChild(CAROUSEL_ROUTE);
