import styled from 'styled-components'
import SectionTitle from '../components/sectionTitle'
import SectionSubTitle from '../components/sectionSubTitle'

const SectionIntro = (props) => (
  <SectionIntroWrap>
    <SectionTitle>{props.title}</SectionTitle>
    <SectionSubTitle>{props.subtitle}</SectionSubTitle>
    <SectionDescription>{props.description}</SectionDescription>
  </SectionIntroWrap>
)

const SectionIntroWrap = styled.div`
  padding: 4rem 2rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 8rem 4rem;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 8rem;
  }
`

const SectionDescription = styled.div`
  font-size: 2rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    max-width: 60%;
    font-size: 2.4rem;
  }
`

export default SectionIntro
