import Alertas from "../components/Alertas.jsx";
import useAlerta from "../customHooks/useAlerta";
import useAuth from "../customHooks/useAuth";

const Login = () => {

    const { email, password, setEmail, setPassword, handleSubmit} = useAuth();
    const { alerta, setAlerta } = useAlerta();
    const { msg }= alerta

    return (
        <div className="flex h-screen bg-[url('./src/assets/galery.jpg')] bg-cover ">
            <div className="m-auto bg-black opacity-80 brigthnes-60 p-10">
                <h1 className="text-4xl text-center text-white font-bold capitalize">Bienvenido a Rijkmuseum</h1>
                <form className="mt-10" onSubmit={(e)=>handleSubmit(e, setAlerta)}>
                    <div className="">
                        <label className=" uppercase text-white block text-xl font-bold">Correo</label>
                        <input 
                            className="w-full  border mt-3 p-2 rounded-xl bg-white" 
                            type="email"
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="my-5">
                        <label className="uppercase text-white block text-xl font-bold">Contraseña</label>
                        <input 
                            className="w-full border bg-white font-bold mt-3 p-2 rounded-xl " 
                            type="password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)} 
                        />
                    </div>
                    <input 
                        type="submit" 
                        value="Iniciar Sesión" 
                        className="w-full rounded-xl bg-red-900 text-2xl text-white font-bold mt-3 p-1 cursor-pointer"
                    />
                    {msg && <Alertas alerta={alerta}/>}
                
                </form>
            </div>
         
        </div>
    )
}

export default Login
