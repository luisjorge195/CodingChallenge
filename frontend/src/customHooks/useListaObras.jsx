import {useEffect, useState} from 'react';
import clienteAxios from '../helpers/clienteAxios';
import useAuth from '../customHooks/useAuth';

const useListaObras = () => {
    const [resultados, setResultados] = useState([]);
    const [obra, setObra] = useState('')
    const {token} = useAuth();
    const url = `https://www.rijksmuseum.nl/api/nl/collection?key=KHn4xrLx&ps=20&involvedMaker&title&q=${obra}`
    useEffect(()=>{
        let isApiSubscribed = true;
        const obtenerTitulos = async()=>{ 
            if (isApiSubscribed) {
                const {data} = await clienteAxios(url, { headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}` }});
                setResultados(data.artObjects);
            }
        }
        obtenerTitulos();

        return () => {
            isApiSubscribed=false
        }
    },[obra])
    return {resultados, setObra, obra}
}

export default useListaObras
