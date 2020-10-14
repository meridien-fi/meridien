import Link from 'next/link'
import styled from 'styled-components'

const Nav = () => (
  <NavItems>
    <NavItem>
      <Link href="#one" passHref>
        <NavLink>Boards</NavLink>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="#two" passHref>
        <NavLink>CEOs</NavLink>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="#two" passHref>
        <NavLink>Top Talent</NavLink>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="#two" passHref>
        <NavLink>About</NavLink>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="#two" passHref>
        <NavLink>Contact</NavLink>
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
    margin-right: 1.8rem;
    padding-right: 2rem;

    @media (min-width: ${(props) => props.theme.screen.lg}) {
      margin-right: 2.3rem;
      padding-right: 2.5rem;
    }
  }

  &:not(:last-child):before {
    content: '';
    position: absolute;
    height: 16px;
    width: 1px;
    transform: rotate(20deg);
    background-color: var(--cool-grey-400);
    right: 0;
    top: 25%;
  }
`

const NavLink = styled.a`
  position: relative;
  display: inline-block;
  font-size: 1.6rem;
  padding: 0 0 0.25rem;
  color: var(--cool-grey-600);
  font-weight: 600;
  transition: opacity 0.3s cubic-bezier(0.51, 0.92, 0.24, 1);

  &:after {
    --scale: 0;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    height: 2px;
    background: var(--light-blue-500);
    transform: scaleX(var(--scale));
    transform-origin: var(--x) 50%;
    transition: transform 0.3s cubic-bezier(0.51, 0.92, 0.24, 1);
  }

  &:hover {
    color: var(--light-blue-900);
  }

  &:hover:after {
    --scale: 1;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    font-size: 1.8rem;
  }
`

export default Nav
