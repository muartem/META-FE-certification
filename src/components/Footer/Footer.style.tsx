import styled from 'styled-components'
import { Container as AppContainer } from 'components/App/App.style'
import { getColor } from '../../utils/styleHelpers'

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
  0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const Container = styled(AppContainer)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 8px 0;

  gap: 16px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  color: ${getColor('primaryGreen')};

  & > div:not(:last-child) li:hover {
    color: ${getColor('primaryYellow')};
    cursor: pointer;
  }
`

export const Logo = styled.img`
  height: 100px;
  margin: 10px 0;
  cursor: pointer;
`
