import React, { useState } from "react";
import classNames from "classnames";
import { main, white, black } from "../util/color";
import styled from "styled-components";
import { navigationMenuList } from "../util/navMenu";
import BasicModal from "./BasicModal";

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
  li.show-border,
  li:hover {
    border-bottom: 2px solid ${black};
  }
  li:last-child:hover {
    border-bottom: 0;
  }
  li a {
    display: inline-block;
    min-width: 100px;
    font-size: 15px;
    font-weight: 700;
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
  li.send-document > button {
    font-size: 15px;
    font-weight: 700;
    background: none;
    cursor: pointer;
  }
  li.send-document > button > span {
    display: inline-block;
    background-color: ${main[0]};
    border: 1px solid ${main[0]};
    padding: 0 20px;
    height: 44px;
    line-height: 44px;
    border-radius: 22px;
  }
`;

const SubNavigation = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  left: 0;
  top: 80px;
  padding: 60px 0 40px;
  background-color: ${white};
  .sub-nav-wrap {
    display: flex;
    width: 1080px;
    margin: 0 auto;
    justify-content: space-between;
    text-align: center;
  }
  .sub-title {
    width: 100%;
  }
  .sub-title > a {
    display: inline-block;
    font-size: 17px;
    font-weight: 700;
    text-decoration: none;
    margin-bottom: 20px;
  }
  .sub-title > a:hover,
  .sub-list > li > a:hover {
    text-decoration: underline;
  }
  .sub-list > li {
    margin-bottom: 24px;
  }
  .sub-list > li:last-child {
    margin-bottom: 0;
  }
  .sub-list > li > a {
    font-size: 13px;
    text-decoration: none;
  }
`;

const Nav = () => {
  const [hoverMenu, setHoverMnue] = useState(null);
  const [showBadModal, setShowBadModal] = useState(false);
  return (
    <Navigation>
      <div className="nav-wrap" onMouseLeave={() => setHoverMnue(null)}>
        <a href="/">
          <img src="/images/logo_black.svg" alt="카카오뱅크 로고" />
        </a>
        <Menu>
          <li
            className={classNames({ "show-border": hoverMenu === "corp" })}
            onMouseEnter={() => setHoverMnue("corp")}
          >
            <a href="https://kakaobank.com/">은행소개</a>
          </li>
          <li
            className={classNames({ "show-border": hoverMenu === "products" })}
            onMouseEnter={() => setHoverMnue("products")}
          >
            <a href="https://kakaobank.com/">상품안내</a>
          </li>
          <li
            className={classNames({ "show-border": hoverMenu === "help" })}
            onMouseEnter={() => setHoverMnue("help")}
          >
            <a href="https://kakaobank.com/">고객센터</a>
          </li>
          <li onMouseEnter={() => setHoverMnue(null)}>
            <a href="https://kakaobank.com/">이벤트</a>
          </li>
          <li className="send-document" onMouseEnter={() => setHoverMnue(null)}>
            <button type="button" onClick={() => setShowBadModal(true)}>
              <span>서류제출하기</span>
            </button>
            {showBadModal && (
              <BasicModal
                lineOne="죄송합니다."
                lineTwo="현재 가능한 서비스가 없습니다."
                onClose={() => setShowBadModal(false)}
              />
            )}
          </li>
        </Menu>
        {hoverMenu && (
          <SubNavigation>
            <ul className="sub-nav-wrap">
              {navigationMenuList?.[hoverMenu].map((menu, i) => {
                return (
                  <li key={i} className="sub-title">
                    <a href={menu.detailMenu?.[0]?.link}>
                      {menu.title}&nbsp;
                      {menu.detailMenu === null && ">"}
                    </a>
                    <ul className="sub-list">
                      {menu.detailMenu?.map((list, j) => (
                        <li key={j}>
                          <a href={list.link}>{list.name}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </SubNavigation>
        )}
      </div>
    </Navigation>
  );
};

export default Nav;
