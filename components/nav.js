import Link from 'next/link'
import styled from 'styled-components'

const Nav = () => (
  <NavItems>
    <NavItem>
      <Link href="#one" passHref>
        <NavLink>Section One</NavLink>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="#two" passHref>
        <NavLink>Section Two</NavLink>
      </Link>
    </NavItem>
  </NavItems>
)

const NavItems = styled.ul`
  list-style-type: none;
`

const NavItem = styled.li`
  position: relative;
  display: inline-block;

  &:not(:last-child) {
    margin-right: 2.3rem;
    padding-right: 2.5rem;
  }

  &:not(:last-child):before {
    content: '';
    position: absolute;
    height: 16px;
    width: 1px;
    transform: rotate(20deg);
    background-color: var(--yellow);
    right: 0;
    top: 30%;
    color: #ccc;
  }
`

const NavLink = styled.a`
  position: relative;
  display: inline-block;
  font-size: 1.4rem;
  padding: 0 0 0.25rem;
  color: #333;
  opacity: 0.7;
  transition: opacity 0.3s cubic-bezier(0.51, 0.92, 0.24, 1);

  &:after {
    --scale: 0;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    height: 2px;
    background: var(--yellow);
    transform: scaleX(var(--scale));
    transform-origin: var(--x) 50%;
    transition: transform 0.3s cubic-bezier(0.51, 0.92, 0.24, 1);
  }

  &:hover {
    opacity: 1;
  }

  &:hover:after {
    --scale: 1;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    font-size: 1.8rem;
  }
`

export default Nav
