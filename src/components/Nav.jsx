import React from "react";
import { main, white, black } from "../util/color";
import styled from "styled-components";

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 80px;
  background-color: ${white};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .nav-wrap {
    width: 1080px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Menu = styled.ul`
  display: flex;
  height: 100%;
  li {
    display: flex;
    align-items: center;
  }
  li:hover {
    border-bottom: 2px solid ${black};
  }
  li:last-child:hover {
    border-bottom: 0;
  }
  li a {
    display: inline-block;
    min-width: 80px;
    padding: 0 10px;
    height: 100%;
    line-height: 80px;
    text-align: center;
    text-decoration: none;
  }
  li:last-child a {
    height: auto;
    line-height: 100%;
  }
  li a:hover {
    text-decoration: underline;
  }
  li.send-document span {
    display: inline-block;
    background-color: ${main[0]};
    border: 1px solid ${main[0]};
    padding: 0 20px;
    height: 44px;
    line-height: 44px;
    border-radius: 22px;
  }
`;

const Nav = () => {
  return (
    <Navigation>
      <div className="nav-wrap">
        <img src="/images/logo_black.svg" alt="카카오뱅크 로고" />
        <Menu>
          <li>
            <a href="https://kakaobank.com/">은행소개</a>
          </li>
          <li>
            <a href="https://kakaobank.com/">상품안내</a>
          </li>
          <li>
            <a href="https://kakaobank.com/">고객센터</a>
          </li>
          <li>
            <a href="https://kakaobank.com/">이벤트</a>
          </li>
          <li className="send-document">
            <a href="https://kakaobank.com/">
              <span>서류제출하기</span>
            </a>
          </li>
        </Menu>
      </div>
    </Navigation>
  );
};

export default Nav;
