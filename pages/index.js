import { useEffect } from "react";
import Layout, { siteTitle } from "../components/layout";
import Nav from "../components/nav";
import Landing from "../components/landing";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import About from "../components/about";
import Footer from "../components/footer";


export default function Home() {
  useEffect(() =>{
    console.log("Slow Down there buddy 🕵️")
  }, [])

  return (
    <>
      <Nav />
      <Layout>
       
          <Landing />
       
      
          <Skills />
        
          <Projects />
       
          <Contact />
      
          <About />
        
          <Footer />
        
      </Layout>
    </>
  );
}