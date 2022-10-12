import { createContext , useState } from 'react'
import { useNavigate} from 'react-router-dom'
import clienteAxios from '../helpers/clienteAxios.js'
const AuthContext = createContext();


const AuthProvider = ({children})=>{

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] =  useState('');
    const navigate = useNavigate()
    const handleSubmit = async(e, setAlerta)=>{
        e.preventDefault();
        if([email, password].includes('')){
            setAlerta({
                error: true,
                msg:'Todos los campos son obligatorios'
            })
            return
        }
        try {
            const { data } = await clienteAxios.post('/login', {email,password})
            console.log(data)
            navigate('/galeria')
        } catch (error) {
            setAlerta({
                error:true,
                msg:error.response.data.msg
            })
        }
        
    }

    return(
        <AuthContext.Provider
            value={{
                email,
                password,
                setEmail,
                setPassword,
                handleSubmit
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export { AuthProvider}
export default AuthContext;