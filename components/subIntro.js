import styled from 'styled-components'

const SubIntro = () => (
  <Section id="subintro">
    <Container>
      <TitleWrap>
        <Title>The Meridien Approach</Title>
        <SubTitle>A process-driven strategy with actionable outcomes</SubTitle>
      </TitleWrap>
      <Description>
        <strong>Dr. Peter Stephenson</strong> applies a collaborative,
        results-focused lens to help your organization reach its near and
        long-term goals.
      </Description>
    </Container>
  </Section>
)

const Section = styled.section`
  background-color: var(--grey-200);
  padding: 4rem 2rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 8rem 4rem;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 12rem 8rem;
  }
`

const Container = styled.div`
  @media (min-width: ${(props) => props.theme.screen.md}) {
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: minmax(30%, 55%) 1fr;
  }
`

const TitleWrap = styled.div`
  margin-bottom: 4rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 0;
  }
`

const Title = styled.h2`
  margin-bottom: 3rem;
  font-size: 4rem;
  line-height: 1;
  font-family: var(--serif);
  font-weight: 600;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 6rem;
    font-size: 6vw;
  }
`

const SubTitle = styled.div`
  font-size: 2.4rem;
  line-height: 1.3;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    font-size: 3rem;
  }
`

const Description = styled.div`
  font-size: 2.2rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    font-size: 2.4rem;
  }
`

export default SubIntro
