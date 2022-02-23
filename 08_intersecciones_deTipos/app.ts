type Coordenada = [x: number, y: number];
type Vector = [x: number, y: number];

type Posicionable = {
    posicion: Coordenada
}

type Movile = {
    velocidad: Vector,
    acceleracion: Vector
}

type MovileYPosicionable = Posicionable & Movile;

let obj: MovileYPosicionable = {
    posicion: [5, 3],
    velocidad: [2, 5],
    acceleracion: [2, 1]
}