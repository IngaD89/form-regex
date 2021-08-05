import * as React from "react";

export default function TablaUsuarios(props) {


    return(
        <table className="table mt-4">
            <thead className="thead-dark">
            <tr>
                <th>Nombre</th>
                <th>Usuario</th>
                <th>DNI</th>
                <th>Número de teléfono</th>
                <th>Email</th>
                <th>Dirección</th>
            </tr>
            </thead>
            <tbody>
            {props.usuarios.length > 0 ? (
                props.usuarios.map((usuario) => (
                    <tr key={usuario.id}>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.apellido}</td>
                        <td>{usuario.dni}</td>
                        <td>{usuario.numTelefono}</td>
                        <td>{usuario.eMail}</td>
                        <td>{usuario.direccion}</td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-primary btn-sm m-1"
                                onClick={() => props.editarUsuario(usuario)}
                            >Editar</button>
                            <button
                                type="button"
                                className="btn btn-primary btn-sm m-1"
                                onClick={() => props.eliminarUsuario(usuario.id)}
                            >Eliminar</button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No se han agregado usuarios</td>
                </tr>
            )}
            </tbody>
        </table>
    )

}