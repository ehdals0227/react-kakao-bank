import React from "react";
import styled from "styled-components";
import { white, gray } from "../util/color";

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
    width: 409px;
  }
`;

const ContentWrap = styled.div`
  text-align: left;
  margin: 0 50px;
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
  .saving-link-box {
    display: flex;
    margin-top: 30px;
  }
  .saving-link-box a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 158px;
    height: 56px;
    font-size: 16px;
    background-color: ${gray[4]};
    border-radius: 10px;
    text-decoration: none;
    margin-right: 6px;
  }
  .saving-link-box a:last-child {
    margin-right: 0;
  }
  .saving-link-box a:hover {
    text-decoration: underline;
  }
  .saving-link-box a img {
    width: 6px;
    height: 9px;
    margin-left: 8px;
    margin-bottom: 2px;
  }
  .saving-img {
    margin-top: 60px;
    width: 440px;
  }
`;

const SectionThree = () => {
  return (
    <SectionContainer>
      <div className="section-wrap">
        <div className="content">
          <ContentWrap>
            <h3>
              우대조건 없이
              <br />
              합리적인 예금과 적금
            </h3>
            <p>
              기대했던 금리와 다르게 복잡한 우대조건에 실망한 적이 있었나요?
              <br />
              카카오뱅크의 예금, 적금은 숨겨진 우대조건 없이 누구에게나 편리하고
              합리적입니다.
            </p>
            <div className="saving-link-box">
              <a href="https://kakaobank.com/products/deposit">
                정기예금<img src="/images/home_arr.png" alt=""></img>
              </a>
              <a href="https://kakaobank.com/products/savings">
                자유적금<img src="/images/home_arr.png" alt=""></img>
              </a>
            </div>
            <img
              className="saving-img"
              src="/images/main-savings-money.png"
              alt=""
            />
          </ContentWrap>
        </div>
        <img src="/images/main-savings.png" alt="" />
      </div>
    </SectionContainer>
  );
};

export default SectionThree;
