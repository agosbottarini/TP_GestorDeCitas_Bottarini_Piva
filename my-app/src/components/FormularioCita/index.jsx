import React, { useState } from 'react';
import { useEffect } from 'react';

const FormularioCita =  ({ setCitas }) => {
    
    const [nombreMascota, setNombre] = useState('')
    const [nombreDuenio, setNombreD] = useState('')
    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [readyToSubmit, setReady] = useState(false)
    useEffect(() => {
        handleSubmit()
    }, [readyToSubmit])

    const handleSubmit = () => {
        const nuevaCita = {
            nombreMascota,
            nombreDuenio,
            fecha,
            hora,
            sintomas
        }
        setCitas(prevCitas => [...prevCitas, nuevaCita]);
        console.log(nuevaCita)
    }

    return (
        <div style={{width: "50%", marginLeft: "19.3vw"}}>
            <div>
            <form style={{display: "flex", flexDirection: "column", marginBottom: "5vw"}} onSubmit={() => {setReady(true)}}>
              <label >Nombre Mascota</label>
              <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" onChange={(e) => {setNombre(e.target.value)}}></input>
              <label>Nombre Dueño</label>
              <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" onChange={(e) => {setNombreD(e.target.value)}}></input>
              <label>Fecha</label>
              <input type="date" name="fecha" className="u-full-width" onChange={(e) => {setFecha(e.target.value)}}></input>
              <label>Hora</label>
              <input type="time" name="hora" className="u-full-width" onChange={(e) => {setHora(e.target.value)}}></input>
              <label>Sintomas</label>
              <textarea name="sintomas" className="u-full-width" style={{resize: "4vw", marginBottom: "2vw"}} onChange={(e) => {setSintomas(e.target.value)}}></textarea>
              <button type="submit" className="u-full-width button-primary">Agregar Cita</button>

            </form>
            </div>
        </div>
      )

}

export default FormularioCita