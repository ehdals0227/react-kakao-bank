import React from "react";
import styled from "styled-components";
import { gray, white } from "../util/color";

const SectionContainer = styled.section`
  height: 750px;
  background-color: ${white};
  margin-bottom: 32px;
  .section-wrap {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .section-wrap > img {
    width: 473px;
    margin-right: 27px;
  }
`;

const ContentWrap = styled.div`
  text-align: left;
  h3 {
    font-size: 40px;
    line-height: 1.25em;
  }
  p {
    color: ${gray[1]};
    font-size: 15px;
    line-height: 1.5em;
    margin-top: 20px;
  }
  .bank-book-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 258px;
    height: 56px;
    font-size: 18px;
    background-color: ${gray[4]};
    border-radius: 10px;
    text-decoration: none;
    margin-top: 30px;
  }
  .bank-book-link:hover {
    text-decoration: underline;
  }
  .bank-book-link img {
    width: 6px;
    height: 9px;
    margin-left: 8px;
    margin-bottom: 2px;
  }
`;

const SectionTwo = () => {
  return (
    <SectionContainer>
      <div className="section-wrap">
        <img src="/images/main-withdrawal.png" alt="" />
        <div className="content">
          <ContentWrap>
            <h3>
              모바일로 더 손쉬운
              <br />
              계좌개설, 간편한 이체
            </h3>
            <p>
              공인인증서, OTP 없이 계좌 개설이 간편합니다.
              <br />
              여러 건의 이체도 몇 번의 터치로 손쉽게 보낼 수 있습니다.
            </p>
            <a
              href="https://kakaobank.com/products/withdrawal"
              className="bank-book-link"
            >
              카카오뱅크 입출금통장
              <img src="/images/home_arr.png" alt=""></img>
            </a>
          </ContentWrap>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SectionTwo;
