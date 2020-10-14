import styled from 'styled-components'

const SectionOne = () => (
  <Section id="one">
    <Container>
      <Title>
        Section Title
      </Title>
    </Container>
  </Section>
)

const Section = styled.section`
  padding: 10rem 2rem 4rem;

  @media (min-width: 1200px) {
    padding: 8rem 0 16rem 0;
  }
`

const Container = styled.div`
  @media (min-width: 1200px) {
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


  @media (min-width: 1200px) {
    font-size: 12rem;
    margin-bottom: 6rem;
  }
`

export default SectionOne