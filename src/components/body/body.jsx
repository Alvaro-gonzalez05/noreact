import './body.css';
import gift from "../../multimedia/El-sito-logo-unscreen.gif";
import texto from ('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

export default function Body(){
    return(
        <div>
            <div classNames="logogif">  
                <img src={gift} alt="" className="gif"/>
            </div>
            <div className="burbujas">
                <div className="burbuja1-padre">
                    <div className="burbuja1">
                    </div> 
                </div>
                <div className="burbuja2-padre">
                    <div className="burbuja2">
                    </div> 
                </div>
                <div className="burbuja3-padre">
                    <div className="burbuja3">
                    </div> 
                </div>

            </div>
            
        </div>
        
    )
}