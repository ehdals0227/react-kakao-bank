import React from "react";
import styled from "styled-components";
import { gray, white } from "../util/color";
import Slider from "react-slick";

const SectionContainer = styled.section`
  height: 1062px;
  background-color: ${white};
  .section-wrap {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .section-wrap > img {
    width: 473px;
    margin-right: 27px;
  }
  .slick-slider {
    width: 660px;
    height: 475px;
    margin-top: 60px;
  }
  .slick-slider .slick-track {
    display: flex;
    align-items: center;
  }
  .slick-slider .slick-list {
    top: 50%;
    transform: translateY(-50%);
  }
  .slick-slider .slick-center {
    position: relative;
    z-index: 100;
  }
  .slick-slider .slick-center img {
    width: 280px !important;
    margin-left: -30px;
    transition: width 0.1s;
  }
`;

const ContentWrap = styled.div`
  text-align: center;
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
  .friends-card-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 258px;
    height: 56px;
    font-size: 16px;
    background-color: ${gray[4]};
    border-radius: 10px;
    text-decoration: none;
    margin: 30px auto 0;
  }
  .friends-card-link:hover {
    text-decoration: underline;
  }
  .friends-card-link img {
    width: 6px;
    height: 9px;
    margin-left: 8px;
    margin-bottom: 2px;
  }
`;

const PrevArrow = styled.button`
  width: 38px;
  height: 72px;
  margin-right: 462px;
  right: 50%;
  left: auto;
  :before {
    content: url("/images/img-left.png");
  }
`;

const NextArrow = styled.button`
  width: 38px;
  height: 72px;
  margin-left: 462px;
  left: 50%;
  :before {
    content: url("/images/img-right.png");
  }
`;

const SectionEight = () => {
  return (
    <SectionContainer>
      <div className="section-wrap">
        <div className="content">
          <ContentWrap>
            <h3>
              프렌즈 체크카드,
              <br />
              내가 고르는 선택의 즐거움
            </h3>
            <p>
              프렌즈 디자인부터 멋스러운 블랙 컬러 카드까지 원하는 디자인과
              기능을 선택할 수 있습니다.
            </p>
            <a
              href="https://kakaobank.com/products/checkcard"
              className="friends-card-link"
            >
              카카오뱅크 프렌즈 체크카드
              <img src="/images/home_arr.png" alt=""></img>
            </a>
            <Slider
              centerMode={true}
              centerPadding={0}
              infinite={true}
              speed={500}
              slidesToShow={3}
              slidesToScroll={1}
              initialSlide={2}
              prevArrow={<PrevArrow />}
              nextArrow={<NextArrow />}
            >
              <img
                src="/images/card-1.png"
                alt="믿음직스러운 사자, 라이언 체크카드"
              />
              <img
                src="/images/card-2.png"
                alt="애교만점 복숭아, 어피치 체크카드"
              />
              <img
                src="/images/card-3.png"
                alt="토끼 옷을 입은, 무지 체크카드"
              />
              <img
                src="/images/card-4.png"
                alt="작은 악어를 닮은, 콘 체크카드"
              />
              <img
                src="/images/card-5.png"
                alt="캐릭터 없이 시크한, 블랙 체크카드"
              />
            </Slider>
          </ContentWrap>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SectionEight;
