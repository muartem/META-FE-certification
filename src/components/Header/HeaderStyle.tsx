import styled from 'styled-components'

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70vw;
  padding: 8px 0;

  @media (max-width: 992px) {
    padding: 8px 16px;
    width: 100vw;
  }
`

export const Logo = styled.img`
  height: 32px;
  margin: 10px 0;
  cursor: pointer;
`
