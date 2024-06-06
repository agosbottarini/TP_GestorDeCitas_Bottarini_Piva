import React, { useState } from 'react';
import FormularioCita from '../FormularioCita';

const App = () =>
{
    const [citas, setCitas] = useState([]);
    return (
        <div>
        <h1>Formulario de Citas</h1>
        <FormularioCita setCitas={setCitas} />
          
          {/* Otro código relacionado con citas */}
        </div>
      );
}

export default App