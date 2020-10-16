import styled from 'styled-components'
import Nav from '../components/nav'

const Header = () => (
  <Container>
    <Brand>Meridien Consulting</Brand>
    <NavContainer>
      <Nav />
    </NavContainer>
  </Container>
)

const Brand = styled.div`
  margin-bottom: 2rem;
  color: var(--grey-700);
  font-weight: 600;
  font-size: 2rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 0;
  }
`

const Container = styled.header`
  padding: 2rem;
  background-color: var(--beige-100);

  @media (min-width: ${(props) => props.theme.screen.md}) {
    display: flex;
    align-items: center;
    padding: 2rem 4rem;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 2rem 8rem;
  }
`

const NavContainer = styled.div`
  margin-left: auto;
`

export default Header
