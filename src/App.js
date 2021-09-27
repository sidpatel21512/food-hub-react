import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import NavBar from './Components/NavBar';
import Order from './Components/Order';
import SharedStateContextProvider from './contexts/SharedStateContext';


function App() {
  return (
    <BrowserRouter>
      <div>
        <SharedStateContextProvider>
          <NavBar />
          Welcome to Food Hub
          <Route path="/order" component={Order} />
        </SharedStateContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
