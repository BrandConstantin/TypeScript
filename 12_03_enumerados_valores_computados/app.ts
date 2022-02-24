enum Permisos{ // los números representa el permiso en este ejemplo
    // método 1 que se complica si existe muchos permisos
    // EscribirMensajes = 1, Reaccionar = 2, EnviarEnlaces = 4, ConectarseCanalesDeVoz = 8
    // métodos 2
    EscribirMensajes = 1,
    Reaccionar = EscribirMensajes * 2,
    EnviarEnlaces = Reaccionar * 2,
    ConectarseCanalesDeVoz = EnviarEnlaces * 2
}