
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  TcompComponent } from './tcomp/tcomp.component';

const routes: Routes = [
    { path: '/hany',component:TcompComponent}
   ];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }