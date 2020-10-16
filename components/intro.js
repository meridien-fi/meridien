import styled, { keyframes } from 'styled-components'

const Intro = () => (
  <Section id="intro">
    <Container>
      <TitleWrap>
        <Title>
          <LineOne>Strategic</LineOne>
          <LineTwo>Leadership</LineTwo>
          <LineThree>Advisory</LineThree>
        </Title>
        <SubTitle>
          Personalized Insights for <strong>Boards</strong>,{' '}
          <strong>CEOs</strong> and <strong>Top Talent</strong>
        </SubTitle>
      </TitleWrap>
      <Image>
        <picture>
          <source srcSet="/images/peter-stephenson.webp" type="image/webp" />
          <source srcSet="img/peter-stephenson.jpg" type="image/jpeg" />
          <img src="/images/peter-stephenson.jpg" alt="Peter Stephenson" />
        </picture>
      </Image>
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
  background-color: var(--beige-100);
  padding: 0 2rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 0 0 0 4rem;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 0 0 0 8rem;
  }
`

const Container = styled.div`
  @media (min-width: ${(props) => props.theme.screen.md}) {
    display: grid;
    grid-template-columns: minmax(30%, 40%) minmax(40%, 60%);
  }
`
const TitleWrap = styled.div`
  padding: 1rem 0 0 0;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 6rem 0 8rem 0;
  }
`
const Title = styled.h1`
  margin-bottom: 3rem;
  font-size: 6rem;
  line-height: 1;
  font-family: var(--serif);
  font-weight: 600;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 6rem;
    font-size: 7.5vw;
  }
`

const LineOne = styled.div`
  opacity: 0;
  transform: translateY(100px);
  animation: ${fadeUp} 1s 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;
`

const LineTwo = styled.div`
  color: var(--blue-700);
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
  opacity: 0;
  animation: ${fadeUp} 1s 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;
  transform: translateY(100px);

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    font-size: 3rem;
  }

  strong {
    white-space: nowrap;
  }
`

const Image = styled.div`
  @media (min-width: ${(props) => props.theme.screen.md}) {
    picture,
    img {
      object-fit: cover;
      height: 100%;
    }
  }
`

export default Intro
