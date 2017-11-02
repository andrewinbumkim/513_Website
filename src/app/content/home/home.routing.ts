import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

export const HOME_ROUTES: Route[] = [
    {
        path: '',
        component: HomeComponent
    }
];

export const HomeRouting = RouterModule.forChild(HOME_ROUTES);
