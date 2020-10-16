import styled from 'styled-components'

const Ceos = () => (
  <Section id="ceos">
    <SectionIntro>
      <Title>CEOs</Title>

      <SubTitle>Selecting and Developing High-Performing Leaders</SubTitle>
      <Description>
        Effective officers – who learn, unlearn, adapt and stay flexible – guide
        forward-looking companies and empower staff to consistently meet and
        exceed goals.
      </Description>
    </SectionIntro>

    <ProcessWrap>
      <ProcessTitle>The Process</ProcessTitle>
      <Process>
        <ProcessItem>
          <ProcessItemTitle>Assess Goals</ProcessItemTitle>
          <ProcessItemList>
            <ProcessItemPoint>
              Set and document key business goals.
            </ProcessItemPoint>
          </ProcessItemList>
        </ProcessItem>

        <ProcessItem>
          <ProcessItemTitle>Confirm CEO’s Goals</ProcessItemTitle>
          <ProcessItemList>
            <ProcessItemPoint>
              Agree upon measurable business targets.
            </ProcessItemPoint>
            <ProcessItemPoint>
              Align upon the CEO's own individual goals.
            </ProcessItemPoint>
          </ProcessItemList>
        </ProcessItem>

        <ProcessItem>
          <ProcessItemTitle>Gain Board Alignment</ProcessItemTitle>
          <ProcessItemList>
            <ProcessItemPoint>
              Establish processes to monitor and provide feedback to CEOs on
              their performance.
            </ProcessItemPoint>
          </ProcessItemList>
        </ProcessItem>

        <ProcessItem>
          <ProcessItemTitle>Track Feedback and Progress</ProcessItemTitle>
          <ProcessItemList>
            <ProcessItemPoint>
              Establish checkpoints throughout the year.
            </ProcessItemPoint>
            <ProcessItemPoint>
              Enlist support from the HR committee or Chair to help
              course-correct as required.
            </ProcessItemPoint>
          </ProcessItemList>
        </ProcessItem>

        <ProcessItem>
          <ProcessItemTitle>Review Accomplishments</ProcessItemTitle>
          <ProcessItemList>
            <ProcessItemPoint>Assess end of year performance.</ProcessItemPoint>
          </ProcessItemList>
        </ProcessItem>

        <ProcessItem>
          <ProcessItemTitle>Establish new goals and repeat</ProcessItemTitle>
          <ProcessItemList>
            <ProcessItemPoint>
              Repeat the process by assessing and resetting goals for year two.
            </ProcessItemPoint>
          </ProcessItemList>
        </ProcessItem>
      </Process>
      <ProcessSummary>
        <p>
          With the right priorities and objectives in place, a CEO can steer a
          business toward growth and profitability.
        </p>
        <p>
          <strong>Peter’s process</strong> for strengthening CEO performance
          helps facilitate meaningful conversations between Boards and CEOs to
          align on corporate direction, goals, metrics and accountability.
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
  font-family: var(--serif);
  font-size: 4rem;
  font-weight: 600;
  color: var(--grey-600);

  @media (min-width: ${(props) => props.theme.screen.md}) {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    margin-bottom: 10rem;
    font-size: 6rem;
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

export default Ceos
