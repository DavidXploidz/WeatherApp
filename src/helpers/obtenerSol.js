function obtenerSol(hora){
    const sol = new Date(hora * 1000);
    // const sunsetTime = new Date(hora * 1000);

    const sunriseHour = sol.getHours();
    const sunriseMinute = sol.getMinutes();
    // const sunriseSecond = sunriseTime.getSeconds();

    return sunriseHour + ":" + sunriseMinute;
}

export default obtenerSol;