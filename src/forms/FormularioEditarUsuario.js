import * as React from "react";
import {useState} from "react";
import { useEffect } from 'react';

export default function FormularioEditarUsuario(props) {
    const [usuario, setUsuario] = useState(props.usuarioActual);

    useEffect(() => {
        setUsuario(props.usuarioActual);
    }, [props]);

    const gestionarCampo = (event) => {
        const { name, value } = event.target;
        setUsuario({ ...usuario, [name]: value });


    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                props.actualizarUsuario(usuario.id, usuario);
            }}
        >
            <div className="form-group">
                <label>Nombre</label>
                <input
                    id="nombre"
                    className="form-control"
                    type="text"
                    name="nombre"
                    value={usuario.nombre}
                    onChange={gestionarCampo}
                />
            </div>
            <div className="form-group">
                <label>Apellido</label>
                <input
                    id="apellido"
                    className="form-control"
                    type="text"
                    name="apellido"
                    value={usuario.apellido}
                    onChange={gestionarCampo}
                />
            </div>
            <div className="form-group">
                <label>DNI</label>
                <input
                    id="dni"
                    className="form-control"
                    type="text"
                    name="dni"
                    value={usuario.dni}
                    onChange={gestionarCampo}
                />
            </div>
            <div className="form-group">
                <label>Numero de Teléfono</label>
                <input
                    id="numTelefono"
                    className="form-control"
                    type="text"
                    name="numTelefono"
                    value={usuario.numTelefono}
                    onChange={gestionarCampo}
                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input
                    id="eMail"
                    className="form-control"
                    type="email"
                    name="eMail"
                    required pattern='^[a - zA - Z0 - 9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
                    value={usuario.eMail}
                    onChange={gestionarCampo}
                />
            </div>
            <div className="form-group">
                <label>Dirección</label>
                <input
                    id="direccion"
                    className="form-control"
                    type="text"
                    name="direccion"
                    value={usuario.direccion}
                    onChange={gestionarCampo}
                />
            </div>
            <div className="form-group">
                <button className="btn btn-danger">Actualizar usuario</button>
                <button
                    className="btn btn-primary ml-2"
                    onClick={() => props.setEditando(false)}
                >
                    Cancelar
                </button>
            </div>
        </form>
    )

}