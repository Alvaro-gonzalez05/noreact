import './App.css';
import Body from './components/body/body';
import Header from './components/hedear/header';
import Login from './components/login/login';
import Register from './components/register/register';
import Cafeteria from './components/cafeteria/cafeteria';
import Carrusel from './components/carrusel/carrusel';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/home' element={<>
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
        <Route path='/cafeteria' element={<>
          <Header />
          <Carrusel />
          <Cafeteria/>
          </>
        } />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
