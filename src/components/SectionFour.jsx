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
  .team-book-link {
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
  .team-book-link:hover {
    text-decoration: underline;
  }
  .team-book-link img {
    width: 6px;
    height: 9px;
    margin-left: 8px;
    margin-bottom: 2px;
  }
`;

const SectionFour = () => {
  return (
    <SectionContainer>
      <div className="section-wrap">
        <img src="/images/main-moim.png" alt="" />
        <div className="content">
          <ContentWrap>
            <h3>
              함께 쓰고 같이 보는
              <br />
              모임통장
            </h3>
            <p>
              카카오톡 친구를 바로 모임통장으로 초대하고
              <br />
              친구들과 함께 잔액과 입출금 현황을 확인할 수 있습니다.
              <br />
              재미있는 메시지 카드로 회비 입금 요청도 해보세요.
            </p>
            <a
              href="https://kakaobank.com/products/moim"
              className="team-book-link"
            >
              모임통장
              <img src="/images/home_arr.png" alt=""></img>
            </a>
          </ContentWrap>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SectionFour;
