import * as React from 'react';
import { useEffect } from "react";
import {Link} from 'react-router-dom';
import { setup } from "../ia/ia"; // Esta es la importación que causaba el error, la moví al principio

import './header.css'; // Luego vienen las importaciones de estilos y recursos
import carritopng from '../../multimedia/carrito.png';
import loginpng from "../../multimedia/Login.png";

// Aquí puedes dejar el resto de tu código, como las definiciones de componentes y funciones
export default function Header() {
  useEffect(() => {
    setup()
  }, [])
    return (
        <div className="body_header">
            <ul className="menu">
            <div className="barnav">
                
                <li><a href="" className="Home_Barnav">Home </a></li>
                <li><a href="" className="Menu_Barnav">Menu</a></li>
                <li><a href="" className="staff_Barnav">Staff Catering</a></li>
            
            </div>    
        
    
            <div className="iconos">
                <input type="text" placeholder="Search ..." id="filled-basic" />
                <span id="pred_labels"></span>
                <li className="liDerecha"><Link to="/carrito"><img src={carritopng} alt="" className="carritoImg" /></Link></li>
                <li className="liDerecha"><Link to="/login"><img src={loginpng}alt="" className="loginImg" /></Link></li>
            </div>
        
        

        </ul>
        </div>
    )
}
