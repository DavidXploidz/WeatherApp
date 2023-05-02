function traduccionClima(estado){

    const CLIMA_TRADUCCION = {
        Clouds : 'Nublado',
        Clear : 'Despejado',
        Rain : 'Lloviendo',
        Snow: 'Nevando',
        Mist : 'Neblina'
    }
    const traduccion = CLIMA_TRADUCCION[estado];

    return traduccion;
}

export default traduccionClima;