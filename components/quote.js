import styled from 'styled-components'

const Quote = () => (
  <QuoteWrap>
    <QuoteText>
      <p>
        "High performing talent is every organization’s most critical
        competitive advantage"
      </p>
      <cite>— Dr. Peter Stephenson</cite>
    </QuoteText>
  </QuoteWrap>
)
const QuoteWrap = styled.div`
  background-color: var(--grey-200);
  padding: 8rem 2rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 10rem 4rem;
    text-align: right;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 10rem 8rem;
  }
`
const QuoteText = styled.blockquote`
  @media (min-width: ${(props) => props.theme.screen.lg}) {
    width: 75%;
  }

  p {
    margin-bottom: 2rem;
    font-size: 4rem;
    line-height: 1.25;
    font-family: var(--serif);
    font-weight: 400;
    font-style: italic;
    color: var(--grey-600);

    @media (min-width: ${(props) => props.theme.screen.lg}) {
      font-size: 6rem;
    }
  }

  cite {
    margin-right: 1rem;
    font-style: normal;
    font-size: 2rem;
  }
`

export default Quote
