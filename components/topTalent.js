import styled from 'styled-components'

const TopTalent = () => (
  <Section id="top-talent">
    <SectionIntro>
      <Title>Top Talent</Title>

      <SubTitle>Aligning the Best People at the Right Time</SubTitle>
      <Description>
        Attracting and developing high performers – your competitive advantage –
        takes planning, coaching and a proven process.
      </Description>
    </SectionIntro>

    <ProcessWrap>
      <ProcessTitle>The Process</ProcessTitle>
      <Process>
        <ProcessItem>
          <ProcessItemTitle>
            Articulate the Demands of the Role
          </ProcessItemTitle>
          <ProcessItemList>
            <ProcessItemPoint>
              Identify the knowledge, skills and attributes necessary for
              candidate success.
            </ProcessItemPoint>
          </ProcessItemList>
        </ProcessItem>

        <ProcessItem>
          <ProcessItemTitle>Assess Strengths and Weaknesses</ProcessItemTitle>
          <ProcessItemList>
            <ProcessItemPoint>
              Gather objective data about individuals skills and attributes.
            </ProcessItemPoint>
          </ProcessItemList>
        </ProcessItem>

        <ProcessItem>
          <ProcessItemTitle>Align on the Right Fit</ProcessItemTitle>
          <ProcessItemList>
            <ProcessItemPoint>
              Set strategy to place right people in the right roles at the right
              time.
            </ProcessItemPoint>
            <ProcessItemPoint>
              Make better decisions about selection, promotion and development.
            </ProcessItemPoint>
          </ProcessItemList>
        </ProcessItem>

        <ProcessItem>
          <ProcessItemTitle>Ensure Role-Readiness</ProcessItemTitle>
          <ProcessItemList>
            <ProcessItemPoint>
              Foster existing talent through developmental planning, coaching, 360-degree feedback and succession-planning interventions.
            </ProcessItemPoint>
            <ProcessItemPoint>
              Establish realistic goals and action plans.
            </ProcessItemPoint>
          </ProcessItemList>
        </ProcessItem>

        <ProcessItem>
          <ProcessItemTitle>Design an Onboarding Blueprint</ProcessItemTitle>
          <ProcessItemList>
            <ProcessItemPoint>
              Collaborate to refine the hiring and development process.
            </ProcessItemPoint>
          </ProcessItemList>
        </ProcessItem>
      </Process>
      <ProcessSummary>
        <p>
          People are the only asset that two companies cannot possess at once.
          Investing in the selection and development of talented senior
          executives is fundamental to success.
        </p>
        <p>
          <strong>Peter’s process</strong> approach to talent development helps
          leaders create and instill the passion to achieve specific goals among
          those they lead.
        </p>
      </ProcessSummary>
    </ProcessWrap>
  </Section>
)

const Section = styled.section`
  border-bottom: 2px solid var(--grey-200);
`

const SectionIntro = styled.div`
  padding: 4rem 2rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 8rem 4rem;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 10rem 8rem;
  }
`

const Title = styled.h2`
  position: relative;
  padding-bottom: 2rem;
  margin-bottom: 4rem;
  font-size: 6rem;
  line-height: 1;
  font-family: var(--serif);
  font-weight: 600;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    font-size: 9rem;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 6rem;
    height: 4px;
    background-color: var(--blue-500);
  }
`

const SubTitle = styled.div`
  margin-bottom: 2rem;
  font-size: 2.4rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 4rem;
    font-size: 3rem;
  }
`

const Description = styled.div`
  font-size: 1.8rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    max-width: 60%;
    font-size: 2.4rem;
  }
`

const ProcessWrap = styled.div`
  padding: 0 2rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 0 4rem;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 0 8rem;
    display: grid;
    grid-column-gap: 6rem;
    grid-template-columns: minmax(30%, 60%) 1fr;
  }
`

const ProcessTitle = styled.h3`
  margin-bottom: 4rem;
  text-transform: uppercase;
  font-family: var(--serif);
  font-size: 2rem;
  color: var(--grey-500);

  @media (min-width: ${(props) => props.theme.screen.md}) {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    font-size: 3rem;
  }
`

const Process = styled.div`
  margin-bottom: 4rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    grid-column: 1 / span 1;
  }
`

const ProcessItem = styled.div`
  position: relative;
  padding: 2rem 4rem 4rem 0;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 2rem 8rem 10rem 0;
  }

  &:before {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 12rem;
    font-weight: 600;
    line-height: 1;
    font-family: var(--serif);
    color: var(--grey-200);
  }

  &:nth-child(1):before {
    content: '1.';
  }

  &:nth-child(2):before {
    content: '2.';
  }

  &:nth-child(3):before {
    content: '3.';
  }

  &:nth-child(4):before {
    content: '4.';
  }

  &:nth-child(5):before {
    content: '5.';
  }

  &:nth-child(6):before {
    content: '6.';
  }
`

const ProcessItemTitle = styled.h4`
  margin-bottom: 4rem;
  font-size: 2.4rem;
  line-height: 1;
  font-family: var(--serif);
  color: var(--grey-600);

  @media (min-width: ${(props) => props.theme.screen.md}) {
    font-size: 3rem;
  }
`

const ProcessItemList = styled.ul`
  position: relative;
  list-style-type: none;
`

const ProcessItemPoint = styled.li`
  font-size: 1.8rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    font-size: 2rem;
  }

  &:not(:last-child) {
    margin-bottom: 1.8rem;
  }
`

const ProcessSummary = styled.div`
  position: relative;
  padding: 0 0 4rem;
  font-size: 2rem;
  line-height: 1.75;
  font-family: var(--serif);
  color: var(--grey-700);

  p {
    margin-bottom: 2rem;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    grid-column: 2 / span 1;
    padding: 6rem;
    border-left: 2px solid var(--grey-200);

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

export default TopTalent
