import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import NavBar from './Components/NavBar';
import Order from './Components/Order';


function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        Welcome to Food Hub
        <Route path="/order" component={Order} />
      </div>
    </BrowserRouter>
  );
}

export default App;
