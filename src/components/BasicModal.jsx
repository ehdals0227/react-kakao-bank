import React from "react";
import styled from "styled-components";
import { white, main } from "../util/color";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  .modal-wrap {
    position: relative;
    margin: 200px auto auto;
    background-color: ${white};
    width: ${(props) => props.width}px;
  }
  .btn-close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 20px;
    background: none;
    cursor: pointer;
  }
  .btn-close > span {
    display: inline-block;
    width: 18px;
    height: 18px;
    background: url("images/img_kabang_sprite.png") no-repeat;
    background-size: 420px 390px;
    background-position: 0 -60px;
  }
  .modal-text {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    padding: 55px 20px;
  }
  .btn-confirm {
    width: 100%;
    height: 60px;
    background-color: ${main[0]};
    cursor: pointer;
  }
`;

const BasicModal = ({ onClose, width = 340, lineOne, lineTwo }) => {
  return (
    <Modal width={width}>
      <div className="modal-wrap">
        <button className="btn-close" type="button" onClick={onClose}>
          <span />
        </button>
        <div className="modal-text">
          {lineOne && <p>{lineOne}</p>}
          {lineTwo && <p>{lineTwo}</p>}
        </div>
        <button className="btn-confirm" type="button" onClick={onClose}>
          확인
        </button>
      </div>
    </Modal>
  );
};

export default BasicModal;
