function estadoClima(estado){

    const ESTADO_DEL_CLIMA = {
        Clouds : 'bx bx-cloud',
        Clear : 'bx bx-sun',
        Rain : 'bx bx-cloud-rain',
        Snow: 'bx bx-cloud-snow',
        Mist : 'bx bx-cloud'
    }
    const clima = ESTADO_DEL_CLIMA[estado];

    return clima;
}

export default estadoClima;