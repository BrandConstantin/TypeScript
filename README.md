# TypeScript
Lerning TypeScript

## Trabajar con tipos
```
function saludar(nombre: string): string{
    return `Hola, ${nombre.toUpperCase()}`;
}

console.log(saludar("Dani"));
```

## Tipo
### Tipos primitivos
```
// boolean
let logico = false;
let esReal: boolean = true;

// numericos
let uno = 1;
let dos: number = 2.4;
let numeroLargo: number = 1_345_432_989;

// string
let cadena = 'Hola Mundo';
```
### Tipos especiales
```
// any
let cualquiera: any = "es un string ahora";
cualquiera = 5;
cualquiera = false;

// null
let nada: null = null;

// undefined
let indefinido: undefined = undefined;

// void
let nada2: void = undefined;
```
### Arrays
```
let a = [1,2,3,4,5];
let b: string[] = ["lunes", "martes", "miercoles"];
let c: any[] = ["febrero", 2, null];
```
### Tuplas
```
let db: [id:number, nombre:string, edad:number, activo:boolean] = [1, "Daniel", 23, false];
```
### Objetos
```
let persona: {nombre:string, edad:number, pais:string, fecha_nac: Date, laboral: {empresa: string, sector: string}} = {
    nombre: "Pepe", edad: 32, pais: "Colombia", fecha_nac: new Date(1990, 4, 12), laboral: {empresa: "Empresa", sector: "Informática"}
}
```
## Funciones
```
function sumar(num1: number, num2: number): number{
    let suma = num1 + num2;
    console.log(`${num1} + ${num2} = ${suma}`);
    return suma;
}

let sumado: number = sumar(3, 4);
```
### Funciones lambda
```
function sumar(num1: number, num2: number) => {
    let suma = num1 + num2;
    console.log(`${num1} + ${num2} = ${suma}`);
    return suma;
}

let sumado: number = sumar(3, 4);
```
### Funciones con objeto como argumentos
```
interface Character{
    name: string;
    hp: nunmber;
    showHp: () => void;
}

const heatCharacter (character Character, amount: number) =>{
    character.hp += amount;
}

const strider: Character = {
    hame: 'Strider',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 10);
```
### Funciones tipadas
```
let restar:(m: number, n:number)=>number = function(m: number, n:number):number{
    let resta = m - n;
    console.log(`${m} - ${n} = ${resta}`);
    return resta;
}

// v2
let multiplicar: (m: number, n:number)=>number;
multiplicar = (m, n) => m * n;

let restado = restar(4, 1);
let multiplicado = multiplicar(2, 5);
```

## Interfaces
```
interface SuperHero{
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

interface Address{
    calle: string,
    ciudad: string,
    pais: string
}


const superHeroe: SuperHero = {
    name: 'IronMan',
    age: 30,
    address: {
        calle: 'Main Streat',
        ciudad: 'Málaga',
        pais: 'España'
    },
    showAddress(){
        return this.name + ',' + this.address.ciudad;
    }
}

const address = superHeroe.showAddress();
console.log(address);
```

## Desestructuración
### Desestructuración de Objetos
```
interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 30,
    song: "Mess",
    details: {
        author: "Ed Sheren",
        year: 2015
    }
}

// sin desestructuración
console.log('Song: ', audioPlayer.song);
console.log('Song author: ', audioPlayer.details.author);


// con desestructuración
const {song:nombreCancion, songDuration, details} = audioPlayer;
console.log('Song name: ', nombreCancion);
console.log('Song duration: ', songDuration);
const{author} = details;
console.log('Author: ', author);
```
### Desestructuración de arreglos
```
// sin desestructuración
const dbz: string [] = ['Goku','Vegeta','Trunk'];
console.group('Personaje 3: ', dbz[2]);

// con desestructuración
const [ , , trunk = 'Not Found']: string [] = ['Goku','Vegeta','Trunk']; // not found si la posición 3 no existe
console.group('Personaje 3: ', trunk);
```
### Desestructuración de argumentos
```
interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 350
}

interface taxCalculationOptions{
    tax: number;
    products: Product[];
}

function taxCalculation(options: taxCalculationOptions): number[]{
    const {tax, products}  = options;
    let total = 0;

    products.forEach(({price}) => {
        total += price;
    });

    return[total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax, // es el tax: tax en ES6
});

console.log('Total ', total);
console.log('Tax ', tax);
```
## Clases
### Clase básica
```
class Rectangulo{
    ancho: number;
    alto: number;

    constructor(alto:number, ancho:number){
        this.alto = alto;
        this.ancho = ancho;
    }

    area(): number{
        return this.ancho * this.alto;
    }
    perimetro(): number{
        return this.ancho * 2 + this.alto * 2;
    }
}

let r1 = new Rectangulo(10, 13);
let r2 = new Rectangulo(5, 8);
console.log(r1.area() + " / " + r2.perimetro());
```
### Readonly
```
class Rectangulo{
    readonly ancho: number; // es equivalente en java con finally
    private readonly alto: number;

    ....
}
```
### Getters and Setters
```
class Rectangulo{
    readonly ancho: number; // es equivalente en java con finally
    private readonly alto: number;

    constructor(alto:number, ancho:number){
        this.alto = alto;
        this.ancho = ancho;
    }

    // getters
    get area(): number{
        return this.ancho * this.alto;
    }
    get perimetro(): number{
        return this.ancho * 2 + this.alto * 2;
    }

    // setters
    set area(value: number){
        this.area = value;
    }
    set perimetro(value: number){
        this.perimetro = value;
    }
}
```
### Extend
```
class Vehiculo{
    fabricante: string;

    constructor(fabricante: string){
        this.fabricante = fabricante;
    }

    moverse(){
        console.log(`El vehiculo ${this.fabricante} se esta moviendo`);
    }
}

class VehiculoTerrestre extends Vehiculo{
    private tipo: string;

    constructor(tipo: string, fabricante: string){
        super(fabricante);
        this.tipo = tipo;
    }

    moverse(): void {
        super.moverse();
        console.log("El vehiculo esta moviendo sus 4 ruedas");
    }
}
let v1 = new Vehiculo("Ford");
v1.moverse();
let v2 = new VehiculoTerrestre("VW", "Golf");
v2.moverse();
```
### Abstract & protected
```
abstract class Vehiculo{
    protected fabricante: string;

    constructor(fabricante: string){
        this.fabricante = fabricante;
    }

    moverse(){
        console.log(`El vehiculo ${this.fabricante} se esta moviendo`);
    }
}
....
```
## Tipos
### Tipos alias
```
type Numero = number;
let n: Numero = 5;

type LoginCredentials = {
    username: string,
    password: string,
    remember?: boolean
}
function login(data: LoginCredentials){ }
login({
    username: 'admin',
    password: 'admin'
})
```
### Tipos literales
```
let verdadera: true = true;

// no se les pueden mofifica el valor
let hola: 'hola' = 'hola';
const saludo = "adio";
```
## Uniones
### Unión de tipos
```
function convertir(valor: string | number){}

convertir("montaña");
convertir(4);

type A ={
    uno: boolean,
    dos: boolean
}
type B ={
    tres: boolean
}
// let valor: A|B = {tres: boolean}  // coge los valores o de uno o de otro
let valor: A|B = {uno: true, dos: false}
```
### Unión discriminantes
```
type OperacionSuma = {
    num1: number,
    num2: number,
    tipo: 'suma'
}

type OperacionDividir = {
    num1: number,
    num2: number,
    tipo: 'dividir'
}

type Operacion = OperacionSuma | OperacionDividir;

function operar(op: Operacion){
    if(op.tipo == 'suma'){
        return op.num1 + op.num2;
    }else if(op.tipo == 'dividir'){
        op.num1 / op.num2;
    }
}
```
## Casting 
```
function procesar(g: Geometria){
    if(g.lados == 4){
        let cuadrado = g as Cuadrado;
        cuadrado.lado = 2;
    } else if (g.lados == 3){
        let triangulo = g as Triangulo;
        triangulo.base = 2;
    }
}

//otro tipo de casteo
function esUnCuadrado(x: any): x is Cuadrado{
    return x.lados && x.pintar && x.lado;
}
```
## Tipos enumerados
```
enum DiaSemana{
    Lunes, Martes, Miercoles
}
```
## Genéricos
### Genéricos en tipo
```
interface Respuesta<Msg>{
    typeMessage: string,
    success: boolean,
    message: Msg
}

let payload: Respuesta<string> = {
    typeMessage: 'post',
    success: true,
    message: 'Cliente actualizado correctamente!'
}
```
### Genéricos múltiples
```
interface Respuesta<Msg, IdMsg>{
    typeMessage: string,
    success: boolean,
    message: Msg,
    newId?: IdMsg
}

let payload: Respuesta<string, number> = {
    typeMessage: 'post',
    success: true,
    message: 'Cliente actualizado correctamente!',
    newId: 234
}
```
### Genéricos en funciones
```
type Nota = {mensaje: string}
type NotaColorida = Nota & {color: string}
type Foto = {url: string}
type Video = {duracion: number}

type Publicacion = Nota | NotaColorida | Foto | Video;

// HTTP POST /upload
function subir<Publicacion, Extra>(p: Publicacion, e?: Extra): Publicacion{
    return p;
}

let post: Nota = {mensaje:"hola mundo"};
let x = subir(post);
```
### Genéricos con restricciones
```
function subir<Publicacion extends Post, Extra>(p: Publicacion, e?: Extra): Publicacion{
    return p;
}
```
## Decoradores
Son funciones especiales que apuntan a objetos
```
function classDecorador<T extends {new (...args:any[]): {}}>(
    constructor: T
){
    return class extends constructor{
        newProperty = 'New Property';
        hello = 'override';
    }
}

@classDecorador //@service; @module; @component
class SuperClass{
    public myProperty: string = 'Abc123';

    printing(){
        console.log("Hola Mundo")
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);
```
## Encadenamiento
* children es opcional
```const howManyChildrens = passenger.children?.length || 0;```
* children siempre tiene valor
```const howManyChildrens = passenger.children!.length || 0;```