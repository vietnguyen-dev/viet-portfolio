import Image from "next/image"
import styled from "styled-components";

const LandingDiv = styled.div`
  display: grid;
`;

const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% 6%;
`;

const IconWrapper = styled.div`
    margin: 5%;
    background-color: white;
`;

const ModelDiv = styled.div`
  margin-top: 10%;
  height: 60vh;
  width: 35vh;
  background-color: grey;
`;


export default function Landing() {
    return (
      <LandingDiv>
        <div>
          <h1>Viet Nguyen</h1>
          <h2>Front End Developer</h2>
          <IconDiv>
            <IconWrapper>
              <Image
                src="/images/linkedin.png"
                height={32}
                width={32}
                alt="link to Viet Nguyen LinkedIn Profile"
              />
            </IconWrapper>
            <IconWrapper>
              <Image
                src="/images/resume.png"
                height={32}
                width={32}
                alt="link to Viet Nguyen LinkedIn Profile"
              />
            </IconWrapper>
            <IconWrapper>
              <Image
                src="/images/github.png"
                height={32}
                width={32}
                alt="link to Viet Nguyen LinkedIn Profile"
              />
            </IconWrapper>
          </IconDiv>
        </div>
        <ModelDiv>3D Model hEre</ModelDiv>
      </LandingDiv>
    );
};
