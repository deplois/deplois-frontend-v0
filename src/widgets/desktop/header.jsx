import "../../styles/desktop.css";
import FullLogoWhite from "../../assets/deplois_full_logo_white.svg";
import KoreaFlag from "../../assets/flag/korea.svg";
import UsaFlag from "../../assets/flag/usa.svg";
import PopupButton from "../../assets/language_switch_button.svg";
import { useState } from "react";

export default function HeaderDesktop({}) {
  const [lang, setLang] = useState("ko");

  const toggleLang = () => {
    setLang((prev) => (prev === "ko" ? "en" : "ko"));
  };
  return (
    <div className="header-wrapper">
      <img className="header-logo" src={FullLogoWhite} />
      <div className="header-right-wrapper">
        <div className="header-label">소개</div>
        <div className="header-label">네트워크</div>
        <div className="header-label">클라우드</div>
        <div className="header-label">고객사 소개</div>
        <div className="header-label">채용공고</div>
        <div className="header-label">공지사항</div>
        <div className="header-country-wrapper">
          {lang === "ko" ? <img src={KoreaFlag} /> : <img src={UsaFlag} />}
          <div className="header-country-name">
            {lang === "ko" ? "한국어" : "English"}
          </div>
          <img
            src={PopupButton}
            className="header-popup-button"
            onClick={toggleLang}
          />
        </div>
      </div>
    </div>
  );
}
