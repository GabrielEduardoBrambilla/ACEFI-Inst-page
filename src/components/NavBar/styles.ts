import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f26d09;
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
`
