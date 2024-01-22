export const filtrar = (evoluciones, filtros) => {

    console.log("filtros recibidos: ", filtros);
    const { fechaBusqueda, rangoFechas, sectores } = filtros;

    let evolucionesFiltradas = evoluciones;

    console.log("evoluciones recibidas: ", evolucionesFiltradas);
    console.log("FILTROS DESESTRUCTURADOS: ", fechaBusqueda, rangoFechas, sectores);

    const estaEntreLasFechas = (rangoFechas, fecha) => {
        return (rangoFechas[0] <= fecha && rangoFechas[1] >= fecha);
    }

    const esLaFecha = (fechaBuscada, fecha) => {
        console.log("fecha buscada:", fechaBuscada, "fecha: ", fecha);
        return (new Date(fechaBuscada) === fecha);
    }

    const fueHechaEnAlgunoDeLosSectores = (sectores, sector) => {
        console.log("alguno de:",sectores);
        console.log("evolucion:", sector);
        return sectores.findIndex(s => s === sector) !== -1;
    };

    if (fechaBusqueda !== "") {
        evolucionesFiltradas = evolucionesFiltradas.filter(e => esLaFecha(fechaBusqueda, e.fecha));
        console.log("filtre por fecha");
    }

    if (rangoFechas.length !== 0) {
        evolucionesFiltradas = evolucionesFiltradas.filter(e => estaEntreLasFechas(rangoFechas, e.fecha));
        console.log("filtre por rango")
    }

    if (sectores.length !== 0) {
        evolucionesFiltradas = evolucionesFiltradas.filter(e => fueHechaEnAlgunoDeLosSectores(sectores, e.sector));
        console.log("filtre por sector")
    }

    console.log("EVOLUCIONES FILTRADAS: ", evolucionesFiltradas);
    return evolucionesFiltradas;
}