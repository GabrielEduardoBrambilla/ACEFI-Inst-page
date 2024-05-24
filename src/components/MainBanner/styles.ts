import styled from 'styled-components'

export const SocialMedias = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  border-radius: 10px 10px 0 0;
  bottom: 60px;
  max-width: 195px;
  width: 100%;
  right: 58px;

  position: absolute;

  background-color: rgba(0, 26, 38, 0.8);
`
export const ImgWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-evenly;
  width: 100%;
  img {
    cursor: pointer;
  }
`
export const Container = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  background: linear-gradient(
    90deg,
    rgba(209, 123, 61, 1) 0%,
    rgba(242, 26, 38, 1) 100%
  );
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
