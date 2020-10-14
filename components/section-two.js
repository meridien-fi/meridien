import styled from 'styled-components'

const SectionTwo = () => (
  <Section id="two">
    <Container>
      <Title>
        Section Two Title
      </Title>
    </Container>
  </Section>
)

const Section = styled.section`
  padding: 10rem 2rem 4rem;

  @media (min-width: ${props => props.theme.screen.lg}) {
    padding: 8rem 0 16rem 0;
  }
`

const Container = styled.div`
  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 2000px;
    padding-left: 12rem;
  }
`

const Title = styled.h1`
  font-size: 10vw;
  font-weight: 100;
  line-height: 1;
  margin-bottom: 3rem;
  color: var(--black);


  @media (min-width: ${props => props.theme.screen.lg}) {
    font-size: 12rem;
    margin-bottom: 6rem;
  }
`

export default SectionTwo