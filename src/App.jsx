import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Service from "./components/Service";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Header />
      <Hero  />
      <About />
      <Skills />
      <Experience />
      <Service />
      <Contact />
      <CustomCursor />
     <Toaster position="top-right" reverseOrder={false} />

    </>
  )
}



