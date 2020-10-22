import styled, { keyframes } from 'styled-components'

const Intro = () => (
  <Section id="intro">
    <TitleWrap>
      <Title>
        <LineOne>Strategic </LineOne>
        <LineTwo>Leadership </LineTwo>
        <LineThree>Advisory</LineThree>
      </Title>
      <SubTitle>
        Personalized Insights for <strong>Boards</strong>,<strong>CEOs</strong>{' '}
        and <strong>Top Talent</strong>
      </SubTitle>
    </TitleWrap>
    <Image>
      <picture>
        <source srcSet="/images/peter-stephenson.webp" type="image/webp" />
        <img
          src="/images/peter-stephenson.jpg"
          width="900"
          height="573"
          alt="Peter Stephenson"
        />
      </picture>
    </Image>
  </Section>
)

const fadeUp = keyframes`
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeIn = keyframes`
  100% {
    opacity: 1;
  }
`

const Section = styled.section`
  position: relative;
  background-color: var(--beige-100);

  @media (min-width: ${(props) => props.theme.screen.md}) {
    display: grid;
    grid-template-columns: minmax(30%, 45%) minmax(40%, 55%);
  }
`
const TitleWrap = styled.div`
  padding: 1rem 0 0 2rem;
  z-index: 1;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 6rem 0 8rem 4rem;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding-left: 8rem;
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
    font-size: 8rem;
  }

  @media (min-width: ${(props) => props.theme.screen.md}) {
    font-size: 12rem;
    font-size: min(max(8rem, 7.5vw), 12rem);
  }
`

const LineOne = styled.span`
  opacity: 0;
  transform: translateY(100px);
  animation: ${fadeUp} 1s 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;
`

const LineTwo = styled.span`
  color: var(--blue-700);
  opacity: 0;
  transform: translateY(100px);
  animation: ${fadeUp} 1s 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 1 forwards;
`

const LineThree = styled.span`
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
  opacity: 0;
  animation: ${fadeIn} 2s forwards;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    picture,
    img {
      object-fit: cover;
      height: 100%;
    }
  }
`

export default Intro
