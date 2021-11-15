import Head from "next/head";
import Footer from "./footer";
import styled from "styled-components";

const Mainsection = styled.main`
    margin-top: 15%;
    margin-bottom: 15%;

    @media only screen and (min-width: 1000px){
      margin-top: 10%;
      margin-bottom: 10%;
    }
`

const name = 'Viet Nguyen';
export const siteTitle = "Viet Nguyen | Front End Developer";

export default function Layout({children}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/idea-16.ico" />
        <meta
          name="description"
          content="Viet Nguyen | Front End Developer Portfolio | Next.js React Redux"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Mainsection>{children}</Mainsection>
      <Footer />
    </>
  );
}
