import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(242, 109, 9, 0.8);
  position: absolute;
  z-index: 99999999;
  width: 100%;
  font-weight: 700;
  height: 65px;
`
export const NavContent = styled.div`
  display: flex;
  width: 90%;
  min-width: 300px;
  max-width: 1350px;
  display: flex;

  justify-content: space-between;
  align-items: center;

  margin: 0 58px;
`
// 1335 width max
export const ImgWrapper = styled.div`
  > img {
    width: 48px;
    height: 48px;
    object-fit: contain;
  }
`
export const ItemsWrapper = styled.div`
  display: flex;
  justify-self: flex-end;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  max-width: 380px;
  gap: 8px;
  color: whitesmoke;

  a:-webkit-any-link {
    text-decoration: none;
    color: whitesmoke;
  }
  @media (min-width: 526px) {
    gap: 16px;
  }
`
