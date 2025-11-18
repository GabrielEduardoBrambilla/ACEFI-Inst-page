import styled from 'styled-components'

export const WidthAligner = styled.div`
  display: flex;
  justify-content: flex-end;
  bottom: 85px;
  width: 100%;
  max-width: 1350px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 100;
  padding: 0 0 12px 0;

  @media (min-width: 526px) {
    padding: 0 0 12px 0;
  }
`
export const SocialMedias = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 8px;
  border-radius: 50px;
  background: linear-gradient(
    135deg,
    rgba(242, 109, 9, 0.8) 0%,
    rgba(242, 26, 38, 0.8) 100%
  );
  box-shadow: 0 8px 30px rgba(242, 109, 9, 0.5),
    0 0 0 3px rgba(255, 255, 255, 0.3);
  border: 3px solid white;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 12px 40px rgba(242, 109, 9, 0.6),
      0 0 0 4px rgba(255, 255, 255, 0.5);
  }

  @media (min-width: 526px) {
    padding: 18px 36px;
  }
`
export const ImgWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    &:hover {
      transform: translateY(-3px) scale(1.1);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
      background: #fff;
    }

    &:active {
      transform: translateY(-1px) scale(1.05);
    }
  }

  img {
    height: 28px;
    width: 28px;
    object-fit: contain;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.15);
    }

    &.whatsapp-icon {
      filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(98%) contrast(119%);
    }
  }

  @media (min-width: 526px) {
    gap: 28px;

    a {
      width: 52px;
      height: 52px;
    }

    img {
      height: 30px;
      width: 30px;
    }
  }
`
export const Container = styled.div`
  position: relative;
  margin: 70px 0 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 70px;
    background: linear-gradient(
      -45deg,
      #1a1a1a 0%,
      #2d2d2d 25%,
      #1a1a1a 50%,
      #2d2d2d 75%,
      #1a1a1a 100%
    );
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 70px;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
    pointer-events: none;
    z-index: 2;
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  > img {
    width: 100%;
    min-height: 400px;
    max-height: 550px;
    object-fit: cover;
    opacity: 0.85;
    position: relative;
    z-index: 1;

    @media (min-width: 526px) {
      max-height: 650px;
    }
  }
`

export const TextWrapperBackground = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 15;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 300%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(242, 109, 9, 1) 0%,
      rgba(242, 26, 38, 1) 20%,
      rgba(242, 109, 9, 1) 40%,
      rgba(242, 26, 38, 1) 60%,
      rgba(242, 109, 9, 1) 80%,
      rgba(242, 26, 38, 1) 100%
    );
    animation: shimmer 8s linear infinite;
    z-index: 0;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(33.333%);
    }
  }

  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.2);
`
export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  gap: 20px;
  font-weight: 700;
  padding: 22px 0;
  font-size: 1.1rem;
  letter-spacing: 1px;
  overflow: hidden;
  flex-wrap: wrap;
  position: relative;
  z-index: 20;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  p {
    color: white;
    animation: pulse 3s ease-in-out infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.9;
    }
  }
`
