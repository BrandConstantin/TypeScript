var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Lunes"] = 401] = "Lunes";
    DiaSemana[DiaSemana["Martes"] = 402] = "Martes";
    DiaSemana[DiaSemana["Miercoles"] = 600] = "Miercoles";
})(DiaSemana || (DiaSemana = {}));

var MesesAnio;
(function (MesesAnio) {
    MesesAnio["Enero"] = "enero";
    MesesAnio["Diciembre"] = "diciembre";
})(MesesAnio || (MesesAnio = {}));

var c = {
    dia: DiaSemana.Lunes,
    mes: MesesAnio.Diciembre
};
