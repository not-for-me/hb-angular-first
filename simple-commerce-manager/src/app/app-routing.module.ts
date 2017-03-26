import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainDashboardComponent } from './scm-main/main-dashboard/main-dashboard.component';
import { PageNotFoundComponent } from './scm-main/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'total-summary', component: MainDashboardComponent },
    { path: '', redirectTo: 'total-summary', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
