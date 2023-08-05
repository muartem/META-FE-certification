import styled from 'styled-components'
import { Container as AppContainer } from 'components/App/AppStyle'
import { getColor } from 'utils/styleHelpers'

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${getColor('white')};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
  0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const Container = styled(AppContainer)`
  align-items: stretch;
  justify-content: space-between;
  padding: 8px 0;
`

export const Logo = styled.img`
  height: 32px;
  margin: 10px 0;
  cursor: pointer;
`
