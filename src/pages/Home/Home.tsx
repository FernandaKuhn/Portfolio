import NavBar from "../../components/navbar/NavBar";
import AboutMe from "./sections/aboutme/AboutMe";
import Hero from "./sections/hero/Hero";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe/>
    </>
  )
}

export default Home;
