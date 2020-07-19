import React, { useState, useEffect } from "react";
import classNames from "classnames";
import styled from "styled-components";
import { white } from "../util/color";

const SectionContainer = styled.section`
  position: relative;
  height: 930px;
  background-color: #559cde;
  padding-top: 160px;
  .section-wrap {
    position: relative;
    height: 100%;
    z-index: 2;
  }
  .section-wrap > img {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 429px;
  }
  .content {
    position: relative;
    text-align: center;
  }
  .content h3 {
    font-size: 40px;
    color: ${white};
  }
  .content p {
    font-size: 15px;
    color: ${white};
    margin: 30px 0;
    opacity: 0.6;
  }
  .craditline-list {
    display: flex;
    justify-content: center;
  }
  .craditline-list li {
    margin-right: 6px;
  }
  .craditline-list li:last-child {
    margin-right: 0;
  }
  .craditline-list li a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 166px;
    height: 52px;
    border-radius: 10px;
    color: ${white};
    font-weight: 700;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.09);
  }
  .craditline-list li a:hover {
    text-decoration: underline;
  }
  .craditline-list li a img {
    width: 6px;
    margin-left: 8px;
  }
  .moon-box {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 112px;
    height: 112px;
    transform: translate(-50%, -50%);
    margin-left: 505px;
    margin-top: 20px;
    overflow: hidden;
    border-radius: 50%;
  }
  .moon-box .moon {
    position: absolute;
    left: 1px;
    top: 1px;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background-color: #ffdc00;
  }
  .moon-box.night .moon {
    animation: change-light 0.5s linear forwards;
  }
  .moon-box.night .moon:after {
    content: "";
    position: absolute;
    width: 112px;
    height: 112px;
    border-radius: 50%;
    background-color: #333b58;
    animation: move-moon 0.5s ease forwards;
  }
  @keyframes change-light {
    from {
      background-color: #ffdc00;
    }
    to {
      background-color: ${white};
    }
  }
  @keyframes move-moon {
    from {
      left: -200px;
      top: -200px;
    }
    to {
      top: -23px;
      left: -23px;
    }
  }
`;

const NightBackground = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #333b58;
  animation: turn-off 0.5s linear forwards;
  @keyframes turn-off {
    from {
      height: 0;
    }
    to {
      height: 100%;
    }
  }
  .sparkling-star {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${white};
    animation-name: sparkling;
    animation-iteration-count: infinite;
  }
  .sparkling-star:nth-of-type(1) {
    top: 30%;
    left: 10%;
    animation-duration: 2.5s;
    animation-delay: 1s;
  }
  .sparkling-star:nth-of-type(2) {
    top: 10%;
    left: 20%;
    animation-duration: 2s;
    animation-delay: 0.5s;
  }
  .sparkling-star:nth-of-type(3) {
    top: 25%;
    left: 15%;
    animation-duration: 2.2s;
    animation-delay: 1.2s;
  }
  .sparkling-star:nth-of-type(4) {
    top: 40%;
    right: 15%;
    animation-duration: 2.3s;
    animation-delay: 0.5s;
  }
  .sparkling-star:nth-of-type(5) {
    top: 43%;
    right: 30%;
    animation-duration: 2.4s;
    animation-delay: 0.9s;
  }
  .sparkling-star:nth-of-type(6) {
    top: 73%;
    right: 27%;
    animation-duration: 2s;
    animation-delay: 1s;
  }
  .sparkling-star:nth-of-type(7) {
    top: 65%;
    left: 22%;
    animation-duration: 2.5s;
  }
  @keyframes sparkling {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0);
    }
  }
`;

const SectionSeven = () => {
  const craditDocumentList = [
    {
      name: "마이너스 통장대출",
      url: "https://kakaobank.com/products/creditLine",
    },
    { name: "신용대출", url: "https://kakaobank.com/products/creditLoan" },
    { name: "개인사업자 대출", url: "https://kakaobank.com/products/sohoLoan" },
    {
      name: "전월세보증금 대출",
      url: "https://kakaobank.com/products/leaseLoan",
    },
  ];

  const [nightSky, setNightSky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY || window.pageYOffset;
    if (offset > 4300) {
      setNightSky(true);
    }
    if (offset < 3880) {
      setNightSky(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <SectionContainer>
      {nightSky && (
        <NightBackground>
          {new Array(6).fill(0).map((_, i) => (
            <span key={i} className="sparkling-star" />
          ))}
        </NightBackground>
      )}
      <div className="section-wrap">
        <div className="content">
          <h3>복잡한 서류 제출을 간편하게, 내가 원하는 시간에</h3>
          <p>
            이사 날짜가 주말이나 공휴일이어도 전월세보증금 대출을 신청할 수
            있습니다.
          </p>
          <ul className="craditline-list">
            {craditDocumentList.map((list, i) => (
              <li key={i}>
                <a href={list.url}>
                  {list.name}
                  <img src="/images/home_arr2.png" alt="" />
                </a>
              </li>
            ))}
          </ul>
          <div className={classNames("moon-box", { night: nightSky })}>
            <div className="moon" />
          </div>
        </div>
        <img src="/images/main-loan.png" alt="" />
      </div>
    </SectionContainer>
  );
};

export default SectionSeven;
