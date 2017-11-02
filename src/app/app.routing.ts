import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'content', loadChildren: 'app/content/content.module#ContentModule' }
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES);
