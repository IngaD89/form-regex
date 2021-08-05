import * as React from "react";
import {useState} from "react";
import 'react-phone-number-input/style.css';
import PhoneInput from "react-phone-input-2";


export default function FormularioAgregarUsuario(props) {

    const estadoInicialFormulario = {
        id: null,
        nombre: '',
        apellido: '',
        dni: '',
        numTelefono: '',
        eMail: '',
        direction: ''
    };
    const [usuario, setUsuario] = useState(estadoInicialFormulario);
    const gestionarCampo = (event) => {
        setUsuario({
            ...usuario,
            [event.target.name]: event.target.value
        });
    }

    const [phone, setPhone] = useState('');


    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                props.agregarUsuario(usuario);
                setUsuario(estadoInicialFormulario);
            }}>
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
                <PhoneInput
                    id="numTelefono"
                    className="form-control"
                    defaultCountry="es"
                    type="tel"
                    name="numTelefono"
                    pattern="(\+34|0034)[\s\-.]\d{3}([\s\-.]\d{2,3}){2,3}"
                    metadata="okp:tel.input"
                    useNationalFormatForDefaultCountryValue="es"
                    value={phone}
                    onChange={gestionarCampo}

                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input
                    id="eMail"
                    className="form-control"
                    type="email"
                    pattern='^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
                    name="eMail"
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
                <button type="submit" className="btn btn-primary">Agregar usuario</button>
            </div>
        </form>
    )
}