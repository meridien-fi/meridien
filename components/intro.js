import styled, { keyframes } from 'styled-components'

const Intro = () => (
  <Section id="intro">
    <Container>
      <IntroTitleWrap>
        <Title>
          <LineOne>
            <span>Strategic</span>
          </LineOne>
          <LineTwo>Leadership</LineTwo>
          <LineThree>
            <span>Advisory</span>
          </LineThree>
        </Title>
        <SubTitle>
          Personalized Insights for <strong>Boards</strong>,{' '}
          <strong>CEOs</strong> and <strong>Top Talent</strong>
        </SubTitle>
      </IntroTitleWrap>
      <IntroImage>
        <picture>
          <source srcSet="/images/peter-stephenson.webp" type="image/webp" />
          <source srcset="img/peter-stephenson.jpg" type="image/jpeg" />
          <img src="/images/peter-stephenson.jpg" alt="Peter Stephenson" />
        </picture>
      </IntroImage>
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
  padding: 0 4rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 0 0 0 8rem;
  }
`

const Container = styled.div`
  @media (min-width: ${(props) => props.theme.screen.lg}) {
    display: grid;
    grid-template-columns: minmax(20%, 50%) 1fr;
  }
`
const IntroTitleWrap = styled.div`
  padding: 4rem 0 2rem 0;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 6rem 0 8rem 0;
  }
`
const IntroImage = styled.div`
  margin-right: -4rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    margin-right: 0;

    picture,
    img {
      object-fit: cover;
      height: 100%;
    }
  }
`

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 100;
  line-height: 1;
  margin-bottom: 3rem;
  color: var(--light-blue-A700);
  font-family: var(--serif);

  span {
    font-weight: 700;
    color: var(--cool-grey-700);
  }

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
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 300;
  opacity: 0;
  animation: ${fadeUp} 1s 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;
  transform: translateY(100px);
  color: var(--cool-grey-600);

  strong {
    white-space: nowrap;
    font-weight: 700;
    color: var(--cool-grey-700);
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    font-size: 3rem;
  }
`

export default Intro
