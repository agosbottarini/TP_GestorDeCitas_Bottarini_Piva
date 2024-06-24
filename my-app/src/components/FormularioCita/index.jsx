import React, { useState } from 'react';

const FormularioCita = ({ setCitas }) => {
    const [nombreMascota, setNombreMascota] = useState('');
    const [nombreDuenio, setNombreDuenio] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validar que todos los campos estén llenos antes de agregar la cita
        if (nombreMascota.trim() === '' || nombreDuenio.trim() === '' || fecha === '' || hora === '' || sintomas.trim() === '') {
            alert('Todos los campos son obligatorios');
            return;
        }

        // Crear nueva cita
        const nuevaCita = {
            nombreMascota,
            nombreDuenio,
            fecha,
            hora,
            sintomas
        };

        // Agregar nueva cita a la lista
        setCitas(prevCitas => [...prevCitas, nuevaCita]);

        // Limpiar el formulario después de agregar la cita
        setNombreMascota('');
        setNombreDuenio('');
        setFecha('');
        setHora('');
        setSintomas('');
    };

    return (
        <div style={{ width: "50%", marginLeft: "19.3vw" }}>
            <form style={{ display: "flex", flexDirection: "column", marginBottom: "5vw" }} onSubmit={handleSubmit}>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value={nombreMascota} onChange={(e) => setNombreMascota(e.target.value)} />
                <label>Nombre Dueño</label>
                <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value={nombreDuenio} onChange={(e) => setNombreDuenio(e.target.value)} />
                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                <label>Hora</label>
                <input type="time" name="hora" className="u-full-width" value={hora} onChange={(e) => setHora(e.target.value)} />
                <label>Síntomas</label>
                <textarea name="sintomas" className="u-full-width" style={{ resize: "vertical", marginBottom: "2vw" }} value={sintomas} onChange={(e) => setSintomas(e.target.value)}></textarea>
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </div>
    );
};

export default FormularioCita;
