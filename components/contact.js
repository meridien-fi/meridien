import styled from 'styled-components'

const Contact = () => (
  <Section id="contact">
    <SectionIntro>
      <Title>Contact</Title>

      <SubTitle>
        <strong>Dr. Peter Stephenson</strong>
      </SubTitle>
      <Description>
        <p>
          Can your leadership teams do more to position themselves for success?
        </p>

        <p>Let Peter help you reset and achieve your potential</p>
      </Description>

      <Email>pstephenson@hugessen.com</Email>
      <Phone>416-972-0782</Phone>
    </SectionIntro>
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

  p {
    margin-bottom: 2rem;
  }
`

const Phone = styled.div`
  margin-bottom: 2rem;
  font-size: 2.4rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 4rem;
    font-size: 3rem;
  }
`

const Email = styled.div`
  margin-bottom: 2rem;
  font-size: 2.4rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 4rem;
    font-size: 3rem;
  }
`

export default Contact
