import React, { useState, useMemo } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import styled from 'styled-components'
import Link from 'next/link'
import Nav from '../components/nav'

const Header = () => {
  const [hideOnScroll, setHideOnScroll] = useState(true)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll],
    null,
    false,
    300
  )

  return useMemo(
    () => (
      <HeaderWrap show={hideOnScroll}>
        <Link href="#top" passHref>
          <Brand>Meridien Consulting</Brand>
        </Link>
        <NavContainer>
          <Nav />
        </NavContainer>
      </HeaderWrap>
    ),
    [hideOnScroll]
  )
}

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  transition: all 300ms ${(props) => (props.show ? 'ease-in' : 'ease-out')};
  transform: ${(props) => (props.show ? 'none' : 'translate(0, -100%)')};
  padding: 2rem;
  background-color: var(--beige-100);
  /* box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.1); */

  @media (min-width: ${(props) => props.theme.screen.md}) {
    height: 65px;
    display: flex;
    align-items: center;
    padding: 1.8rem 4rem;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 1.6rem 8rem;
  }
`

const Brand = styled.a`
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--grey-700);

  &:hover,
  &:focus {
    outline: none;
    color: var(--blue-800);
  }

  @media (min-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 0;
    font-size: 2.2rem;
  }
`

const NavContainer = styled.div`
  margin-left: auto;
`

export default Header
