import { Component } from '@angular/core';
import {Alumno} from './alumnos.model';

@Component({
    selector:'alumno-tag',
    templateUrl:"./alumno.component.html"
})
export class AlumnoComponent{
    public alumno:Alumno;
    public alumnos:Array<Alumno>=[];
    public alumno_Externo:boolean;
    public colores:string;
    public color_seleccionado:string;
    constructor(){
        this.alumnos.push(new Alumno("Gabriel Pacheco",26,"Operaciones",true));
        this.alumnos.push(new Alumno("Oscar Marquez",26,"Desarrollador de Softwaer",true));
        this.alumnos.push(new Alumno("Gerardo ",30,"Diseñador",true));
        this.alumnos.push(new Alumno("Alberto",26,"Desarrollador de Software",true));
        this.alumnos.push(new Alumno("Veronica Canelon",26,"Ventas",true));
        this.alumno_Externo=true;
        this.colores="green";
        this.color_seleccionado="#ccc";
    }
    ngOnInit(){
        
        this.alumno=new Alumno("Dante Rangel",23,"Desarrollador de Software",true);
    }
    cambiarExterno(bandera){
        this.alumno_Externo=bandera;
        console.log(this.alumno_Externo);
    }

    /*public titulo:string;
    public edad:number;
    private nombre:string;
    public mayor:boolean;
    public trabajos:Array<string>;
    comodin:any;
    constructor(){
        this.edad=55;
        this.comodin="hola";
        this.titulo="Titulo de componente";
        this.nombre="Soy privada";
        this.mayor=true;
        this.trabajos=['Carpintero','Tendero','Fontanero'];
        console.log(this);
        
    }
    ngOnInit(){
        this.setEdad(21);
        this.setNombre("Dante Rangel Robles");
        this.holaMundo();
    }
    holaMundo(){
        alert(this.nombre+ " "+this.edad);
    }
    setEdad(edad){
        this.edad=edad;

    }
    setNombre(nombre){
        this.nombre=nombre;

    }*/
}

