import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuiComponent } from './qui/qui.component';

const routes: Routes = [
{ path: 'qareebUI', component: QuiComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
