import styled from 'styled-components'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import is from 'styled-is'
import { getColor } from 'utils/styleHelpers'

export const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
`

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: ${getColor('primaryGreen')};
  background-color: ${getColor('white')};

  @media only screen and (max-width: 700px) {
    display: none;

    position: absolute;
    top: 100%;
    right: 0;
    flex-direction: column;
    padding: 16px;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);

    & a {
      padding: 0 40px 2px;
    }

    ${is('$isOpen')`
      display: flex;
    `};
  }
`

export const Li = styled.li`
  padding-bottom: 4px;
  margin: 6px 0 2px 0;
  border-bottom: transparent solid 2px;
  cursor: pointer;

  &:hover {
    color: ${getColor('primaryYellow')};
    border-bottom-color: ${getColor('primaryYellow')};
  }

  ${is('$current')`
    color: ${getColor('primaryYellow')};
    font-weight: bold;
  `};
`

export const StyledBurger = styled.div`
  display: none;
  width: 2rem;
  height: 2rem;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 10;
  cursor: pointer;

  @media only screen and (max-width: 700px) {
    display: flex;
  }

  & > div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: ${getColor('primaryGreen')};
    transform-origin: 1px;
    transition: all 0.3s linear;
  }

  &:hover {
    & > div {
      background-color: ${getColor('primaryYellow')};
    }
  }

  ${is('$isOpen')`
    & > div:first-child {
      transform: rotate(45deg);
    }
    
    & > div:nth-child(2) {
      transform: translateX(-70vw);
      opacity: 0;
    }
    
    & > div:last-child {
      transform: rotate(-45deg);
    }
  `};
`

/*& > div:first-child {
      transform: ${
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	props => (props.isOpen ? 'rotate(45deg)' : 'rotate(0)')
}

  // & > div:nth-child(2) {
  //     transform: ${ isOpen ? 'translateX(100%)' : 'translateX(0)'};
  //     opacity: ${ isOpen ? 0 : 1};
  // }
  // & > div:last-child {
  //     transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
  // }*/
