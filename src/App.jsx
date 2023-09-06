import './App.css';
import Body from './components/body/body';
import Header from './components/hedear/header';
import Login from './components/login/login';
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
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
