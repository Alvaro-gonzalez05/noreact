import './App.css';
import Body from './components/body/body';
import Header from './components/hedear/header';
import Login from './components/login/login';
import Register from './components/register/register';
import Carrito from './components/carrito/carrito';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Products from './components/products/products';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<>
          <Header />
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
          <Header />
          <Carrito/>
          </>
        } />
        <Route path='/cafeteria' element={<>
          <Header />
          <Products/>
          </>
        } />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
