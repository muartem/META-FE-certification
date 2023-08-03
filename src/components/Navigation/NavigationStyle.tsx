import styled from 'styled-components'
import is from 'styled-is'
import { getColor } from 'utils/styleHelpers'

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

export const Li = styled.li`
  padding-bottom: 4px;
  margin: 6px 0;
  border-bottom: transparent solid 2px;
  color: ${getColor('primaryGreen')};

  &:hover {
    color: ${getColor('primaryYellow')};
    border-bottom-color: ${getColor('primaryYellow')};
  }

  ${is('$current')`
    color: ${getColor('primaryYellow')};
    font-weight: bold;
  `};
`