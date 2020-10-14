import styled from 'styled-components'

const Footer = () => (
  <Container>
    &copy; {new Date().getFullYear()} &middot; Site Copyright
  </Container>
)

const Container = styled.footer`
  padding: 2rem 4rem;
  border-top: 2px solid var(--grey-100);
  font-size: 1.4rem;

  @media (min-width: 1200px) {
    max-width: 2000px;
  }
`

export default Footer
