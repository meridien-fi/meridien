import styled from 'styled-components'

const Footer = () => (
  <Container>
    &copy; {new Date().getFullYear()} &middot; Meridien Consulting Services Inc.
  </Container>
)

const Container = styled.footer`
  padding: 2rem;
  border-top: 1px solid var(--grey-200);
  font-size: 1.4rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    display: flex;
    align-items: center;
    padding: 2rem 4rem;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 2rem 8rem;
  }
`

export default Footer
