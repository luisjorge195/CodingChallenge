import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import {AuthProvider} from './context/AuthProvider.jsx'
import { AlertaProvider } from './context/AlertaProvider.jsx'
import Galeria from './pages/Galeria'
function App() {
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <AlertaProvider>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/galeria' element={<Galeria/>}/>
          </Routes>
        </AlertaProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
