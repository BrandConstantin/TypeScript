enum DiaSemana{
    Lunes, Martes, Miercoles
}

interface CitaMedica{
    dia: DiaSemana;
}

let c: CitaMedica = {
    dia: DiaSemana.Lunes,
}