import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  z-index: 99999999;
  width: 100%;
  font-weight: 600;
  height: 70px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
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
