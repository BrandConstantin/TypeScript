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

let payload2: Respuesta<boolean, object> = {
    typeMessage: 'error',
    success: false,
    message: true
}