import './App.css';
import Body from './components/body/body';
import Headernav from './components/hedear/header';
import Login from './components/login/login';
import Register from './components/register/register';
import { useState } from 'react';
import { Header } from './components/carrito/headerCarrito';
import { ProductList } from './components/carrito/productos';
// import Carrito from './components/carrito/carrito';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';



function App() {
  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<>
          <Headernav />
          <Body />
          </>
        } />
        <Route path='/login' element={<>
          
          <Login />
          </>
        } />
        <Route path='/register' element={<>
          
          <Register/>
          </>
        } />
        <Route path='/carrito' element={<>
          
          
          </>
        } />
        <Route path='/cafeteria' element={<>
          <Header 
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
          />
          <ProductList
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}

          />
          
          </>
        } />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
