import './header.css';
import carritopng from '../../multimedia/carrito.png';
import loginpng from "../../multimedia/Login.png";
import gift from "../../multimedia/El-sito-logo-unscreen.gif";
import burbujaCafeteria from "../../multimedia/burbuja cafeteria.png";
import burbujaRestobar from "../../multimedia/Burbuja restobar.png";
import burbujaSobrenosotros from "../../multimedia/burbuja sobre nosotros.png";
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
        
        <div class="logogif">  
            <img src={gift} alt="" class="gif"/>
        </div>
       <div class="burbujas"> 
    
            <img src={burbujaCafeteria} alt=""class="circulo1"/>
            <img src={burbujaRestobar} alt=""class="circulo2"/>
            <img src={burbujaSobrenosotros} alt=""class="circulo3"/>
            
        </div>
        <div class="bfondo">
            <div class="burbuja"></div>
        </div>
        </div>
    )
}