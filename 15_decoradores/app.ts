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
