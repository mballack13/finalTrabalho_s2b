import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HospitalComponent } from './hospitals/hospital/hospital.component';

const routes: Routes = [

    { path: 'home', component: MainContentComponent },
    { path: 'hospitais', component: HospitalComponent},
    { path: '**', component: NotFoundComponent }

];

@NgModule({

    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]

})

export class AppRoutingModule {}
