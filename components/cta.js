import styled from 'styled-components'

const Cta = () => (
  <Section>
    <Container>
      <Title>
        Can your leadership teams do more to position themselves for success?
      </Title>

      <SubTitle>Let Peter help you reset and achieve your potential</SubTitle>
      <Dash />
    </Container>
  </Section>
)

const Section = styled.section`
  background-color: var(--grey-200);
  padding: 6rem 2rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 10rem 4rem;
    text-align: right;
  }
`

const Container = styled.div`
  text-align: center;
`

const Title = styled.div`
  margin-bottom: 4rem;
  font-size: 3rem;
  line-height: 1.25;
`

const SubTitle = styled.div`
  margin-bottom: 3rem;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.3;
  font-family: var(--serif);

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    max-width: 50%;
    margin: 0 auto 3rem;
    font-size: 4rem;
  }
`

const Dash = styled.span`
  display: inline-block;
  position: relative;
  width: 6rem;
  height: 1px;
  background-color: var(--blue-500);
`

export default Cta
