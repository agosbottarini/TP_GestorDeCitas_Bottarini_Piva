import React, { useState } from 'react';
import FormularioCita from '../FormularioCita';
import ListaCitas from '../ListaCitas';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; 

const App = () => {
    
  const [citas, setCitas] = useState([]);


  const eliminarCita = (id) => {
      

      const confirmarEliminacion = window.confirm("¿Deseas eliminar tu cita?");
        if(confirmarEliminacion){
            const citasActualizadas = citas.filter((cita, index) => index !== id);
            setCitas(citasActualizadas);
        }
  }


    return (
        <section class="listacitas-enter listacitas-enter-active">
            <h1 style={{ textAlign: "center", marginTop: "3vw", marginBottom: "4vw", fontSize: "2.2vw" }}>GESTOR DE CITAS</h1>
            <div style={{ display: "flex" }}>


                <div className='primera-mitad'>
                    <h1 style={{ marginLeft: "15.3vw", textAlign: "center" }}>AGENDAR UNA CITA:</h1>
                    <FormularioCita setCitas={setCitas} />
                </div>


                <div className='segunda-mitad'>
                    <h1>TUS CITAS:</h1>
                    <TransitionGroup className="lista-citas">
                        {citas.map((cita, index) => (

                        <CSSTransition
                            key={index}
                            id={index}
                            timeout={300}
                            classNames="listacitas"
                          >
                          <ListaCitas
                            nombreMascota={cita.nombreMascota}
                            nombreDuenio={cita.nombreDuenio}
                            fecha={cita.fecha}
                            hora={cita.hora}
                            sintomas={cita.sintomas}
                            onEliminar={eliminarCita}
                          />
                        </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
            </div>
        </section>
    );
};

export default App;
