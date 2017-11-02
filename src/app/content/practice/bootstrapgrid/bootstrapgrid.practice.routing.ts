import { Routes, RouterModule } from '@angular/router';
import { BootstrapGridPracticeComponent } from './bootstrapgrid.practice.component';

const BOOTSTRAPGRID_ROUTE: Routes = [
    {
        path: '',
        component: BootstrapGridPracticeComponent
    }
];

export const BootstrapGridRouting = RouterModule.forChild(BOOTSTRAPGRID_ROUTE);
