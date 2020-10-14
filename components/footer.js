import styled from 'styled-components'

const Footer = () => (
  <Container>
    &copy; {new Date().getFullYear()} &middot; Meridien Consulting Services Inc.
  </Container>
)

const Container = styled.footer`
  padding: 2rem 4rem;
  border-top: 2px solid var(--grey-100);
  font-size: 1.4rem;
  color: var(--cool-grey-600);

  @media (min-width: ${props => props.theme.screen.lg}) {
    padding: 2rem 8rem;
    max-width: 2000px;
  }
`

export default Footer
