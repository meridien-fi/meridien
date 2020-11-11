import styled from 'styled-components'
import SectionIntro from '../components/sectionIntro'
import ProcessTitle from '../components/processTitle'
import ProcessItems from '../components/processTopTalentData'
import {
  ProcessWrap,
  Process,
  ProcessItem,
  ProcessItemPoint,
  ProcessItemTitle,
  ProcessItemList,
  ProcessSummary,
} from '../components/processSection'

const TopTalent = () => (
  <Section id="top-talent">
    <SectionIntro
      title={'Top Talent'}
      subtitle={'Aligning the Best People at the Right Time'}
      description={
        'Attracting and developing high performers – your competitive advantage – takes planning, coaching and a proven process.'
      }
    />
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
          People are the only asset that two companies cannot possess at once.
          Investing in the selection and development of talented senior
          executives is fundamental to success.
        </p>
        <p>
          <strong>Peter’s process</strong> approach to talent development helps
          leaders create and instill the passion to achieve specific goals among
          those they lead.
        </p>
      </ProcessSummary>
    </ProcessWrap>
  </Section>
)

const Section = styled.section``

export default TopTalent
