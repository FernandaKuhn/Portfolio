import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/index"
import './styles.css'
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      

      <Home/>
      
      <Footer/>
   </BrowserRouter>
   
  );
}

export default App;
