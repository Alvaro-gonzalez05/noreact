import './header.css';
import carritopng from '../../multimedia/carrito.png';
import loginpng from "../../multimedia/Login.png";

export default function Header() {
    return (
        <div>
            <ul class="menu">
            <div class="barnav">
                <li><a href="" class="Home_Barnav">Home </a></li>
                <li><a href="" class="Menu_Barnav">Menu</a></li>
                <li><a href="" class="staff_Barnav">Staff Catering</a></li>
            
            </div>    
        
    
            <div class="iconos">
                <li class="liDerecha"><a href=""><img src={carritopng} alt="" class="carritoImg" /></a></li>
                <li class="liDerecha"><a href=""> <img src={loginpng}alt="" class="loginImg" /></a></li>
            </div>
        
        

        </ul>
        </div>
    )
}