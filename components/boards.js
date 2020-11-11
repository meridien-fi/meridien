import styled from 'styled-components'
// import SectionIntro from '../components/sectionIntro'
import ProcessTitle from '../components/processTitle'
import ProcessItems from '../components/processBoardsData'
import {
  ProcessWrap,
  Process,
  ProcessItem,
  ProcessItemPoint,
  ProcessItemTitle,
  ProcessItemList,
  ProcessSummary,
} from '../components/processSection'

const Boards = () => (
  <Section id="boards">
    {/* <SectionIntro
      title={'Boards'}
      subtitle={'Shaping an Effective, Cohesive Team Built for Tomorrow'}
      description={
        'A high-functioning board – with the right members united in vision – positions an organization for healthy growth while maximizing value, managing risk and staying resilient in times of change.'
      }
    /> */}
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
          <strong>Effective boards</strong> create value. They adeptly
          scrutinize director selection, CEO performance and succession and the
          board’s own dynamics.
        </p>
        <p>
          <strong>Peter’s approach</strong> is purposefully built to ensure any
          board thoughtfully addresses the issues of today and anticipates the
          challenges of tomorrow.
        </p>
      </ProcessSummary>
    </ProcessWrap>
  </Section>
)

const Section = styled.section`
  border-bottom: 1px solid var(--grey-300);
`

export default Boards
