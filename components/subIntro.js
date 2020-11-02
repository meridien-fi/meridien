import styled from 'styled-components'

const SubIntro = () => (
  <Section>
    <TitleWrap>
      <Title>The Meridien Approach</Title>
      <SubTitle>
        A process-driven strategy with actionable outcomes. Dr. Peter Stephenson
        applies a collaborative, results-focused lens to help your organization
        reach its near and long-term goals.
      </SubTitle>
    </TitleWrap>
    <Description>
      <Dash />
      <p>
        <strong>Dr. Peter Stephenson</strong> joins{' '}
        <a href="https://www.hugessen.com" target="_blank">Hugessen Consulting</a> <br /> to
        boost CEO leadership performance and help Boards raise their performance
        bar.
      </p>
    </Description>
  </Section>
)

const Section = styled.section`
  padding: 6rem 2rem;
  background-color: var(--grey-200);

  @media (min-width: ${(props) => props.theme.screen.md}) {
    display: grid;
    grid-template-columns: minmax(40%, 60%) minmax(30%, 40%);
    grid-column-gap: 10rem;
    padding: 8rem 4rem;
    align-items: center;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 12rem 8rem;
  }
`

const TitleWrap = styled.div`
  margin-bottom: 3rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 0;
  }
`

const Title = styled.h2`
  margin-bottom: 3rem;
  font-size: 4rem;
  line-height: 1;
  font-family: var(--serif);
  font-weight: 600;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    font-size: 5rem;
  }
`

const SubTitle = styled.div`
  font-size: 2.2rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    font-size: 2.4rem;
  }
`

const Description = styled.div`
  font-size: 2.2rem;

  strong {
    font-weight: 400;
  }

  a {
    position: relative;
    white-space: nowrap;
    font-weight: 400;
    color: var(--blue-900);

    &:after {
      content: '';
      position: relative;
      display: inline-block;
      width: 9px;
      height: 9px;
      top: 1.3rem;
      left: 0.25rem;
      border-style: solid;
      border-color: var(--blue-900);
      border-width: 2px 2px 0 0;
      transform: rotate(45deg);
      vertical-align: top;
      transition: all 0.2s;
    }

    &:hover,
    &:focus {
      outline: none;
      color: var(--blue-700);
    }

    &:hover:after {
      left: 0.6rem;
      border-color: var(--blue-500);
    }
  }
`

const Dash = styled.span`
  display: inline-block;
  margin-bottom: 2rem;
  width: 6rem;
  height: 4px;
  background-color: var(--blue-500);
`

export default SubIntro
