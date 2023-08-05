import styled from 'styled-components'
import { getColor } from '../../utils/styleHelpers'


export const Label = styled.div`
  position: sticky;
  top: 50%;
  height: 8px;

  z-index: 2;
  font-size: 28px;
  text-align: center;


  color: ${getColor('primaryYellow')};
  transform: translate(0, -1500%);

`