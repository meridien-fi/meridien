import styled from 'styled-components'

const SectionTitle = (props) => <Title>{props.children}</Title>

const Title = styled.h2`
  position: relative;
  padding-bottom: 2rem;
  margin-bottom: 4rem;
  font-size: 6rem;
  line-height: 1;
  font-family: var(--serif);
  font-weight: 600;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    font-size: 8rem;
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

export default SectionTitle
