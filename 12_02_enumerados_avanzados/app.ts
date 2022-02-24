enum DiaSemana{
    Lunes = 401, Martes, Miercoles = 600
}

enum MesesAnio{
    Enero = "enero",
    Diciembre = "diciembre"
}

interface CitaMedica{
    dia: DiaSemana;
    mes: MesesAnio;
}

let c: CitaMedica = {
    dia: DiaSemana.Lunes,
    mes: MesesAnio.Diciembre
}