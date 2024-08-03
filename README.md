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
