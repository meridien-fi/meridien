import styled from 'styled-components'

const Boards = () => (
  <Section id="boards">
    <Container>
      <Title>Boards</Title>

      <SectionIntro>
        <SubTitle>Shaping an Effective, Cohesive Team Built for Today</SubTitle>
        <Description>
          A high-functioning board – with the right members united in vision –
          positions an organization for healthy growth while maximizing value,
          managing risk and staying resilient in times of change.
        </Description>
      </SectionIntro>

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
      <ProcessFooter>
        Effective boards create value. They adeptly scrutinize director
        selection, CEO performance and succession and the board’s own dynamics.
        Peter’s approach is purposefully built to ensure any board thoughtfully
        addresses the issues of today and anticipates the challenges of
        tomorrow.
      </ProcessFooter>
    </Container>
  </Section>
)

const Section = styled.section`
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
    /* display: grid;
    grid-gap: 4rem;
    grid-template-columns: minmax(30%, 55%) 1fr; */
  }
`

const SectionIntro = styled.div`
  margin-bottom: 12rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    /* display: grid;
    grid-gap: 4rem;
    grid-template-columns: 1fr 1fr; */
  }
`

const Title = styled.h2`
  position: relative;
  padding-bottom: 2rem;
  margin-bottom: 3rem;
  font-size: 4rem;
  line-height: 1;
  font-family: var(--serif);
  font-weight: 600;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    font-size: 6vw;
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
    font-size: 2rem;
  }
`

const ProcessTitle = styled.div`
  /* margin-bottom: 6rem; */

  @media (min-width: ${(props) => props.theme.screen.md}) {
    text-align: right;
    font-size: 6rem;
    font-family: var(--serif);
    font-weight: 600;
    color: var(--grey-400);

    /* text-transform: uppercase; */
    /* font-family: 'Playfair Display SC', 'Georgia', 'Cambria'; */
    /* font-weight: 400; */
  }
`

const ProcessItemTitle = styled.h4`
  margin-bottom: 3rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    font-size: 4rem;
    line-height: 1;
    font-family: var(--serif);
    /* text-transform: uppercase; */
    font-weight: 600;
    color: var(--grey-600);

    /* text-transform: uppercase; */
    /* font-family: 'Playfair Display SC', 'Georgia', 'Cambria'; */
    /* font-weight: 400; */
  }
`

const Process = styled.div`
  margin-bottom: 12rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    /* display: grid;
    grid-template-columns: repeat(2, 1fr); */
  }
`

const ProcessItem = styled.div`
  /* margin-bottom: 12rem; */
  position: relative;
  padding: 10rem 6rem 3rem 0;
  /* max-width: 60%; */
  /* padding-left: 16rem; */
  /* padding: 6rem 0; */
  /* border-right: 1px solid #eee; */

  /* &:before {
    position: absolute;
    right: 6rem;
    top: 2rem;
    color: #f5f5f5;
    font-size: 12rem;
    font-weight: 700;
    line-height: 1;
  } */

  &:before {
    position: absolute;
    right: 0;
    top: 10rem;
    /* color: #f5f5f5; */
    font-size: 12rem;
    font-weight: 600;
    line-height: 1;
    font-family: var(--serif);
    /* color: var(--blue-500); */
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

  @media (min-width: ${(props) => props.theme.screen.md}) {
  }
`
const ProcessItemList = styled.ul`
  position: relative;
  list-style-type: none;

  @media (min-width: ${(props) => props.theme.screen.md}) {
  }
`
const ProcessItemPoint = styled.li`
  font-size: 2rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media (min-width: ${(props) => props.theme.screen.md}) {
  }
`

const ProcessFooter = styled.div`
  padding-top: 2rem;
  font-size: 2rem;
  border-top: 1px solid var(--grey-200);

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    max-width: 70%;
  }
`

export default Boards
