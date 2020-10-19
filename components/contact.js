import styled from 'styled-components'

const Contact = () => (
  <Section id="contact">
    <SectionIntro>
      <Title>Contact</Title>

      <SubTitle>
        <strong>Dr. Peter Stephenson</strong>
      </SubTitle>
    </SectionIntro>

    <ContactWrap>
      <ContactInfo>
        <Phone>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 23 23"
          >
            <path
              fill="none"
              stroke=""
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13.05,4 C15.0479895,4.38981665 16.6101833,5.95201052 17,7.95 M13.05,0 C17.2295483,0.464314241 20.5304255,3.76103943 21,7.94 M20,15.92 L20,18.92 C20.0022858,19.4831451 19.767048,20.0211584 19.3520779,20.4018649 C18.9371078,20.7825714 18.3808639,20.9706881 17.82,20.92 C14.7428339,20.5856408 11.7869992,19.5341445 9.19,17.85 C6.77382812,16.3146639 4.72533615,14.2661719 3.19,11.85 C1.49997806,9.24120398 0.448243002,6.27099456 0.12,3.18 C0.0694732103,2.62087233 0.256272008,2.06625242 0.63476578,1.65162106 C1.01325955,1.23698969 1.54859424,1.00052869 2.11,0.999901681 L5.11,0.999901681 C6.11386406,0.990119843 6.96950085,1.72596748 7.11,2.72 C7.23662301,3.68006645 7.47144946,4.62272688 7.81,5.53 C8.084735,6.26087503 7.90901507,7.08480626 7.36,7.64 L6.09,8.91 C7.51355547,11.4135458 9.58645417,13.4864445 12.09,14.91 L13.36,13.64 C13.9151937,13.0909849 14.739125,12.915265 15.47,13.19 C16.3772731,13.5285505 17.3199335,13.763377 18.28,13.89 C19.2855627,14.0318603 20.02519,14.9047926 20,15.92 L20,15.92 Z"
              transform="translate(1 1)"
            />
          </svg>
          416-972-0782
        </Phone>

        <Email>
          <svg width="22" height="18" viewBox="0 0 22 18">
            <g
              fill="none"
              stroke=""
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              transform="translate(1 1)"
            >
              <path d="M2,0 L18,0 C19.1,0 20,0.9 20,2 L20,14 C20,15.1 19.1,16 18,16 L2,16 C0.9,16 0,15.1 0,14 L0,2 C0,0.9 0.9,0 2,0 Z" />
              <polyline points="20 2 10 9 0 2" />
            </g>
          </svg>

          <a href="mailto:pstephenson@hugessen.com">pstephenson@hugessen.com</a>
        </Email>
      </ContactInfo>

      <Cta>
        <p>
          Can your leadership teams do more to position themselves for success?
        </p>

        <p>Let Peter help you reset and achieve your potential</p>
      </Cta>
    </ContactWrap>
  </Section>
)

const Section = styled.section``

const SectionIntro = styled.div`
  padding: 4rem 2rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 8rem 4rem;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 10rem 8rem 2rem;
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

const SubTitle = styled.div`
  margin-bottom: 2rem;
  font-size: 2.4rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 4rem;
    font-size: 3rem;
  }
`

const ContactWrap = styled.div`
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

const ContactInfo = styled.div`
  margin-bottom: 4rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 0;
    grid-column: 1 / span 1;
  }
`

const Cta = styled.div`
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

const Phone = styled.div`
  margin-bottom: 4rem;
  font-size: 3.6rem;
  line-height: 1;
  color: var(--grey-600);

  svg {
    width: 40px;
    height: 40px;
    position: relative;
    top: 5px;
    margin-right: 2rem;
    stroke: var(--blue-700);
  }
`

const Email = styled.div`
  margin-bottom: 2rem;
  font-size: 3.6rem;
  line-height: 1;

  svg {
    width: 40px;
    height: 40px;
    position: relative;
    top: 5px;
    margin-right: 2rem;
    stroke: var(--blue-700);
  }

  a {
    color: var(--grey-600);
    &:hover {
      color: var(--blue-700);
    }
  }
`

export default Contact
