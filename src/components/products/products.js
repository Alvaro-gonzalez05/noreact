import { useContext } from "react";
import { DataContext } from "../context/DataContext";


const Products = () => {
const{data}= useContext(DataContext);
  return data.map((product)=>{ 
    return(
     <div className="card">
        <img src={product.img} alt="img-product-card"/>
        <h3>{product.Name} </h3>
        <h4>{product.description} </h4>
        <h3>{product.price}$ </h3>
        <button>buy</button>
      </div>
    )
  })
  
}

export default Products;