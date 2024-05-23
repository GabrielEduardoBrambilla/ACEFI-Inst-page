import styled from 'styled-components'

export const Container = styled.div`
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
  }
`

export const TextWrapper = styled.div`
  display: flex;
  height: 80px;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: whitesmoke;
  font-weight: 500;
  padding: 16px 8px;
  background: linear-gradient(
    90deg,
    rgba(209, 123, 61, 1) 0%,
    rgba(242, 26, 38, 1) 100%
  );
  overflow: hidden;
  flex-wrap: wrap;
`
