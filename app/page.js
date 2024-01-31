import Image from "next/image";
import About from "./about/page";
import Contact from "./contact/page";
import Header from "./header/page";
import Footer from "./footer/page";
import Projects from "./project/page";
import Front from "./Front/page";

export default function Home() {
  return (
   
    <>
    <Header/>
    <Front/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  );
}
