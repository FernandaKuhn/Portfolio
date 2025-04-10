import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import AboutMe from "./sections/aboutme/AboutMe";
import Hero from "./sections/hero/Hero";
import { Projects } from "./sections/myprojects/Projects";
import { Technologies } from "./sections/technologies/Technologies";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe/>
      <Technologies/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default Home;
