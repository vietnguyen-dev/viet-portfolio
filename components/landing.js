import Image from "next/image"
import styled from "styled-components";

const LandingDiv = styled.div`
  display: grid;
`;

const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% 5%;
`;

const IconWrapper = styled.div`
    margin: 5%;
`;

const ModelDiv = styled.div`
  margin-top: 11%;
  height: 60vh;
  width: 80vw;
  background-color: grey;
`;


export default function Landing() {
    return (
      <LandingDiv className='main'>
        <div>
          <h1>Viet Nguyen</h1>
          <h2>Front End Developer</h2>
          <IconDiv>
            <IconWrapper className='icon center'>
              <a href='https://www.linkedin.com/in/viet-nguyen-b877931b5/' target="_blank">
              <Image
                src="/images/linkedin.png"
                height={32}
                width={32}
                alt="link to Viet Nguyen LinkedIn Profile"
              />
              </a>
            </IconWrapper>
            <IconWrapper className='icon center'>
              <a href='https://dtc-wsuv.org/vnguyen19/' target="_blank">
              <Image
                src="/images/resume.png"
                height={32}
                width={32}
                alt="link to Viet Nguyen Resume"
              />
              </a>
            </IconWrapper>
            <IconWrapper className='icon center'>
              <a href='https://github.com/vietnguyen-dev' target="_blank">
              <Image
                src="/images/github.png"
                height={32}
                width={32}
                alt="link to Viet Nguyen LinkedIn Profile"
              />
              </a>
            </IconWrapper>
          </IconDiv>
        </div>
        <ModelDiv>3D Model hEre</ModelDiv>
      </LandingDiv>
    );
};
