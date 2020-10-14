import styled, { keyframes } from 'styled-components'

const Intro = () => (
  <Section id="intro">
    <Container>
      <Title>
        <LineOne>
          <span>This is</span>
        </LineOne>
        <LineTwo>just a</LineTwo>
        <LineThree>
          <span>Test</span>
        </LineThree>
      </Title>
      <SubTitle>
        More text <strong> text</strong>,
        <strong>text</strong> and <strong> text</strong> and text.
      </SubTitle>
    </Container>
  </Section>
)

const fadeUp = keyframes`
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const Section = styled.section`
  padding: 10rem 2rem 4rem;

  @media (min-width: 1200px) {
    padding: 8rem 0 16rem 0;
  }
`

const Container = styled.div`
  padding: 0 2rem;

  @media (min-width: ${props => props.theme.screen.lg}) {
    padding: 0 12rem;
  }
`

const Title = styled.h1`
  font-size: 10vw;
  font-weight: 100;
  line-height: 1;
  margin-bottom: 3rem;
  color: var(--yellow);
  /* color: ${props => props.theme.colors.primary}; */
  /* font-family: ${props => props.theme.fontFamily.serif}; */
  font-family: var(--serif);

  span {
    font-weight: 700;
    color: var(--black);
  }

  @media (min-width: 1200px) {
    font-size: 12rem;
    margin-bottom: 6rem;
  }
`

const LineOne = styled.div`
  opacity: 0;
  transform: translateY(100px);
  animation: ${fadeUp} 1s 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;
`

const LineTwo = styled.div`
  opacity: 0;
  transform: translateY(100px);
  animation: ${fadeUp} 1s 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;
`

const LineThree = styled.div`
  opacity: 0;
  transform: translateY(100px);
  animation: ${fadeUp} 1s 0.9s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;
`

const SubTitle = styled.div`
  font-size: 2.4rem;
  line-height: 1.3;
  font-weight: 300;
  color: #727272;
  opacity: 0;
  animation: ${fadeUp} 1s 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;
  transform: translateY(100px);

  strong {
    color: var(--black);
  }

  @media (min-width: 1200px) {
    font-size: 3.2rem;
    max-width: 84rem;
    color: #727272;
  }
`

export default Intro