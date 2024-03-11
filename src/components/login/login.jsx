import './login.css';
import { BiArrowBack } from "react-icons/bi";
import { SiGoogle } from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import axios from 'axios';
import React, { useState } from 'react';    

import { BiLockAlt } from "react-icons/bi";
import {Link} from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
          await axios.post('http://localhost:8080/login', {
            email,
            password
          });
    
          alert("Login exitoso");
        } catch (error) {
          alert("Login fallido");
          console.log("Error al ingresar: ", error);
        }
    };      
    return(
        <div className="body">
            <div className="contenedor-form">
                <div className="info">
                    <div className="back1">
                        <Link to="/"><BiArrowBack/></Link>
                    </div>
                    <div className="info-childs">
                            <h2>Bienvenido</h2>
                            <p>Para ingresar a nuestra comunidad Inicie Sesion</p>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <p>¿No tienes Cuenta?</p>
                            <Link to="/register"><input type="button" value="Registrarse"/></Link>
                        </div>
                </div>
                <div className="form-info">
                    <div className="form-info-childs">
                        <h2>Inicie Sesion</h2>
                        <div className="icons">
                                <div className="burbujagoogle">
                                   <SiGoogle /> 
                                </div>
                                <div className="burbujatelefono">
                                    <AiFillPhone/>
                                </div>
                            </div>
                            <p>o usa tu nombre de usuario</p>
                            <form className='form'>
                                <label >
                                    <AiOutlineUser/>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
                                </label>
                                
                                <label >
                                    <BiLockAlt/>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña"/>
                                </label>
                                
                                <input type="submit" onClick={handleLogin} value="Iniciar sesion"/>
                            </form> 
                    </div>
                </div>
            </div>
        </div>
    )
}
