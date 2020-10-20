import styled from 'styled-components'

const SectionSubTitle = (props) => <SubTitle>{props.children}</SubTitle>

const SubTitle = styled.div`
  margin-bottom: 2rem;
  font-size: 2.4rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 4rem;
    font-size: 3rem;
  }
`

export default SectionSubTitle
