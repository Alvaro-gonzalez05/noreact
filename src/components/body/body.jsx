import './body.css';
import gift from "../../multimedia/El-sito-logo-unscreen.gif";


export default function Body(){
    return(
        <div>
            <div classNames="logogif">  
                <img src={gift} alt="" className="gif"/>
            </div>
            <div className="burbujas">
                <div className="burbuja1-padre">
                    <h1>Cafeteria</h1>
                    <div className="burbuja1">
                    </div> 
                </div>
                <div className="burbuja2-padre">
                    <h1>Resto-Bar</h1>
                    <div className="burbuja2">
                    </div> 
                </div>
                <div className="burbuja3-padre">
                    <h1>Sobre Nosotros</h1>
                    <div className="burbuja3">
                    </div> 
                </div>

            </div>
            
        </div>
        
    )
}