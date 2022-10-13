import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../customHooks/useAuth';
import useListaFavoritos from '../customHooks/useListaFavoritos.jsx';
import ListaFavoritos from './ListaFavoritos.jsx';
import Alertas from './Alertas.jsx'
import useAlerta from '../customHooks/useAlerta';

const Perfil = () => {
    const {nombre, email, token} = useAuth();
    const { listaFavoritos } = useListaFavoritos();
    const { alerta, setAlerta } = useAlerta();
    setTimeout(()=>{
        setAlerta('')
    },9000)
    return (
        <div>
            <div className="bg-slate-900 h-32">
                <div className="flex justify-between ml-14 items-center ">
                    <div className="flex justify-evenly items-center mt-6 mb-4">
                        <div className="overflow-hidden  relative w-16 h-16  bg-gray-100  dark:bg-gray-600">
                            <svg className="absolute  w-14 h-14 text-gray-400 cursor-pointer"  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        </div>
                        <div className="ml-4">
                            <p className="text-white font-bold text-xl ">{nombre}</p>
                            <p className="text-white font-bold text-xl">{email}</p>
                        </div>
                    </div>
                    <div> 
                        <FontAwesomeIcon className="text-white text-3xl mt-4 cursor-pointer mr-14" icon={faArrowRightFromBracket} />
                    </div>
                </div>
                <div className="bg-gray-400 h-10">
                    <p className="text-white font-bold text-2xl text-center mt-2">Acá se encuentra tu lista de obras y autores favoritos</p>
                </div>

            </div>
            <div className="flex justify-center">
                <div className={alerta !== '' && "mt-8  md:w-1/2 sm:w-70 bg-slate-800 text-center"}>
                    { !alerta.error && <Alertas  alerta={alerta}/>} 
                </div>
            </div>
            
            <div className="grid lg:grid-cols-4 ml-14 my-14 gap-10 mr-14 md:grid-cols-3 xs:grid-cols-2 ">
                {listaFavoritos.map((item)=>(
                    <ListaFavoritos key={item.id_obra} item={item} />
                ))}
            </div>
        </div>
    )
}

export default Perfil
