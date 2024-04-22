import './header.css';
import carritopng from '../../multimedia/carrito.png';
import loginpng from "../../multimedia/Login.png";
import {Link} from 'react-router-dom';
export default function Header() {
    return (
        <div className="body_header">
            <ul className="menu">
            <div className="barnav">
                <li><a href="" className="Home_Barnav">Home </a></li>
                <li><a href="" className="Menu_Barnav">Menu</a></li>
                <li><a href="" className="staff_Barnav">Staff Catering</a></li>
            
            </div>    
        
    
            <div className="iconos">
                
                <li className="liDerecha"><Link to="/carrito"><img src={carritopng} alt="" className="carritoImg" /></Link></li>
                <li className="liDerecha"><Link to="/login"><img src={loginpng}alt="" className="loginImg" /></Link></li>
            </div>
        
        

        </ul>
        </div>
    )
}