import { createContext, useState } from "react";

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {

    const [ciudad, setCiudad] = useState('');
    const [code, setCode] = useState('');
    const [data, setData] = useState([]);
    const [paises, setPaises] = useState([
        {id: 1, pais: "México", code: "MX"},
        {id: 2, pais: "Estados Unidos", code: "USA"},
        {id: 3, pais: "Canada", code: "CA"},
        {id: 4, pais: "Francia", code: "FR"},
        {id: 5, pais: "Japón", code: "JA"},
        {id: 6, pais: "Noruega", code: "NO"},
        {id: 7, pais: "Inglaterra", code: "GB"}
    ]);
    const [mostrarClima, setMostrarClima] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [error, setError] = useState(false);
    const [alerta, setAlerta] = useState('');


    const handleSubmit = (ciudad, pais) => {
        if(ciudad === undefined || pais === undefined){
            setAlerta('Todos los campos son obligatorios');
            setTimeout(() => {
                setAlerta('');
            }, 3000);
            return;
        }
        setCiudad(ciudad);
        setCode(pais);
        consumirApi(ciudad, pais);
    }

    const consumirApi = async (ciudad, code) => {
       try {
        setSpinner(true);
        const API_KEY = "4e2cfb02b974aa3d4128205d037bf9fc";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${code}&appid=${API_KEY}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        if(resultado.cod === "404"){
            setSpinner(false);
            setMostrarClima(false);
            setAlerta('Ciudad no encontrada');
            setTimeout(() => {
                setAlerta('');
            }, 3000);
            return;
        }
        setSpinner(false);
        setData(resultado);
        setMostrarClima(true);
       } catch (error) {
            console.log(error);
       }
    }

    const handleAlerta = (mensaje) => {
        setAlerta(mensaje);
    }

    return(
        <ClimaContext.Provider 
            value={{
                data,
                paises,
                handleSubmit,
                ciudad,
                mostrarClima,
                spinner,
                error,
                alerta
            }} 
        >
            {children}
        </ClimaContext.Provider>
    )
}

export {
    ClimaProvider
}

export default ClimaContext