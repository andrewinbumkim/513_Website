import { Routes, RouterModule } from '@angular/router';
import { ModalPracticeComponent } from './modal.practice.component';

const MODAL_ROUTE: Routes = [
    {
        path: '',
        component: ModalPracticeComponent
    }
];

export const ModalPracticeRouting = RouterModule.forChild(MODAL_ROUTE);
