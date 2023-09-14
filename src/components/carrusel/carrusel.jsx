import './carrusel.css';
import frutillas from "../../multimedia/frutillas.jpg";
import cafe from "../../multimedia/cafe.jpg";
import torta from "../../multimedia/torta.jpg";
import cappuccino from "../../multimedia/cappuccino.jpg"




export default function Carrusel(){
    return(
        <div className='body-carrusel'>
            <div className="slider-box">
                <ul>
                    <li>
                        <img src={frutillas} alt="" />
                        <div className="texto1">
                            <h2>Img1</h2>
                        </div>
                    </li>
                    <li>
                        <img src={cafe} alt="" />
                        <div className="texto2">
                            <h2>img2</h2>
                        </div>
                    </li>
                    <li>
                        <img src={torta} alt="" />
                        <div className="texto3">
                            <h2>img3</h2>
                        </div>
                    </li>
                    <li>
                        <img src={cappuccino} alt="" />
                        <div className="texto4">
                            <h2>img4</h2>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}