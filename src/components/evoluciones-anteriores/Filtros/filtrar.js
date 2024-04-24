export const filtrar = (evoluciones, filtros) => {

    const { fechaBusqueda, rangoFechas, sectores } = filtros;

    let evolucionesFiltradas = evoluciones;


    const estaEntreLasFechas = (rangoFechas, fecha) => {
        return (rangoFechas[0] <= fecha && rangoFechas[1] >= fecha);
    }

    const esLaFecha = (fechaBuscada, fecha) => {
        return (new Date(fechaBuscada) === fecha);
    }

    const fueHechaEnAlgunoDeLosSectores = (sectores, sector) => {
        return sectores.findIndex(s => s === sector) !== -1;
    };

    if (fechaBusqueda !== "") {
        evolucionesFiltradas = evolucionesFiltradas.filter(e => esLaFecha(fechaBusqueda, e.fecha));
    }

    if (rangoFechas.length !== 0) {
        evolucionesFiltradas = evolucionesFiltradas.filter(e => estaEntreLasFechas(rangoFechas, e.fecha));
    }

    if (sectores.length !== 0) {
        evolucionesFiltradas = evolucionesFiltradas.filter(e => fueHechaEnAlgunoDeLosSectores(sectores, e.sector));
    }

    return evolucionesFiltradas;
}