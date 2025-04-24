import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import AboutMe from "./sections/aboutme/AboutMe";
import Hero from "./sections/hero/Hero2";
import Projects from "./sections/myprojects/Projects";
import { Technologies } from "./sections/technologies/Technologies";



const Home = () => {
  return (
    <>
      <NavBar />

      <div id="hero">
        <Hero />
      </div>

      <div id="aboutme">
        <AboutMe />
      </div>

      <div id="technologies">
        <Technologies />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <Footer />
    </>
  )
}

export default Home;
