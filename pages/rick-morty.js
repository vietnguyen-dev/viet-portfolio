import React from 'react'
import Layout from '../components/layout'
import ContactInfo from '../components/contact'
import Footer from '../components/footer';
import Link from 'next/link';
import Image from 'next/image';
import styled from "styled-components";

const MainPart = styled.section`
  margin: 10% 10% 15% 10%;
`
const ProjectHead = styled.h1`
    text-align: left;
    font-size: 4vh;
    font-weight: bold;
    letter-spacing: .5vh;
`
const NewNav = styled.div`
    display: grid;
    grid-template-columns: 90% 10%;
    margin: 7%;
`

const Logo = styled.h4`
  font-size: 3.5vh;
  filter: drop-shadow(3px 3px 0px #f27127);
`;

const SkillList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15%;
    padding: 5% 1% 5% 5%;
`

const SkillMarker = styled.li`
  ::marker {
    color: #f27127;
  }
`;

const IconWrapper = styled.div`
    margin: 5%;
    border-radius: 15%;
    height: 32px;
    width: 32px;
`;

const Icons = styled.div`
    display: flex;
`

const MainImgWrapper = styled.div`
    margin-top: 3%;
`

export default function Rickmorty() {
    return (
        <>
        <NewNav>
            <Logo>V</Logo>
            <Link href='/'>
                <a>
                    <Image 
                        src='/images/back.png'
                        width={32}
                        height={32}
                        alt='go back to viet nguyen homepage'
                    />
                </a>
            </Link>
        </NewNav>
        <Layout>
            <MainPart>
                <ProjectHead>Rick and Morty Database</ProjectHead>
                <p>A database of Characters, Locations, and Episodes from the hit TV Show Rick and Morty. Built using React and the Rick and Morty API.</p>
                <p>This is a personal project of mine that helped me learn Asynchonus JavaScript and Redux.</p>
                <SkillList>
                    <div>
                        <ul>
                        <SkillMarker>React / React-Router</SkillMarker>
                        <SkillMarker>Redux</SkillMarker>
                        <SkillMarker>Asynchronus JavaScript</SkillMarker>
                        </ul>
                    </div>
                    <div>
                        <ul>
                        <SkillMarker>NPM</SkillMarker>
                        <SkillMarker>Netlify</SkillMarker>
                        </ul>
                    </div>
                </SkillList>
                <Icons>
                    <IconWrapper>
                        <a href='https://github.com/vietnguyen-dev/rick-and-morty-api'>
                            <Image 
                                src='/images/github.png'
                                width={32}
                                height={32}
                                alt='link to live site'
                            />
                        </a>
                    </IconWrapper>
                    <IconWrapper>
                        <a href='https://upbeat-hawking-1cb3cf.netlify.app/'>
                            <Image 
                                src='/images/link.png'
                                width={34}
                                height={34}
                                alt='link to live site'
                            />
                        </a>
                    </IconWrapper>
                </Icons>
            </MainPart>
            <MainPart>
                <h3>GOAL</h3>
                <p>Create an App that lets users learn about various aspects of the Rick and Morty Universe; including: characters, locations, and episodes.</p>
                <MainImgWrapper>
                    <Image
                        src='/images/rick-morty.png'
                        width={940}
                        height={570}
                        alt='Rick and Morty database made with React Redux and Netlify'
                    />
                </MainImgWrapper>
            </MainPart>
            <MainPart>
                <h3>Features</h3>
                <p>This app consists of three features. A feed of items that are fetched from an API, pagination between pages of API data, and a search form. </p>
                <p>The pagination of pages in the API data was very tricky to implement</p>
            </MainPart>
            <MainPart>
                <h3>What I Learned</h3>
                <p>I used to think working with API’s and Redux were super complicated but once I tried it for myself it was a lot simpler than I believed!</p>
                <p>I also learned how to properly implement the useRef hook in cases other than inputs. </p>
                <p>As this is my first Mid-sized React Project, I learned a lot about how a component tree should be structured / how to make components reusable.
                Originally my grid of items only worked with Characters data. I spent a whole day refactoring everything so that it works with all data types.</p>
            </MainPart>
            <MainPart>
                <ContactInfo />
            </MainPart>
            <MainPart>
                <Footer />
            </MainPart>
        </Layout>
        </>
    )
}
