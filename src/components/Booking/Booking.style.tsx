import styled from 'styled-components'
import { Button } from '@mui/material'
import { getColor } from 'utils/styleHelpers'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { match } from 'styled-is'


export const BookingStyle = styled.main`
  margin: 24px auto;
  background-color: ${getColor('white')};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
  0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const StyledButton = styled(Button)`
  opacity: .9 !important;
  background-color: ${getColor('primaryGreen')} !important;

  &:hover {
    opacity: 1 !important;
    font-weight: bold !important;
  }

  ${match('variant', 'outlined')`
    background-color: ${getColor('white')}!important;
    border: 1.5px solid ${getColor('primaryGreen')}!important;
    color: ${getColor('primaryGreen')}!important;
  `};
`