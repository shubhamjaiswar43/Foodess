import './App.css';
import Main from './Components/Main';
import Order from './Components/Order';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/order" element={<Order/>}/>
      </Routes>
    </Router>
  );
}

export default App;
