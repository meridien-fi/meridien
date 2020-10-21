import styled from 'styled-components'

const ProcessItemPoint = (props) => (
  <Point>{props.children}</Point>
)

const Point = styled.li`
  position: relative;
  padding: 0.75rem 0 0.75rem 3rem;
  font-size: 1.6rem;

  &:before {
    content: '';
    position: absolute;
    top: 40%;
    left: 0;
    width: 12px;
    height: 12px;
    background-color: var(--white);
    border-radius: 50%;
    border: 1px solid var(--blue-700);
  }

  @media (min-width: ${(props) => props.theme.screen.md}) {
    font-size: 1.8rem;
  }
`

export default ProcessItemPoint
