import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: clamp(370px, 80vw, 1024px);
  margin: 0 auto;

  @media (max-width: 700px) {
    padding: 0 16px;
  }
`
