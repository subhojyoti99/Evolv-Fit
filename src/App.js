import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { Stocks } from './component/Stocks';
import Home from './component/Home';


function App() {
  return (
      <>
<BrowserRouter>
<Home/>
<Stocks/>
</BrowserRouter>
</>
  );
}

export default App;




