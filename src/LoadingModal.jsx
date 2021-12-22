import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import COLORS from "./constants/color";

const LoadingModal = () => {
  return (
    <Modal>
      로딩모달
      <Spinner />
    </Modal>
  );
};

const spin = keyframes`
  0% {
    transform: rotate(0);
  }
  
  100% {
    transform: rotate(360deg);
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  font-size: 0;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: conic-gradient(${COLORS.GREEN} 100deg, #ededed 100deg 330deg);
    animation: ${spin} 1s linear infinite;

    &:after {
      display: block;
      width: 90%;
      height: 90%;
      border-radius: 50%;
      background: #fff;
      content: "";
    }
  }
`;

const Spinner = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: conic-gradient(${COLORS.GREEN} 100deg, #ededed 100deg 330deg);
  animation: ${spin} 1s linear infinite;
  &:after {
    display: block;
    width: 90%;
    height: 90%;
    border-radius: 50%;
    background: #fff;
    content: "";
  }
`;

export default LoadingModal;
