const ListaCitas = (props) =>
{
    return(
        <section>
            <p><strong>Nombre mascota:</strong> {props.nombreMascota}</p>
            <p><strong>Nombre dueño:</strong> {props.nombreDuenio}</p>
            <p><strong>Fecha cita:</strong> {props.fecha}</p>
            <p><strong>Hora:</strong> {props.hora}</p>
            <p><strong>Sintomas:</strong> {props.sintomas}</p>
        </section>
    )
}

export default ListaCitas