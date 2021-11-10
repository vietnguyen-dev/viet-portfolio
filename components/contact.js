import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const ContactInfo = styled.div`
  border: none;
  margin-top: 3%;
`

const LinkedinDiv = styled.div`
  margin-top: 3%;
  display: grid;
  grid-template-columns: 20% 80%;
`

const EmailForm = styled.form`
  border-radius: 10px;
  background-color: #505050;
  padding: 8%;
`;

export default function Contact() {
    return (
      <div id="contact" className="main">
        <h3>CONTACT</h3>
        <p>Let's work together! </p>
        <ContactInfo>
          {/* <a href="https://www.linkedin.com/in/viet-nguyen-b877931b5/"
              className="external"
              target="_blank">
          <LinkedinDiv>
            <Image
              src="/images/linkedin.png"
              width={32}
              height={32}
              alt="find viet nguyen on linkedin"
            />
            <p>
              Message me on LinkedIn!
            </p>
          </LinkedinDiv>
          </a> */}
          <EmailForm>
            <input type="text" />
            <input type="text" />
            <textarea />
            <button type='submit'>SEND</button>
         </EmailForm>
        </ContactInfo>
      </div>
    );
}
