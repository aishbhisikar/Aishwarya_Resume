import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { BrowserRouter} from 'react-router-dom';

import Sidebar from './components/Sidebar'
import About from './components/About'
import Skills from './components/Skills'
import Contact from "./components/Contact";
import Academics from "./components/Academics";
import Work from "./components/Work";



function App() {
  return (
    <>
      
      <BrowserRouter>
      <Sidebar/>
      <About/>
      <Skills/>
      <Academics/>
      <Work/>
      <Contact/>
      </BrowserRouter> 
    </>
  );
}

export default App;
