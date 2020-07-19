import React from "react";
import styled from "styled-components";
import { gray, black } from "../util/color";

const SectionContainer = styled.section`
  padding: 160px 0;
`;

const ContentWrap = styled.div`
  text-align: center;
  h3 {
    font-size: 40px;
    line-height: 1.25em;
  }
  .tech-flow {
    width: 1020px;
    margin: 0 auto;
  }
  .tech-flow:before {
    content: "";
    display: inline-block;
    width: 100px;
    height: 2px;
    background-color: ${black};
    margin: 50px auto 140px;
  }
  .tech-flow > img {
    width: 100%;
  }
  .tech-flow .text-box {
    display: flex;
  }
  .tech-flow .text-box li {
    width: 25%;
  }
  .tech-flow .text-box li h4 {
    margin: 45px 0 17px;
    font-size: 18px;
  }
  .tech-flow .text-box li p {
    font-size: 14px;
    line-height: 24px;
    color: ${gray[1]};
  }
`;

const SectionNine = () => {
  return (
    <SectionContainer>
      <div className="section-wrap">
        <div className="content">
          <ContentWrap>
            <h3>
              IT 기술로 카카오뱅크를
              <br />
              만들어 갑니다.
            </h3>
            <div className="tech-flow">
              <img src="/images/home_it.png" alt="" />
              <ul className="text-box">
                <li>
                  <h4>간결하고, 유려하게</h4>
                  <p>
                    작은 모바일 화면에 적합하도록
                    <br />
                    복잡함을 덜어낸 유려하고
                    <br />
                    친화적인 UX
                  </p>
                </li>
                <li>
                  <h4>간편한 인증, 철저한 보안</h4>
                  <p>
                    지문, 비밀번호로 간편한 인증
                    <br />
                    IT 기술의 강력한 보안 검증과
                    <br />
                    데이터 암호화
                  </p>
                </li>
                <li></li>
                <li>
                  <h4>Mobile First, One App</h4>
                  <p>
                    모바일에서 뱅킹이 더 쉽고 편리하게
                    <br />
                    여러 앱을 설치할 필요 없이
                    <br />
                    하나의 앱으로
                  </p>
                </li>
              </ul>
            </div>
          </ContentWrap>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SectionNine;
