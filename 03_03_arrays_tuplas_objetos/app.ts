// array
let a = [1,2,3,4,5];
let b: string[] = ["lunes", "martes", "miercoles"];
let c: any[] = ["febrero", 2, null];

// tuplas
let db: [id:number, nombre:string, edad:number, activo:boolean] = [1, "Daniel", 23, false];

// objetos
let persona: {nombre:string, edad:number, pais:string, fecha_nac: Date, laboral: {empresa: string, sector: string}} = {
    nombre: "Pepe", edad: 32, pais: "Colombia", fecha_nac: new Date(1990, 4, 12), laboral: {empresa: "Empresa", sector: "Informática"}
}