import './cafeteria.css';
import{cafe1} from './img/cafe.png';

export default function Cafeteria(){
    return(
        <div className='contenedor' id='contenedor'>
            <div>
                <div className="img1"></div>
                <div className="informacion">
                    <p>producto 1</p>
                    <p className='precio'>$1100</p>
                    <button>Comprar</button>
                </div>
            </div>
            <div className="contenedor" id='contenedor'>
                <div className="img2"></div>
                <div className="informacion">
                    <p>producto 2</p>
                    <p className="precio"></p>
                    <button>Comprar</button>
                </div>
            </div>
            <div className="contenedor" id='contenedor'>
                <div className="img3"></div>
                <div className="informacion">
                    <p>producto 3</p>
                    <p className="precio"></p>
                    <button>Comprar</button>
                </div>
            </div>
            <div className="contenedor" id='contenedor'>
                <div className="img4"></div>
                <div className="informacion">
                    <p>producto 4</p>
                    <p className="precio"></p>
                    <button>Comprar</button>
                </div>
            </div>
            <div className="contenedor" id='contenedor'>
                <div className="img5"></div>
                <div className="informacion">
                    <p>producto 5</p>
                    <p className="precio"></p>
                    <button>Comprar</button>
                </div>
            </div>
            <div className="contenedor6" id='contenedor'>
                <div className="img"></div>
                <div className="informacion">
                    <p>producto 6</p>
                    <p className="precio"></p>
                    <button>Comprar</button>
                </div>
            </div>
            
        </div>
    )
}