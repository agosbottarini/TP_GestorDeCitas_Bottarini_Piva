import React, { useState } from 'react';

const FormularioCita =  ({ setCitas }) => {
    
    const [nombre, setNombre] = useState('')
    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState('')

    const handleSubmit = (def) => {
        def.preventDefault()
        const nuevaCita = {
            nombre,
            fecha,
            hora
        }

        setCitas(prevCitas => [...prevCitas, nuevaCita]);
        setNombre('')
        setFecha('')
        setHora('')
    }

    return (
        <form onSubmit={handleSubmit}>
          <input type="text" value={nombre} onChange={(def) => setNombre(def.target.value)} placeholder="Nombre completo" />
          <input type="date" value={fecha} onChange={(def) => setFecha(def.target.value)} placeholder="Fecha" />
          <input type="time" value={hora} onChange={(def) => setHora(def.target.value)} placeholder="Hora" />
          <button type="submit">Agregar Cita</button>
        </form>
      )

}

export default FormularioCita