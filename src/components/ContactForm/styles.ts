import styled from 'styled-components'

export const FullWidthWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 80px 24px;
  margin-top: 80px;

  /* Japanese Landscape Background */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      #ffd6e8 0%,
      #ffe5f0 20%,
      #fff0f5 40%,
      #e8f4f8 70%,
      #c5dce8 100%
    );
    z-index: 0;
    opacity: 0.4;
  }

  /* Mount Fuji Base - Realistic with gradient shading */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 350px solid transparent;
    border-right: 350px solid transparent;
    border-bottom: 400px solid #a8b8cc;
    filter: drop-shadow(0 15px 50px rgba(0, 0, 0, 0.25));
    z-index: 1;
  }

  @media (min-width: 526px) {
    padding: 80px 2rem;
  }

  @media (min-width: 900px) {
    padding: 100px 2rem;
  }
`

export const Container = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  gap: 24px;
  margin: 0 auto;
  padding: 56px 24px;
  border-style: none;
  background: #ffffff54;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  z-index: 10;

  input {
    background-color: #f5f5f5;
    border: 2px solid transparent;
    padding: 16px 18px;
    border-radius: 12px;
    text-align: start;
    font-size: 16px;
    transition: all 0.3s ease;
    font-family: inherit;

    &:focus {
      background-color: white;
      border-color: rgba(242, 109, 9, 0.3);
      box-shadow: 0 0 0 3px rgba(242, 109, 9, 0.1);
    }

    &::placeholder {
      color: #999;
    }
  }

  @media (min-width: 526px) {
    padding: 64px 3rem;
  }

  @media (min-width: 900px) {
    padding: 72px 4rem;
  }
`
export const FormWrapper = styled.div`
  max-width: 1350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  z-index: 10;

  @media (min-width: 526px) {
    flex-direction: row;
    justify-content: center;
    flex-grow: 1;
    gap: 24px;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  border-radius: 12px;
  gap: 20px;
  justify-content: space-between;
  flex-direction: column;

  > input {
    font-size: 16px;
    height: 100%;
    min-height: 52px;
  }

  @media (min-width: 526px) {
    width: 50%;
  }
`
export const MessageWrapper = styled.div`
  position: relative;

  textarea {
    font-size: 16px;
    background-color: #f5f5f5;
    border: 2px solid transparent;
    padding: 16px 18px;
    border-radius: 12px;
    text-align: start;
    width: 100%;
    height: 315px;
    vertical-align: top;
    resize: none;
    font-family: inherit;
    transition: all 0.3s ease;

    &:focus {
      background-color: white;
      border-color: rgba(242, 109, 9, 0.3);
      box-shadow: 0 0 0 3px rgba(242, 109, 9, 0.1);
    }

    &::placeholder {
      text-align: start;
      vertical-align: top;
      color: #999;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 52px;
    height: 52px;
    bottom: 12px;
    right: 12px;
    border-radius: 100%;
    cursor: pointer;
    border: transparent;
    background: linear-gradient(
      135deg,
      rgba(242, 109, 9, 1) 0%,
      rgba(242, 26, 38, 1) 100%
    );
    box-shadow: 0 4px 15px rgba(242, 109, 9, 0.3);
    transition: all 0.3s ease;

    > svg {
      height: 28px;
      width: 28px;
      color: white;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(242, 109, 9, 0.4);
    }

    &:active {
      transform: translateY(0);
    }
  }

  @media (min-width: 526px) {
    width: 50%;
  }
`

export const TextWrapper = styled.div`
  text-align: center;
  margin-bottom: 16px;
  position: relative;
  z-index: 10;

  h2 {
    margin-bottom: 8px;
  }

  p {
    color: #666;
    font-size: 1.05rem;
  }
`

export const JapaneseLandscape = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 2;

  /* Sun */
  .sun {
    position: absolute;
    top: 10%;
    right: 15%;
    width: 80px;
    height: 80px;
    background: radial-gradient(
      circle at center,
      rgba(255, 200, 120, 0.9) 0%,
      rgba(255, 220, 150, 0.7) 50%,
      rgba(255, 230, 180, 0.4) 100%
    );
    border-radius: 50%;
    box-shadow: 0 0 40px rgba(255, 200, 120, 0.5);
    animation: gentleGlow 4s ease-in-out infinite;
  }

  @keyframes gentleGlow {
    0%,
    100% {
      opacity: 0.8;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
  }

  /* Clouds */
  .cloud {
    position: absolute;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 100px;
    opacity: 0.7;
    animation: floatCloud 30s linear infinite;
  }

  .cloud::before,
  .cloud::after {
    content: '';
    position: absolute;
    background: inherit;
    border-radius: 50%;
  }

  .cloud-1 {
    width: 80px;
    height: 30px;
    top: 15%;
    left: -100px;
    animation-duration: 40s;

    &::before {
      width: 50px;
      height: 50px;
      top: -25px;
      left: 10px;
    }

    &::after {
      width: 60px;
      height: 40px;
      top: -20px;
      right: 10px;
    }
  }

  .cloud-2 {
    width: 100px;
    height: 35px;
    top: 25%;
    left: -150px;
    animation-duration: 50s;
    animation-delay: -10s;

    &::before {
      width: 60px;
      height: 60px;
      top: -30px;
      left: 15px;
    }

    &::after {
      width: 70px;
      height: 50px;
      top: -25px;
      right: 15px;
    }
  }

  .cloud-3 {
    width: 70px;
    height: 25px;
    top: 20%;
    left: -120px;
    animation-duration: 45s;
    animation-delay: -25s;

    &::before {
      width: 40px;
      height: 40px;
      top: -20px;
      left: 10px;
    }

    &::after {
      width: 50px;
      height: 35px;
      top: -18px;
      right: 10px;
    }
  }

  @keyframes floatCloud {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(100vw + 200px));
    }
  }

  /* Background Mountains for depth */
  .mountain-left {
    position: absolute;
    bottom: 0;
    left: 5%;
    width: 0;
    height: 0;
    border-left: 250px solid transparent;
    border-right: 250px solid transparent;
    border-bottom: 300px solid #8a9bb0;
    opacity: 0.5;
    z-index: 0;
  }

  .mountain-right {
    position: absolute;
    bottom: 0;
    right: 5%;
    width: 0;
    height: 0;
    border-left: 220px solid transparent;
    border-right: 220px solid transparent;
    border-bottom: 280px solid #95a5b8;
    opacity: 0.45;
    z-index: 0;
  }

  /* Mount Fuji - Dark shaded slope (left side) */
  .mountain-shadow {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 350px solid transparent;
    border-right: 350px solid transparent;
    border-bottom: 400px solid #7d8fa8;
    clip-path: polygon(50% 0%, 0% 100%, 50% 100%);
    z-index: 1;
  }

  /* Mount Fuji Snow Cap - Brilliant white peak */
  .mountain-snow {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 350px solid transparent;
    border-right: 350px solid transparent;
    border-bottom: 400px solid transparent;
    z-index: 3;
  }

  .mountain-snow::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 90%);

    // bottom: 170px;
    // left: -180px;
    width: 0;
    height: 0;
    border-left: 180px solid transparent;
    border-right: 180px solid transparent;
    border-bottom: 230px solid #ffffff;
    filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.8))
      drop-shadow(0 8px 25px rgba(180, 200, 220, 0.5));
  }

  .mountain-snow::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 56%;
    transform: translate(-50%, 93%);
    width: 0;
    height: 0;
    border-left: 150px solid transparent;
    border-right: 150px solid transparent;
    border-bottom: 200px solid #f8f9fb;
    filter: brightness(1.15);
  }

  /* Floating Sakura Petals */
  .sakura {
    position: absolute;
    width: 12px;
    height: 12px;
    background: radial-gradient(
      circle at center,
      rgba(255, 182, 193, 0.9) 0%,
      rgba(255, 192, 203, 0.7) 50%,
      rgba(255, 182, 193, 0.5) 100%
    );
    border-radius: 50% 0 50% 0;
    animation: sakuraDrift 15s infinite ease-in-out;
    opacity: 0;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      transform: rotate(90deg);
    }
  }

  .sakura-1 {
    top: -20px;
    left: 10%;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  .sakura-2 {
    top: -20px;
    left: 30%;
    animation-delay: 3s;
    animation-duration: 20s;
  }

  .sakura-3 {
    top: -20px;
    left: 50%;
    animation-delay: 6s;
    animation-duration: 16s;
  }

  .sakura-4 {
    top: -20px;
    left: 70%;
    animation-delay: 9s;
    animation-duration: 19s;
  }

  .sakura-5 {
    top: -20px;
    left: 85%;
    animation-delay: 12s;
    animation-duration: 17s;
  }

  .sakura-6 {
    top: -20px;
    left: 20%;
    animation-delay: 15s;
    animation-duration: 21s;
  }

  @keyframes sakuraDrift {
    0% {
      top: -20px;
      opacity: 0;
      transform: translateX(0) rotate(0deg);
    }
    10% {
      opacity: 0.9;
    }
    50% {
      opacity: 1;
      transform: translateX(100px) rotate(180deg);
    }
    80% {
      opacity: 0.7;
    }
    100% {
      top: 100%;
      opacity: 0;
      transform: translateX(-50px) rotate(360deg);
    }
  }
`
