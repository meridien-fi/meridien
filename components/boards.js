import styled from 'styled-components'

const Boards = () => (
  <Section id="boards">
    <SectionIntro>
      <Title>Boards</Title>

      <SubTitle>Shaping an Effective, Cohesive Team Built for Today</SubTitle>
      <Description>
        A high-functioning board – with the right members united in vision –
        positions an organization for healthy growth while maximizing value,
        managing risk and staying resilient in times of change.
      </Description>
    </SectionIntro>

    <ProcessWrap>
      <ProcessTitle>The Process</ProcessTitle>
      <Process>
        <ProcessItem>
          <ProcessItemTitle>Understand the Scope</ProcessItemTitle>
          <ProcessItemList>
            <ProcessItemPoint>
              Analyze overall performance, capabilities and core issues.
            </ProcessItemPoint>
            <ProcessItemPoint>
              Assess current and emerging needs with precision.
            </ProcessItemPoint>
            <ProcessItemPoint>
              Identify specific actions needed to effect change or enhance
              impact.
            </ProcessItemPoint>
          </ProcessItemList>
        </ProcessItem>

        <ProcessItem>
          <ProcessItemTitle>Uncover Opportunities</ProcessItemTitle>
          <ProcessItemList>
            <ProcessItemPoint>
              Assess Board and individual director competencies, motivations and
              potential.
            </ProcessItemPoint>
            <ProcessItemPoint>
              Collaborate on ways to enhance contributions.
            </ProcessItemPoint>
            <ProcessItemPoint>
              Facilitate change through practical ideas, coaching, meetings and
              workshops.
            </ProcessItemPoint>
          </ProcessItemList>
        </ProcessItem>

        <ProcessItem>
          <ProcessItemTitle>Commit to Measurable Objectives</ProcessItemTitle>
          <ProcessItemList>
            <ProcessItemPoint>
              Validate priorities and establish a roadmap for change.
            </ProcessItemPoint>
            <ProcessItemPoint>
              Align objectives, strategies and tactics to corporate vision and
              goals.
            </ProcessItemPoint>
            <ProcessItemPoint>
              Develop benchmarks for process and outcomes.
            </ProcessItemPoint>
          </ProcessItemList>
        </ProcessItem>

        <ProcessItem>
          <ProcessItemTitle>Evaluate Results</ProcessItemTitle>
          <ProcessItemList>
            <ProcessItemPoint>
              Assess progress at one-year mark.
            </ProcessItemPoint>
            <ProcessItemPoint>Explore unforeseen challenges.</ProcessItemPoint>
            <ProcessItemPoint>
              Iterate and revise strategies for the upcoming year.
            </ProcessItemPoint>
          </ProcessItemList>
        </ProcessItem>
      </Process>
      <ProcessSummary>
        <p>
          <strong>Effective boards</strong> create value. They adeptly
          scrutinize director selection, CEO performance and succession and the
          board’s own dynamics.
        </p>
        <p>
          <strong>Peter’s</strong> approach is purposefully built to ensure any
          board thoughtfully addresses the issues of today and anticipates the
          challenges of tomorrow.
        </p>
      </ProcessSummary>
    </ProcessWrap>
  </Section>
)

const Section = styled.section`
  padding-bottom: 10rem;
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
  margin-bottom: 6rem;
  font-size: 2.4rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
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
  border-bottom: 2px solid var(--grey-200);

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
    grid-column: 1 / span 2;
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
  padding: 2rem 0 4rem 0;

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

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 2rem 0 10rem 0;
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
  padding: 4rem 0;
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

export default Boards
