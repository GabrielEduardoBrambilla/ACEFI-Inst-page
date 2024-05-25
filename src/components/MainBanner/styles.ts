import styled from 'styled-components'

export const WidthAligner = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  right: 0;
  left: 0;
  bottom: 60px;
  max-width: 1350px;

  position: absolute;
  margin: auto;
`
export const SocialMedias = styled.div`
  display: none;
  @media (min-width: 526px) {
    display: flex;
    justify-content: center;
    padding: 16px;
    border-radius: 10px 10px 0 0;
    max-width: 12.185rem;
    width: 100%;
    max-height: 60px;

    background-color: rgba(0, 26, 38, 0.8);
  }
`
export const ImgWrapper = styled.div`
  display: none;

  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  min-height: 30px;
  max-height: 50px;
  img {
    height: 35px;
    object-fit: contain;
    cursor: pointer;
  }
`
export const Container = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  background: black;
  > img {
    width: 100%;
    min-height: 250px;
    max-height: 435px;
    object-fit: cover;
    @media (min-width: 526px) {
      max-height: 535px;
    }
  }
`

export const TextWrapperBackground = styled.div`
  background: linear-gradient(
    90deg,
    rgba(209, 123, 61, 1) 0%,
    rgba(242, 26, 38, 1) 100%
  );
`
export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: whitesmoke;
  gap: 16px;
  font-weight: 500;
  padding: 16px 0;

  overflow: hidden;
  flex-wrap: wrap;
`
