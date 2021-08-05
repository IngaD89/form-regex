import * as React from "react";
import {useState} from "react";
import TablaUsuarios from "./tablas/TablaUsuarios";
import FormularioAgregarUsuario from "./forms/FormularioAgregarUsuario";
import FormularioEditarUsuario from "./forms/FormularioEditarUsuario";


export default function App() {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        numTelefono: '',
        eMail: '',
        direccion: ''
    });

    const actualizarDatos = () => {
        setDatos({
            nombre: datos.nombre,
            apellido: datos.apellido,
            dni: datos.dni,
            numTelefono: datos.numTelefono,
            eMail: datos.eMail,
            direccion: datos.direccion
        });
    }

    const [usuarios, setUsuarios] = useState('');


    const agregarUsuario = (usuario) => {
        usuario.id = usuarios.length + 1;
        setUsuarios([...usuarios, usuario]);
    }

    const eliminarUsuario = (id) => {
        setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
        setEditando(false);
    }
    const estadoInicialFormularioEdicion = {
        id: null,
        nombre: '',
        apellido: '',
        dni: '',
        numTelefono: '',
        eMail: '',
        direccion: ''
    }
    const [usuarioActual, setUsuarioActual] = useState(estadoInicialFormularioEdicion);
    const [editando, setEditando] = useState(false);
    const editarUsuario = (usuario) => {
        setEditando(true);
        setUsuarioActual({
            id: usuario.id,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            dni: usuario.dni,
            numTelefono: usuario.numTelefono,
            eMail: usuario.eMail,
            direccion: usuario.direccion
        });
    }

    const actualizarUsuario = (id, usuarioActualizado) => {
        setEditando(false);
        const usuariosActualizados = usuarios.map((usuario) => (usuario.id === id ? usuarioActualizado : usuario));
        setUsuarios(usuariosActualizados);
    }

    return (
        <div className="container mt-4">
            <h1>Tutorial React Hooks</h1>
            <div className="row">
                {editando ? (
                    <div className="col-md-4">
                        <h2>Editar usuario</h2>
                        <FormularioEditarUsuario setEditando={setEditando} usuarioActual={usuarioActual} actualizarUsuario={actualizarUsuario} />
                    </div>
                ) : (
                    <div className="col-md-4">
                        <h2>Agregar usuario</h2>
                        <FormularioAgregarUsuario agregarUsuario={agregarUsuario}/>
                    </div>
                )}
                <div className="col-md-4">
                    <h2>Ver usuarios</h2>
                    <TablaUsuarios usuarios={usuarios} editarUsuario={editarUsuario} eliminarUsuario={eliminarUsuario}/>
                </div>
            </div>
        </div>
    )
}

