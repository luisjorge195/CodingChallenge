import React from 'react'

const Alertas = ({alerta}) => {
  return (
    <div className={`${alerta.error} ? 'bg-red-700 p-3 text-white text-2xl text-center bg-red-800' : 'bg-green-100 text-white'`}>
        {alerta.msg}
    </div>
  )
}

export default Alertas