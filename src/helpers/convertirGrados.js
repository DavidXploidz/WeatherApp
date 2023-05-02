function convertirTemperatura(grados){
    const kelvinForm = 273.15;
    const resultado = grados - kelvinForm;
    return Math.ceil(resultado);
}

export default convertirTemperatura;
