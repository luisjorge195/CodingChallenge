import {useEffect, useState} from 'react';
import clienteAxios from '../helpers/clienteAxios';
import useAuth from '../customHooks/useAuth';

const useListaObras = () => {
    const [resultados, setResultados] = useState([]);
    const [obra, setObra] = useState('');
    const [autor, setAutor] = useState('');
    
    const {token} = useAuth();
   
    
    useEffect(()=>{
        const url = `${import.meta.env.VITE_URL_API}/api/en/collection?key=${import.meta.env.VITE_URL_API_KEY}&ps=20&involvedMaker&title&q=${obra}`
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

    useEffect(()=>{
        const url = `${import.meta.env.VITE_URL_API}/api/en/collection?key=${import.meta.env.VITE_URL_API_KEY}&ps=20&involvedMaker&title&q=${autor}`
        let isApiSubscribed = true;
        const obtenerAutores = async()=>{ 
            if (isApiSubscribed) {
                const {data} = await clienteAxios(url, { headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}` }});
                setResultados(data.artObjects);
            }
        }
      
        obtenerAutores();

        return () => {
            isApiSubscribed=false
        }
    },[autor])
    return {resultados, setObra, obra, setAutor, autor}
}

export default useListaObras
