// sin desestructuración
const dbz: string [] = ['Goku','Vegeta','Trunk'];
console.group('Personaje 3: ', dbz[2]);

// con desestructuración
const [ , , trunk = 'Not Found']: string [] = ['Goku','Vegeta','Trunk']; // not found si la posición 3 no existe
console.group('Personaje 3: ', trunk);