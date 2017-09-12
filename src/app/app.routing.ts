import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//Componentes

import {HomeComponent} from './home/home.component';
import {ContactoComponent} from './contacto/contacto.component';
import {AlumnoComponent} from './alumnos/alumno.component';

const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'alumno',component:AlumnoComponent}, 
    {path:'pagina-principal',component:HomeComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'contacto/:page',component:ContactoComponent},
    {path:'**',component:HomeComponent}

];

export const appRoutingProviders:Array<any>=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);
