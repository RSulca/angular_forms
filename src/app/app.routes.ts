import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';

const routes: Routes = [
    { path: 'template', component: TemplateComponent },
    { path: 'data', component: DataComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'template' }
];

export const APP_ROUTING = RouterModule.forRoot(routes);


