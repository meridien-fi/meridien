import styled from 'styled-components'
import Nav from '../components/nav'

const Header = () => (
  <Container>
    <Brand>Brand</Brand>
    <NavContainer>
      <Nav />
    </NavContainer>
  </Container>
)

const Brand = styled.div`
  color: var(--grey-700);
  font-size: 1.4rem;
`

const Container = styled.header`
  padding: 2rem 4rem;
  border-bottom: 2px solid var(--grey-100);

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    display: flex;
    align-items: center;
    max-width: 2000px;
  }
`

const NavContainer = styled.div`
  margin-left: auto;
`

export default Header
