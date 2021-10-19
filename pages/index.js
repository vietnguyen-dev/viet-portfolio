import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
// import Link from "next/link"
import image from "next/image";
import Nav from "../components/nav";
import Landing from "../components/landing";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import About from "../components/about";
import Footer from "../components/footer";
import styled from "styled-components";

const MainPart = styled.section`
  margin: 10% 15% 15% 10%;
`


export default function Home() {
  return (
    <>
      <Nav />
      <Layout>
        <MainPart>
          <Landing />
        </MainPart>
        <MainPart>
          <Skills />
        </MainPart>
        <MainPart>
          <Projects />
        </MainPart>
        <MainPart>
          <Contact />
        </MainPart>
        <MainPart>
          <About />
        </MainPart>
        <MainPart>
          <Footer />
        </MainPart>
      </Layout>
    </>
  );
}