import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgba(255, 250, 252, 0.98) 0%,
    rgba(255, 255, 255, 0.98) 50%,
    rgba(255, 245, 250, 0.98) 100%
  );
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  z-index: 99999999;
  width: 100%;
  font-weight: 600;
  height: 70px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08),
    inset 0 -1px 0 rgba(255, 182, 193, 0.15);
  transition: all 0.3s ease;
  overflow: hidden;
`

export const SakuraDecoration = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;

  .sakura-petal {
    position: absolute;
    width: 8px;
    height: 8px;
    background: radial-gradient(
      circle at center,
      rgba(255, 182, 193, 0.8) 0%,
      rgba(255, 192, 203, 0.6) 50%,
      rgba(255, 182, 193, 0.4) 100%
    );
    border-radius: 50% 0 50% 0;
    opacity: 0;
    animation: sakuraFall 15s infinite ease-in-out;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      transform: rotate(90deg);
    }

    &:nth-child(1) {
      left: 10%;
      animation-delay: 0s;
      animation-duration: 12s;
    }

    &:nth-child(2) {
      left: 30%;
      animation-delay: 3s;
      animation-duration: 14s;
    }

    &:nth-child(3) {
      left: 50%;
      animation-delay: 6s;
      animation-duration: 13s;
    }

    &:nth-child(4) {
      left: 70%;
      animation-delay: 9s;
      animation-duration: 15s;
    }

    &:nth-child(5) {
      left: 90%;
      animation-delay: 12s;
      animation-duration: 16s;
    }

    &:nth-child(6) {
      left: 15%;
      animation-delay: 2s;
      animation-duration: 13.5s;
    }

    &:nth-child(7) {
      left: 40%;
      animation-delay: 5s;
      animation-duration: 14.5s;
    }

    &:nth-child(8) {
      left: 60%;
      animation-delay: 8s;
      animation-duration: 15.5s;
    }

    &:nth-child(9) {
      left: 80%;
      animation-delay: 11s;
      animation-duration: 12.5s;
    }

    &:nth-child(10) {
      left: 95%;
      animation-delay: 1s;
      animation-duration: 13s;
    }
  }

  @keyframes sakuraFall {
    0% {
      top: -10px;
      opacity: 0;
      transform: translateX(0) rotate(0deg);
    }
    10% {
      opacity: 0.8;
    }
    50% {
      opacity: 1;
      transform: translateX(50px) rotate(180deg);
    }
    80% {
      opacity: 0.6;
    }
    100% {
      top: 80px;
      opacity: 0;
      transform: translateX(-20px) rotate(360deg);
    }
  }
`
export const NavContent = styled.div`
  display: flex;
  width: 90%;
  min-width: 300px;
  max-width: 1350px;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`
export const ImgWrapper = styled.div`
  > img {
    width: 52px;
    height: 52px;
    object-fit: contain;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`
export const ItemsWrapper = styled.div`
  display: flex;
  justify-self: flex-end;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  max-width: 450px;
  gap: 12px;
  color: #1a1a1a;

  a:-webkit-any-link {
    text-decoration: none;
    color: #1a1a1a;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.95rem;
    position: relative;

    &:hover {
      background-color: rgba(242, 109, 9, 0.08);
      color: #f26d09;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background-color: #f26d09;
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }

    &:hover::after {
      width: 80%;
    }
  }

  @media (min-width: 526px) {
    gap: 20px;

    a:-webkit-any-link {
      font-size: 1rem;
    }
  }
`
