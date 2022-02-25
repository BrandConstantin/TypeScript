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

let payload2: Respuesta<boolean> = {
    typeMessage: 'error',
    success: false,
    message: true
}