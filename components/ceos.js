import styled from 'styled-components'
import SectionIntro from '../components/sectionIntro'
import ProcessTitle from '../components/processTitle'
import ProcessItems from '../components/processCeosData'
import {
  ProcessWrap,
  Process,
  ProcessItem,
  ProcessItemPoint,
  ProcessItemTitle,
  ProcessItemList,
  ProcessSummary,
} from '../components/processSection'

const Ceos = () => (
  <Section id="ceos">
    <SectionIntro
      title={'CEOs'}
      subtitle={'Selecting and Developing High-Performing Leaders'}
      description={
        'Effective officers – who learn, unlearn, adapt and stay flexible – guide forward-looking companies and empower staff to consistently meet and exceed goals.'
      }
    ></SectionIntro>

    <ProcessWrap>
      <ProcessTitle />
      <Process>
        {ProcessItems.map(({ title, list }) => (
          <ProcessItem key={title}>
            <ProcessItemTitle>{title}</ProcessItemTitle>
            <ProcessItemList>
              {list.map(({ point }) => (
                <ProcessItemPoint key={point}>{point}</ProcessItemPoint>
              ))}
            </ProcessItemList>
          </ProcessItem>
        ))}
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

export default Ceos
