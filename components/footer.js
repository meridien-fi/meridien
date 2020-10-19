import Link from 'next/link'
import styled from 'styled-components'

const Footer = () => (
  <Container>
    <CopyRight>
      &copy; {new Date().getFullYear()} &middot; Meridien Consulting Services
      Inc.
    </CopyRight>
    <Up>
      <Link href="#top" passHref>
        <UpLink>↑</UpLink>
      </Link>
    </Up>
  </Container>
)

const Container = styled.footer`
  display: flex;
  align-items: center;
  padding: 2rem;
  border-top: 1px solid var(--grey-200);

  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 2rem 4rem;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 2rem 8rem;
  }
`

const CopyRight = styled.footer`
  font-size: 1.4rem;
`

const Up = styled.footer`
  margin-left: auto;
`

const UpLink = styled.a`
  padding: 1rem;
  color: var(--grey-600);

  &:hover,
  &:focus {
    outline: none;
    color: var(--blue-700);
  }

  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 0.25rem;
  }
`

export default Footer
