import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
<<<<<<< HEAD
            { path: 'vinculacion', loadChildren: './Vinculacion/vinculacion.module#VinculacionModule' },
=======
            { path: 'investigacion', loadChildren: './investigacion/investigacion.module#InvestigacionModule' },
            { path: 'carrera-software', loadChildren: './carrera-software/carrera-software.module#CarreraSoftwareModule' },
<<<<<<< HEAD
=======
>>>>>>> 8127b1138ccc35f55e27031ec689ff68f5961e1d
>>>>>>> eedd532f612908053bb63eaa17ca4ba6ba5c72ca
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'bolsa-empleo', loadChildren: './bolsa-empleo/bolsa-empleo.module#BolsaEmpleoModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
