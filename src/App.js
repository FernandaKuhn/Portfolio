import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/index"
import './styles.css'
import { BrowserRouter } from "react-router-dom";
import Contato from "./pages/Contato";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
    
      <Home/>

      <Contato/>
      
      <Footer/>
   </BrowserRouter>
   
  );
}

export default App;
