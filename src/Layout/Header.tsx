/* eslint-disable jsx-a11y/anchor-is-valid */
import { useLocation } from "react-router-dom";
import "./header.scss";
interface LogoProps {
  showAnimation: boolean;
}

export const Header = ({ showAnimation }: LogoProps) => {
  const router = useLocation();

  console.log(router.pathname);
  return (
    <div className="header heading">
      <div className="menu">
        <a className={(router.pathname = "/" ? "active menuBar" : "menuBar")}>
          Home
        </a>

        <a
          className={
            (router.pathname = "/music" ? "active menuBar" : "menuBar")
          }
        >
          Music
        </a>

        <a
          className={
            (router.pathname = "/store" ? "active menuBar " : "menuBar")
          }
        >
          Store
        </a>

        <a
          className={
            (router.pathname = "/333community" ? "active menuBar" : "menuBar")
          }
        >
          333 Community
        </a>

        <a
          className={
            (router.pathname = "/Submissions" ? "active menuBar" : "menuBar")
          }
        >
          Submissions
        </a>

        <a
          className={(router.pathname = "/faq" ? "active menuBar" : "menuBar")}
        >
          FAQ
        </a>
      </div>
      <div className={showAnimation ? `bg bgAnimate` : `bg`}>
        <div className="logo-centered">
          <img
            className={showAnimation ? `logo logoAnimate` : `logo`}
            src="/images/Artboard.png"
            alt="artboard"
            width="150px"
            height="138px"
          />
        </div>
      </div>
      <div>
        <h1>3RD HARMONIC RECORDS</h1>
      </div>
    </div>
  );
};
