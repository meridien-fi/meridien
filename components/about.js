import styled from 'styled-components'
import SectionTitle from '../components/sectionTitle'
import SectionSubTitle from '../components/sectionSubTitle'

const About = () => (
  <Section id="about">
    <SectionIntro>
      <SectionTitle>About</SectionTitle>

      <SectionSubTitle>
        <strong>Dr. Peter Stephenson</strong> – President and Founder
      </SectionSubTitle>
      <Description>
        <p>
          Peter has helped build leaders at organizations across a wide range of
          industries. Boards, CEOs and executive teams have trusted the
          perspectives, tools and strategy he brings as an organizational
          psychologist.
        </p>

        <p>
          For over two decades, Peter has seen what’s possible – company growth
          and prosperity – when individuals and teams are empowered to achieve
          new levels of influence and leadership.
        </p>
      </Description>
    </SectionIntro>

    <AboutWrap>
      <AboutTitle>Peter’s approach is built upon:</AboutTitle>

      <AboutList>
        <AboutItem>
          <AboutItemTitle>Deep Experience</AboutItemTitle>
          <p>
            Over 20 years of helping executives and boards foster new levels of
            leadership
          </p>
        </AboutItem>

        <AboutItem>
          <AboutItemTitle>New Insights</AboutItemTitle>
          <p>Into a broad range of issues key to a company’s value</p>
        </AboutItem>

        <AboutItem>
          <AboutItemTitle>Sharp Analysis</AboutItemTitle>
          <p>About a leader’s competencies, motivations and potential</p>
        </AboutItem>

        <AboutItem>
          <AboutItemTitle>Custom Counsel</AboutItemTitle>
          <p>Services are tailored to specific needs and circumstances</p>
        </AboutItem>
      </AboutList>

      <AboutSummary>
        <p>
          <strong>A trusted Canadian expert</strong>
        </p>
        <p>
          Peter is frequently invited to speak on issues ranging from board
          governance and executive development to implementing strategy and
          planning succession.
        </p>
        <p>
          He holds a master’s and PhD in applied psychology from the University
          of Toronto and is faculty member at the Institute of Corporate
          Directors - Director’s Education Program.
        </p>
        <p>
          Peter launched Meridien Consulting in 1997 after 14 years helping grow
          RHR International, a world-leading firm of management psychologists.
        </p>
      </AboutSummary>
    </AboutWrap>
  </Section>
)

const Section = styled.section``

const SectionIntro = styled.div`
  padding: 4rem 2rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 8rem 4rem;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 8rem;
  }
`

const Description = styled.div`
  font-size: 2rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    max-width: 80%;
    font-size: 2.4rem;
  }

  p:not(:last-child) {
    margin-bottom: 2rem;
  }
`

const AboutWrap = styled.div`
  padding: 0 2rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 0 4rem;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 0 8rem;
    display: grid;
    grid-template-columns: minmax(30%, 64%) 1fr;
  }
`

const AboutTitle = styled.h3`
  margin-bottom: 6rem;
  font-size: 3.6rem;
  line-height: 1;
  color: var(--grey-600);

  @media (min-width: ${(props) => props.theme.screen.md}) {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
`

const AboutList = styled.div`
  @media (min-width: ${(props) => props.theme.screen.md}) {
    grid-column: 1 / span 1;
  }
`

const AboutItem = styled.div`
  margin-bottom: 2rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    margin-bottom: 4rem;
  }

  p {
    font-size: 2rem;
  }
`

const AboutItemTitle = styled.h4`
  margin-bottom: 3rem;
  font-size: 2.4rem;
  line-height: 1;
  font-family: var(--serif);
  color: var(--grey-600);

  @media (min-width: ${(props) => props.theme.screen.md}) {
    font-size: 2.8rem;
  }
`

const AboutSummary = styled.div`
  position: relative;
  padding: 0 0 4rem;
  font-size: 2rem;
  line-height: 1.75;
  font-family: var(--serif);
  color: var(--grey-700);

  p {
    margin-bottom: 3rem;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    grid-column: 2 / span 1;
    padding: 6rem 4rem 6rem 6rem;
    border-left: 1px solid var(--grey-300);

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 6rem;
      width: 6rem;
      height: 4px;
      background-color: var(--blue-500);
    }
  }
`

export default About
