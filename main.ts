import {persona} from "./persona";
import {direccion} from "./direccion";
import {telefono} from "./telefono";
import {mail} from "./mail";


let direccion1= new direccion("Principal ",2,2,"a",36500,"Lalín","Potevedra");
let telefono1= new telefono("Oficina", 685230645);
let mail1= new mail("Personal","angelhidalgo@gmail.com");
let persona1 = new persona("Angel ","Hidalgo",30,"09841431F","17-7-90","Azul","H","Sin nota", direccion1, mail1, telefono1);


let direccion2= new direccion("La iglesia ", 4, 3,"a",36500,"Lalín","Potevedra");
let telefono2= new telefono("Oficina", 964253698);
let mail2= new mail("Personal","stevenfajardo@gmail.com");
let persona2 = new persona("Steven ", "Fajardo", 26,"09841408s","6-4-95","Azul","H","Sin nota", direccion2, mail2, telefono2);


let direccion3= new direccion("Principal ",2,2,"a",36500,"Lalín","Potevedra");
let telefono3= new telefono("Oficina", 685320645);
let mail3= new mail("Personal","angelhidalgo@gmail.com");
let persona3 = new persona("Lore ","Olivero",23,"09841631F","21-11-95","Azul","H","Sin nota", direccion3, mail3, telefono3);

let personas = [persona1, persona2, persona3];
console.log('personas: ', personas);
console.log("----------------------------------------")
let filterPErson = personas.filter(element => element.dni == "09841431F");
let person: persona = filterPErson[0];
console.log(`Modificación de persona por el DNI ${person.dni} sin modificar`)
console.log(person)
person.setDirecciones(direccion2);
person.setMail(mail2);
person.setTelefono(telefono2)
console.log(`Modificación de persona por el DNI ${person.dni} modificado`)
console.log(person)
