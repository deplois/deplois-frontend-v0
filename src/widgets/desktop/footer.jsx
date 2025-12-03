import "../../styles/desktop.css";
import FullLogoBlue from "../../assets/deplois_full_logo_blue.svg";

export default function FooterDesktop({}) {
  return (
    <div className="footer-wrapper">
      <div className="footer-top-box">
        <img src={FullLogoBlue} className="footer-logo" />
        <div className="footer-menu-wrapper">
          <div className="footer-menu-first-wrapper">
            <div className="footer-menu-font-wrapper">네트워크</div>
            <div className="footer-menu-font-wrapper">클라우드</div>
          </div>
          <div className="footer-menu-second-wrapper">
            <div className="footer-menu-font-wrapper">공지사항</div>
            <div className="footer-menu-font-wrapper">고객센터</div>
            <div className="footer-menu-font-wrapper">커뮤니티</div>
          </div>
          <div className="footer-menu-third-wrapper">
            <div className="footer-menu-font-wrapper">회사소개</div>
            <div className="footer-menu-font-wrapper">뉴스</div>
            <div className="footer-menu-font-wrapper">블로그</div>
            <div className="footer-menu-font-wrapper">채용</div>
          </div>
          <div className="footer-menu-fourth-wrapper">
            <div className="footer-menu-font-wrapper">서비스 이용약관</div>
            <div className="footer-menu-font-wrapper">개인정보 처리방침</div>
          </div>
        </div>
      </div>
      <div style={{ height: "28px" }}></div>
      <div className="footer-bottom-box">
        <div className="footer-menu-font-wrapper">
          (주) 디플로이즈 <br />
          사업자 등록번호: 012-34-5678 | 통신판매업 신고번호:
          1234-서울강남-56789 [사업자정보확인] <br />
          주소: 경기도 안산시 단원구 사세충열로 94 한국디지털미디어고등학교
          <br />
          고객센터: 010-1234-5678 | support@deplo.is <br />
          서비스 도메인: https://deplo.is
        </div>
        <div className="footer-menu-font-wrapper">
          Copyright ⓒ 2026 deplois All rights reserved.
        </div>
      </div>
    </div>
  );
}
