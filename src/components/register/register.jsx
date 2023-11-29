import './register.css';
import { SiGoogle } from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { BsArrowRepeat } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import {Link} from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';



export default function register() {

    const [formData, setForm] = useState({
        username: "",
        email: "",
        password: "",
        password2: ""
      });
    
      const handleChange = (e) => {
        setForm({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleRegister = async (e) => {
        e.preventDefault();
    
        if (formData.password !== formData.password2) {
          alert("Las contrasenas deben coincidir");
        } else {
          try {
            await axios.post('http://localhost:8080/registro', {
              formData
            });
      
            alert("Registrado");
          } catch (error) {
            alert("Error al registrarse");
            console.log("Error al registrarse ", error);
          }  
        }
      };

    return (
        <div className="body">
                <div className="contenedor-form">
                    
                    <div className="info">
                        <div className="back">
                            <Link to="/"><BiArrowBack/></Link>
                        </div>
                        <div className="info-childs">
                            <h2>Bienvenido</h2>
                            <p>Para unirte a nuestra comunidad porfavor Inicie Sesion con sus datos</p>
                            <Link to="/login"><input type="button" value="Iniciar sesion"/></Link>
                        </div>
                    </div>
                    <div className="form-info">
                        <div className="form-info-childs">
                            <h2>Crear Cuenta</h2>
                            <div className="icons">
                                <div className="burbujagoogle">
                                   <SiGoogle /> 
                                </div>
                                <div className="burbujatelefono">
                                    <AiFillPhone/>
                                </div>
                            </div>
                            <p>o usa tu email para registrarte</p>
                            <form className='form'>
                                <label >
                                    <AiOutlineUser/>
                                    <input type="text" name="username" onChange={handleChange} placeholder="Nombre de usuario"/>
                                </label>
                                <label >
                                    <AiOutlineMail/>
                                    <input type="email" name="email" onChange={handleChange} placeholder="Email"/>
                                    
                                </label>
                                <label >
                                    <BiLockAlt/>
                                    <input type="password" name="password" onChange={handleChange} placeholder="Contraseña"/>
                                </label>
                                <label >
                                    <BsArrowRepeat/>
                                    <input type="password"name="password2" onChange={handleChange} placeholder="Repetir contraseña"/>
                                </label>
                                <input type="submit" onClick={handleRegister} value="Registrarse"/>
                            </form>     
                        </div>
                    </div>
                </div>
            
        </div>
    )
}