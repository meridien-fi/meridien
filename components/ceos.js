import styled from 'styled-components'
import SectionTitle from '../components/sectionTitle'
import SectionSubTitle from '../components/sectionSubTitle'
import {
  ProcessWrap,
  ProcessTitle,
  Process,
  ProcessItem,
  ProcessItemPoint,
  ProcessItemTitle,
  ProcessItemList,
  ProcessSummary,
} from '../components/process'

const Ceos = () => (
  <Section id="ceos">
    <SectionIntro>
      <SectionTitle>CEOs</SectionTitle>

      <SectionSubTitle>
        Selecting and Developing High-Performing Leaders
      </SectionSubTitle>
      <Description>
        Effective officers – who learn, unlearn, adapt and stay flexible – guide
        forward-looking companies and empower staff to consistently meet and
        exceed goals.
      </Description>
    </SectionIntro>

    <ProcessWrap>
      <ProcessTitle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path d="M27.3366267,22.6664 C26.7849687,22.6664 26.2557099,22.7633561 25.7639962,22.9400957 L18.0861167,8.43411597 C19.2474569,7.58422996 20.0035866,6.21223151 20.0035866,4.66648001 C20.0035866,2.0932496 17.9096971,0 15.33572,0 C12.7631296,0 10.66924,2.0932496 10.66924,4.66648001 C10.66924,6.29094836 11.5041933,7.72374438 12.7668628,8.55987094 L6.03187884,22.8700185 C5.60064276,22.7379705 5.14327439,22.6664 4.66948001,22.6664 C2.09688958,22.6664 0.003,24.7616762 0.003,27.33416 C0.003,29.9067504 2.09688958,32.00064 4.66948001,32.00064 C7.01562616,32.00064 8.96285494,30.2587363 9.28753529,28.0008 L22.7184647,28.0008 C23.0431451,30.2587363 24.9903738,32.00064 27.33652,32.00064 C29.9091104,32.00064 32.003,29.9067504 32.003,27.33416 C32.003,24.7616762 29.9091104,22.6664 27.3366267,22.6664 L27.3366267,22.6664 Z M12.00252,4.66648001 C12.00252,2.82452702 13.494407,1.33328 15.33572,1.33328 C17.177033,1.33328 18.6703066,2.82452702 18.6703066,4.66648001 C18.6703066,6.508433 17.177033,8.00031999 15.33572,8.00031999 C13.494407,8.00031999 12.00252,6.508433 12.00252,4.66648001 Z M13.9719346,9.12976814 C14.4035973,9.26202952 14.8613923,9.33359999 15.33572,9.33359999 C15.8871646,9.33359999 16.4163168,9.23685719 16.9078171,9.06054424 L24.5860167,23.5672706 C23.5956563,24.292895 22.9009641,25.3986641 22.7184647,26.6676266 L9.28753529,26.6676266 C9.09404969,25.3220805 8.32458714,24.1599936 7.23748395,23.4400224 L13.9719346,9.12976814 Z M4.66948001,30.6674666 C2.82816699,30.6674666 1.33628,29.1755796 1.33628,27.3342666 C1.33628,25.4916737 2.82816699,23.9997867 4.66948001,23.9997867 C6.51079302,23.9997867 8.00268001,25.4916737 8.00268001,27.3342666 C8.00268001,29.175473 6.51079302,30.6674666 4.66948001,30.6674666 Z M27.3366267,30.6674666 C25.4953136,30.6674666 24.0034266,29.1755796 24.0034266,27.3342666 C24.0034266,25.4916737 25.4953136,23.9997867 27.3366267,23.9997867 C29.1779397,23.9997867 30.6698267,25.4916737 30.6698267,27.3342666 C30.6698267,29.175473 29.177833,30.6674666 27.3366267,30.6674666 Z" />
        </svg>
        The Process
      </ProcessTitle>{' '}
      <Process>
        <ProcessItem>
          <ProcessItemTitle>Assess Goals</ProcessItemTitle>
          <ProcessItemList>
            <ProcessItemPoint>
              Set and document key business goals.
            </ProcessItemPoint>
          </ProcessItemList>
        </ProcessItem>

        <ProcessItem>
          <ProcessItemTitle>Confirm CEO’s Goals</ProcessItemTitle>
          <ProcessItemList>
            <ProcessItemPoint>
              Agree upon measurable business targets.
            </ProcessItemPoint>
            <ProcessItemPoint>
              Align upon the CEO's own individual goals.
            </ProcessItemPoint>
          </ProcessItemList>
        </ProcessItem>

        <ProcessItem>
          <ProcessItemTitle>Gain Board Alignment</ProcessItemTitle>
          <ProcessItemList>
            <ProcessItemPoint>
              Establish processes to monitor and provide feedback to CEOs on
              their performance.
            </ProcessItemPoint>
          </ProcessItemList>
        </ProcessItem>

        <ProcessItem>
          <ProcessItemTitle>Track Feedback and Progress</ProcessItemTitle>
          <ProcessItemList>
            <ProcessItemPoint>
              Establish checkpoints throughout the year.
            </ProcessItemPoint>
            <ProcessItemPoint>
              Enlist support from the HR committee or Chair to help
              course-correct as required.
            </ProcessItemPoint>
          </ProcessItemList>
        </ProcessItem>

        <ProcessItem>
          <ProcessItemTitle>Review Accomplishments</ProcessItemTitle>
          <ProcessItemList>
            <ProcessItemPoint>Assess end of year performance.</ProcessItemPoint>
          </ProcessItemList>
        </ProcessItem>

        <ProcessItem>
          <ProcessItemTitle>Establish new goals and repeat</ProcessItemTitle>
          <ProcessItemList>
            <ProcessItemPoint>
              Repeat the process by assessing and resetting goals for year two.
            </ProcessItemPoint>
          </ProcessItemList>
        </ProcessItem>
      </Process>
      <ProcessSummary>
        <p>
          With the right priorities and objectives in place, a CEO can steer a
          business toward growth and profitability.
        </p>
        <p>
          <strong>Peter’s process</strong> for strengthening CEO performance
          helps facilitate meaningful conversations between Boards and CEOs to
          align on corporate direction, goals, metrics and accountability.
        </p>
      </ProcessSummary>
    </ProcessWrap>
  </Section>
)

const Section = styled.section`
  border-bottom: 1px solid var(--grey-300);
`

const SectionIntro = styled.div`
  padding: 4rem 2rem;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    padding: 8rem 4rem;
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 8rem;
  }
`

const Description = styled.div`
  font-size: 2rem;

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    max-width: 60%;
    font-size: 2.4rem;
  }
`

export default Ceos
