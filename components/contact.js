import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const ContactInfo = styled.table`
  border: none;
  margin-top: 3%;
`

export default function Contact() {
    return (
      <div id="contact">
        <h3>CONTACT</h3>
        <p>Let's work together! </p>
        <ContactInfo>
          <tbody>
            <tr>
              <td>
                <Image
                  src="/images/email.png"
                  width={32}
                  height={32}
                  alt="email viet nguye at vietnguyent22@gmail.com"
                />
              </td>
              <td>
                <p>
                  {" "}
                  <a href="mailto:vietnguyent22@gmail.com">
                    vietnguyent22@gmail.com
                  </a>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <Image
                  src="/images/linkedin.png"
                  width={32}
                  height={32}
                  alt="find viet nguyen on linkedin"
                />
              </td>
              <td>
                <a href="https://www.linkedin.com/in/viet-nguyen-b877931b5/">
                  {" "}
                  Viet Nguyen{" "}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <Image
                  src="/images/github.png"
                  width={32}
                  height={32}
                  alt="find viet nguyen on linkedin"
                />
              </td>
              <td>
                <a href="https://github.com/vietnguyen-dev"> vietnguyen-dev </a>
              </td>
            </tr>
            <tr>
              <td>
                <Image
                  src="/images/resume.png"
                  width={32}
                  height={32}
                  alt="find viet nguyen on linkedin"
                />
              </td>
              <td>
                <a href="https://www.linkedin.com/in/viet-nguyen-b877931b5/">
                  Download Resume
                </a>
              </td>
            </tr>
          </tbody>
        </ContactInfo>
      </div>
    );
}
