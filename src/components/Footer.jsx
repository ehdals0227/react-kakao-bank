import React from "react";
import classNames from "classnames";
import styled from "styled-components";
import { gray, black } from "../util/color";

const FooterContainer = styled.footer`
  background-color: ${gray[2]};
  height: 160px;
  padding: 37px 0 20px;
  .footer-wrap {
    width: 1080px;
    margin: 0 auto;
  }
`;

const FooterServiceList = styled.ul`
  display: flex;
  li {
    display: flex;
  }
  li:after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 10px;
    margin: 0 15px 2px;
    background-color: #d8d8d8;
  }
  li > a {
    align-items: center;
    font-size: 12px;
    color: ${gray[1]};
    text-decoration: none;
  }
  li > a:hover {
    text-decoration: underline;
  }
  li:last-child:after {
    display: none;
  }
  li.black a {
    color: ${black};
  }
`;

const FooterContact = styled.p`
  padding: 12px 0 20px;
  font-weight: 700;
  .call-number {
    font-size: 12px;
  }
  .call-number > span {
    color: #888;
    font-weight: 400;
  }
  .copyright {
    color: #888;
    font-size: 11px;
    margin-left: 20px;
  }
`;

const SnsService = styled.div`
  display: flex;
  justify-content: space-between;
  .web-accessibility {
    display: flex;
    align-items: center;
  }
  .web-accessibility img {
    width: 48px;
    margin-right: 8px;
  }
  .web-accessibility a {
    text-decoration: none;
    font-size: 13px;
    font-weight: 700;
    color: ${gray[1]};
  }
  .sns-service {
    display: flex;
    align-items: center;
    margin-right: 34px;
  }
  .sns-service li {
    display: flex;
    width: 30px;
  }
  .sns-service li a {
    background: url("/images/img_kabang_sprite.png");
    background-size: 420px 390px;
    height: 20px;
    margin: 0 auto;
  }
  .sns-service li.sns-facebook a {
    width: 10px;
    background-position: -120px -360px;
  }
  .sns-service li.sns-kakaobank-blog a {
    width: 12px;
    background-position: -140px -360px;
  }
  .sns-service li.sns-naver-post a {
    width: 14px;
    background-position: -389px -360px;
  }
  .sns-service li.sns-youtube {
    margin-left: 6px;
  }
  .sns-service li.sns-youtube a {
    width: 23px;
    height: 16px;
    background-position: -160px -360px;
  }
`;

const Footer = () => {
  const serviceList = [
    { title: "모바일뱅킹 서비스 이용약관", fontColor: "normal" },
    { title: "전자금융거래 기본약관", fontColor: "normal" },
    { title: "위치기반 서비스 이용약관", fontColor: "black" },
    { title: "개인정보처리방침", fontColor: "black" },
    { title: "전자민원접수", fontColor: "black" },
    { title: "보호금융상품등록부", fontColor: "normal" },
    { title: "상품공시실", fontColor: "normal" },
    { title: "경영공시", fontColor: "normal" },
    { title: "공지사항", fontColor: "normal" },
  ];
  const snsServiceArray = [
    {
      name: "페이스북",
      url: "https://www.facebook.com/kakaobank.official",
    },
    {
      name: "카카오뱅크 블로그",
      url: "https://blog.kakaobank.com/",
    },
    {
      name: "네이버 포스트",
      url:
        "https://post.naver.com/my.nhn?memberNo=37255644&navigationType=push",
    },
    {
      name: "유튜브",
      url: "https://www.youtube.com/kakaobank",
    },
  ];
  return (
    <FooterContainer>
      <div className="footer-wrap">
        <FooterServiceList>
          {serviceList.map((list, i) => (
            <li
              key={i}
              className={classNames({ black: list.fontColor === "black" })}
            >
              <a href="/">{list.title}</a>
            </li>
          ))}
        </FooterServiceList>
        <FooterContact>
          <span className="call-number">
            대표전화 1599-3333 <span>(해외 +82-2-6420-3333)</span>
          </span>
          <span className="copyright">
            Copyright &copy; KakaoBank Corp. All rights reserved.
          </span>
        </FooterContact>
        <SnsService>
          <div className="web-accessibility">
            <img src="/images/webaccessibility.png" alt="" />
            <a href="http://www.webwatch.or.kr/Situation/WA_Situation.html?MenuCD=110">
              웹 접근성 품질인증
            </a>
          </div>
          <ul className="sns-service">
            {snsServiceArray.map((value, i) => (
              <li
                className={classNames({
                  "sns-facebook": value.name === "페이스북",
                  "sns-kakaobank-blog": value.name === "카카오뱅크 블로그",
                  "sns-naver-post": value.name === "네이버 포스트",
                  "sns-youtube": value.name === "유튜브",
                })}
                key={i}
              >
                <a href={value.url} target="_blank" rel="noopener noreferrer">
                  <span className="alt-text">{value.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </SnsService>
      </div>
    </FooterContainer>
  );
};

export default Footer;
