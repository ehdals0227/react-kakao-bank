import React from "react";
import styled from "styled-components";
import { main, white } from "../util/color";

const SectionContainer = styled.section`
  text-align: center;
  height: 884px;
  background-color: ${white};
  .main-bg {
    position: absolute;
    left: 50%;
    top: 80px;
    transform: translateX(-50%);
    z-index: 1;
    background: url("/images/main-bg2.png") no-repeat center;
    background-size: cover;
    width: 1200px;
    height: 884px;
  }
  .content {
    margin-top: 80px;
    height: 720px;
    background-color: ${main[0]};
  }
`;

const ContentWrap = styled.div`
  position: relative;
  z-index: 2;
  width: 1200px;
  margin: 0 auto;
  padding: 215px 0 0 90px;
  text-align: left;
  h3 {
    font-size: 49px;
    line-height: 1.25em;
  }
  p {
    font-size: 17px;
    line-height: 1.5em;
    margin-top: 20px;
  }
`;

const DownloadLink = styled.ul`
  display: flex;
  margin-top: 80px;
  li {
    display: flex;
    margin: 0 6px;
  }
  li a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 178px;
    height: 56px;
    background-color: ${white};
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    text-decoration: none;
  }
  li a:hover {
    text-decoration: underline;
  }
  li a .sprite-bg {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url("/images/img_kabang_sprite.png") no-repeat;
    background-size: 420px 390px;
    margin-right: 8px;
  }
  li a .google-play-icon {
    background-position: -341px -292px;
  }
  li a .app-store-icon {
    background-position: -371px -292px;
  }
  li a .link-title {
    font-size: 16px;
    font-weight: 700;
  }
`;

const SectionOne = () => {
  return (
    <SectionContainer>
      <div className="section-wrap">
        <div className="main-bg" />
        <div className="content">
          <ContentWrap>
            <h3>
              같지만 다른 은행
              <br />
              카카오뱅크
            </h3>
            <p>
              일상에서 더 쉽게, 더 자주 만나는 은행
              <br />
              카카오뱅크가 한번 더 편리해졌습니다.
            </p>
            <DownloadLink>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.kakaobank.channel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sprite-bg google-play-icon" />
                  <span className="link-title">Google Play</span>
                </a>
              </li>
              <li>
                <a
                  href="https://apps.apple.com/kr/app/id1258016944"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sprite-bg app-store-icon" />
                  <span className="link-title">App Store</span>
                </a>
              </li>
            </DownloadLink>
          </ContentWrap>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SectionOne;
