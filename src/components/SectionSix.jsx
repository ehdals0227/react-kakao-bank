import React from "react";
import styled from "styled-components";
import { gray, white } from "../util/color";

const SectionContainer = styled.section`
  height: 750px;
  background: url("/images/home_map.png") no-repeat -12% center;
  background-color: ${white};
  .section-wrap {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .section-wrap > img {
    width: 408px;
  }
`;

const ContentWrap = styled.div`
  text-align: left;
  margin: 0 20px;
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
  .overseas-remittance-link {
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
  .overseas-remittance-link:hover {
    text-decoration: underline;
  }
  .overseas-remittance-link img {
    width: 6px;
    height: 9px;
    margin-left: 8px;
    margin-bottom: 2px;
  }
`;

const SectionSix = () => {
  return (
    <SectionContainer>
      <div className="section-wrap">
        <img src="/images/main-foreignRemittance.png" alt="" />
        <div className="content">
          <ContentWrap>
            <h3>
              해외계좌송금과
              <br />
              WU빠른해외송금을
              <br />더 쉽고, 저렴하게
            </h3>
            <p>
              해외계좌송금이 가능한 22개국을 포함하여
              <br />
              전세계 200여개국으로
              <br />
              WU빠른해외송금이 가능합니다.
            </p>
            <a
              href="https://kakaobank.com/products/foreignRemittanceSend"
              className="overseas-remittance-link"
            >
              해외송금
              <img src="/images/home_arr.png" alt=""></img>
            </a>
          </ContentWrap>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SectionSix;
