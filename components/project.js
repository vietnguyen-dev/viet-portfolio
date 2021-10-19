import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from "styled-components";

const LinksDiv = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 5%;
`

const PageLink = styled.div`
    margin: 5%;
    text-align: right;
`
const Icons = styled.div`
    display: flex;
`

const IconWrapper = styled.div`
    margin: 5%;
    border-radius: 15%;
    height: 32px;
    width: 32px;
`;

const MainImgWrapper = styled.div`
    margin-top: 3%;
`

export default function Project(props) {
    return (
        <>
            <MainImgWrapper>
                <Image 
                    src={props.img}
                    height={props.height}
                    width={props.width}
                    alt={props.description}
                />
            </MainImgWrapper>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <LinksDiv>
                <Icons>
                    <IconWrapper>
                        <a href={props.github}>
                            <Image 
                                src='/images/github.png'
                                width={32}
                                height={32}
                                alt='link to live site'
                            />
                        </a>
                    </IconWrapper>
                    <IconWrapper>
                        <a href={props.live}>
                            <Image 
                                src='/images/link.png'
                                width={34}
                                height={34}
                                alt='link to live site'
                            />
                        </a>
                    </IconWrapper>
                </Icons>
                <PageLink>
                    <Link href={props.page}><a>LEARN MORE</a></Link>
                </PageLink>
            </LinksDiv>
        </>
    )
}