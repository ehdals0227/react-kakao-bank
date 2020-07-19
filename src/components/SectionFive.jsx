import React from "react";
import styled from "styled-components";
import { gray, white } from "../util/color";

const SectionContainer = styled.section`
  height: 650px;
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
    width: 492px;
  }
`;

const ContentWrap = styled.div`
  text-align: left;
  margin: 0 100px;
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
  .week-26-saving-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 258px;
    height: 56px;
    font-size: 16px;
    background-color: ${gray[4]};
    border-radius: 10px;
    text-decoration: none;
    margin-top: 30px;
  }
  .week-26-saving-link:hover {
    text-decoration: underline;
  }
  .week-26-saving-link img {
    width: 6px;
    height: 9px;
    margin-left: 8px;
  }
`;

const SectionFive = () => {
  return (
    <SectionContainer>
      <div className="section-wrap">
        <div className="content">
          <ContentWrap>
            <h3>
              함께 도전해서
              <br />
              재미있는 26주적금
            </h3>
            <p>
              26주동안 변화하는 재미에 빠져있는 사이
              <br />
              어느덧 만기 달성 경험을 맛보게 됩니다.
              <br />
            </p>
            <a
              href="https://kakaobank.com/products/savings"
              className="week-26-saving-link"
            >
              26주적금
              <img src="/images/home_arr.png" alt=""></img>
            </a>
          </ContentWrap>
        </div>
        <img src="/images/main-26weeks.png" alt="" />
      </div>
    </SectionContainer>
  );
};

export default SectionFive;
