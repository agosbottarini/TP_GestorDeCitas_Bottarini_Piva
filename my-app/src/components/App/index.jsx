import React, { useState } from 'react';
import FormularioCita from '../FormularioCita';
import ListaCitas from '../ListaCitas';

const App = () => {
    const [citas, setCitas] = useState([]);

    return (
        <section>
            <h1 style={{ textAlign: "center", marginTop: "3vw", marginBottom: "4vw" }}>GESTOR DE CITAS</h1>
            <div style={{ display: "flex" }}>
                <div className='primera-mitad'>
                    <h1 style={{ marginLeft: "14vw", textAlign: "center" }}>Formulario de Citas</h1>
                    <FormularioCita setCitas={setCitas} />
                </div>
                <div className='segunda-mitad'>
                    <h1>Listado citas</h1>
                    {citas.map((cita, index) => (
                        <ListaCitas
                            key={index} // Usamos el índice como clave única temporal
                            nombreMascota={cita.nombreMascota}
                            nombreDuenio={cita.nombreDuenio}
                            fecha={cita.fecha}
                            hora={cita.hora}
                            sintomas={cita.sintomas}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default App;
