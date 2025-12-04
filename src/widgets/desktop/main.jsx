import console from "../../assets/connect-icon/console.svg";
import kakaotalk from "../../assets/connect-icon/kakaotalk.svg";
import discord from "../../assets/connect-icon/discord.svg";
import lunalogo from "../../assets/applicant-logo/luna.svg";
import singlelogo from "../../assets/applicant-logo/single.svg";
import rightarrow from "../../assets/right-arrow.svg";

export default function MainDesktop({}) {
  return (
    <div className="main-wrapper">
      <div className="main-background-picture">
        <div className="main-guide-wrapper">
          <div className="main-top-guide-wrapper">
            <div className="main-top-guide-purple">루나</div>
            <div className="main-top-guide-black">가&nbsp;</div>
            <div className="main-top-guide-blue">디플로이즈</div>
            <div className="main-top-guide-black">로 새롭게 출발합니다.</div>
          </div>
          <div className="main-bottom-guide">
            고객을 최우선으로 생각하는 서비스가 되도록 최선을 다하겠습니다.
          </div>
        </div>
        <div className="main-contact-wrapper">
          <div className="main-console-wrapper">
            <img src={console} className="main-contact-icon" />
            <div className="main-console-text">콘솔</div>
          </div>
          <div className="main-kakaotalk-wrapper">
            <img src={kakaotalk} className="main-contact-icon" />
            <div className="main-kakaotalk-text">문의하기</div>
          </div>
          <div className="main-discord-wrapper">
            <img src={discord} className="main-contact-icon" />
            <div className="main-discord-text">공식 디스코드</div>
          </div>
        </div>
      </div>
      <div className="main-applicant-wrapper">
        <div className="main-applicant-luna-wrapper">
          <img src={lunalogo} className="main-applicant-logo" />
          <div className="main-applicant-luna-right-wrapper">
            <div className="main-applicant-luna-right-top-wrapper">
              <div className="main-applicant-title">루나</div>
              <div className="main-applicant-desc">
                DDoS 방어, 네트워크 서비스 제공
              </div>
            </div>
            <div className="main-applicant-luna-right-bottom-wrapper">
              <div className="main-applicant-luna-right-bottom-text">
                바로가기
              </div>
              <img
                src={rightarrow}
                className="main-applicant-luna-right-bottom-arrow"
              />
            </div>
          </div>
        </div>
        <div className="main-applicant-luna-wrapper">
          <img src={singlelogo} className="main-applicant-logo" />
          <div className="main-applicant-luna-right-wrapper">
            <div className="main-applicant-luna-right-top-wrapper">
              <div className="main-applicant-title">싱글스레드</div>
              <div className="main-applicant-desc">클라우드 서비스 제공</div>
            </div>
            <div className="main-applicant-luna-right-bottom-wrapper">
              <div className="main-applicant-luna-right-bottom-text">
                바로가기
              </div>
              <img
                src={rightarrow}
                className="main-applicant-luna-right-bottom-arrow"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="main-scrollblank-wrapper"></div>
    </div>
  );
}
