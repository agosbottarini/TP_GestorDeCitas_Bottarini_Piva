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
        <div className='primera-mitad' style={{marginLeft: "15vw"}}>
            <form style={{display: "flex", flexDirection: "column", marginBottom: "5vw"}}>
              <label>Nombre Mascota</label>
              <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" value=""></input>
              <label>Nombre Dueño</label>
              <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" value=""></input>
              <label>Fecha</label>
              <input type="date" name="fecha" class="u-full-width" value=""></input>
              <label>Hora</label>
              <input type="time" name="hora" class="u-full-width" value=""></input>
              <label>Sintomas</label>
              <textarea name="sintomas" class="u-full-width" style={{resize: "4vw", marginBottom: "2vw"}}></textarea>
              <button type="submit" class="u-full-width button-primary">Agregar Cita</button>

            </form>
        </div>
      )

}

export default FormularioCita