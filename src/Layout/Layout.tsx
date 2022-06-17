import { useState } from "react";
import "./layout.scss";
import { ContactUsButton } from "../home/constactUs";
import { Header } from "./Header";
interface LogoProps {
  children: any;
  showAnimation?: boolean;
}

export const siteTitle = "Next.js Sample Website";

export function Layout({ children, showAnimation = false }: LogoProps) {
  const [show, setShow] = useState(false);
  async function toggleText() {
    setShow(!show);
    console.log(toggleText);
  }
  return (
    <div className="layout outer">
      <div className="container">
        <Header showAnimation={showAnimation} />
        <div className="contactUsBox">
          <div className={show ? `` : `hide`}>
            <div className="innerContactBox">
              <ContactUsButton
                href="mailto: 3rdharmonicrecords@gmail.com?subject=Feedback&body=Message"
                socialNetworkType="email"
                text="3rdharmonicrecords@gmail.com"
              />
              <ContactUsButton
                href="https://www.instagram.com/3rdharmonicrecords"
                socialNetworkType="instagram"
                text="3RD HARMONIC RECORDS"
              />
              <ContactUsButton
                href="https://www.instagram.com/iamhat3trick"
                socialNetworkType="instagram"
                text="HAT3TRICK"
              />
            </div>
          </div>
          <div className="contactUs">
            <h5 onClick={() => toggleText()}>Contact Us</h5>
          </div>
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}
