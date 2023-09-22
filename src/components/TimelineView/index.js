// Write your code here
import './index.css'
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="chrono-container">
      <h1 className="top-heading">MY JOURNEY OF CCBP 4.0</h1>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
        theme={{secondary: 'white'}}
      >
        {timelineItemsList.map(eachList => {
          if (eachList.categoryId === 'COURSE') {
            return <CourseTimelineCard key={eachList.id} eachList={eachList} />
          }
          return <ProjectTimelineCard key={eachList.id} eachList={eachList} />
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
