interface Post {
    id: number;
}
interface Nota extends Post{
    mensaje: string;
}
interface NotaColorida extends Nota {
    color: string;
}
interface Foto extends Post{
    url: string;
}
interface Video extends Post{
    duration: number;
}

// HTTP POST /upload
function subir<Publicacion extends Post, Extra>(p: Publicacion, e?: Extra): Publicacion{
    return p;
}

let post: Nota = {id: 5, mensaje:"hola mundo"};
let x = subir(post);