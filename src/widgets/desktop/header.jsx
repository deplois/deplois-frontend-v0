import "../../styles/desktop.css";
import FullLogoWhite from "../../assets/deplois_full_logo_white.svg";

export default function HeaderDesktop({}) {
  return (
    <div className="header-wrapper">
      <img className="header-logo" src={FullLogoWhite} />
      <div className="header-right-wrapper"></div>
    </div>
  );
}
