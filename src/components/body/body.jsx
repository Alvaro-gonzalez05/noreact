import './body.css';
import gift from "../../multimedia/El-sito-logo-unscreen.gif";
import burbujaCafeteria from "../../multimedia/burbuja cafeteria.png";
import burbujaRestobar from "../../multimedia/Burbuja restobar.png";
import burbujaSobrenosotros from "../../multimedia/burbuja sobre nosotros.png";
export default function Body(){
    return(
        <div>
            <div class="logogif">  
            <img src={gift} alt="" class="gif"/>
        </div>
       <div class="burbujas"> 

            <div className="divBurbujaTexto">
                <img src={burbujaCafeteria} alt=""class="circulo1"/>
                <p className="textoBurbuja1">Alva</p>
            </div>
            <div>
                <img src={burbujaRestobar} alt=""class="circulo2"/>
                <p className="textoBurbuja2"></p>
            </div>
            <div>
                <img src={burbujaSobrenosotros} alt=""class="circulo3"/>
                <p className="textoBurbuja3"></p>
            </div>
            
        </div>
        </div>
    )
}