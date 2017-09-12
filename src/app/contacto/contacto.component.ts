import {Component} from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';

@Component({
    selector:'contacto-tag',
    templateUrl:'./contacto.component.html'
})
export class ContactoComponent{
    titulo:string="Titulo de Contacto Component"
    public parametros:string;
    constructor(
        private _route:ActivatedRoute,
        private _router:Router
    ){}
    ngOnInit(){
        this._route.params.forEach((params:Params)=>{
            this.parametros=params['page'];
        });
    }
    redirigir(){
        this._router.navigate(['./contacto','GoWiSys']);
    }
    redirigir2(){
        this._router.navigate(['./pagina-principal','GoWiSYS']);
    }
}