import { Routes } from '@angular/router';
import { ClientListComponent } from './component/client-list/client-list.component';
import { ClientFormComponent } from './component/client-form/client-form.component';
import { EditClientComponent } from './component/edit-client/edit-client.component';
import { ViewClientComponent } from './component/view-client/view-client.component';

export const routes: Routes = [

    { path: '', component: ClientListComponent },
    { path: 'add', component: ClientFormComponent },
    { path: 'edit/:id', component: EditClientComponent },
    { path: 'view/:id', component: ViewClientComponent }
];
