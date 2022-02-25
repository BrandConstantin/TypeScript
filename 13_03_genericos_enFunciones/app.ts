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