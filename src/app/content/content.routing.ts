import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';

const CONTENT_ROUTE: Routes = [
    {
        path: '',
        component: ContentComponent,
        children: [
            {
                path: 'home',
                loadChildren: 'app/content/home/home.module#HomeModule'
            },
            {
                path: 'carousel',
                loadChildren: 'app/content/practice/carousel/carousel.practice.module#CarouselPracticeModule'
            },
            {
                path: 'modal',
                loadChildren: 'app/content/practice/modal/modal.practice.module#ModalPracticeModule'
            },
            {
                path: 'bootstrapgrid',
                loadChildren: 'app/content/practice/bootstrapgrid/bootstrapgrid.practice.module#BootstrapgridPracticeModule'
            }
        ]
    }
];

export const ContentRouting = RouterModule.forChild(CONTENT_ROUTE);
