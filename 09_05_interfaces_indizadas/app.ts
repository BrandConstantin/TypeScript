// acceder a indices de array y objetos
let vector: number[] = [];
vector[0];

type Account = {
    displayName: string,
    rpDisplayName: string,
    id: string
}

let object: Account = {
    displayName: 'foo',
    rpDisplayName: 'foo',
    id: '1'
}

object['displayName'];