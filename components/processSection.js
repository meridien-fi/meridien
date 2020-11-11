import styled from 'styled-components'

export const ProcessWrap = styled.div`
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

export const Process = styled.div`
  margin-bottom: 4rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    grid-column: 1 / span 1;
  }
`

export const ProcessItem = styled.div`
  position: relative;
  padding: 6rem 4rem 6rem 0;
  border-bottom: 1px solid var(--grey-300);

  &:before {
    position: absolute;
    right: 0;
    top: 2rem;
    font-size: 10rem;
    font-weight: 400;
    line-height: 120px;
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

  &:nth-child(7):before {
    content: '7.';
  }

  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 6rem 10rem 6rem 0;

    &:before {
      right: 2rem;
      font-size: 14rem;
    }
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    &:last-child {
      border-bottom: none;
    }
  }
`

export const ProcessItemTitle = styled.h4`
  margin-bottom: 3rem;
  font-size: 2.4rem;
  line-height: 1;
  font-family: var(--serif);
  color: var(--grey-600);

  @media (min-width: ${(props) => props.theme.screen.md}) {
    font-size: 3.2rem;
  }
`

export const ProcessItemList = styled.ul`
  position: relative;
  list-style-type: none;
`

export const ProcessItemPoint = styled.li`
  position: relative;
  margin-bottom: 1.5rem;
  font-size: 1.6rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    font-size: 1.8rem;
  }
`

export const ProcessSummary = styled.div`
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
