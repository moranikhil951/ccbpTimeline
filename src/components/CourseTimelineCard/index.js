// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {eachList} = props
  return (
    <div>
      <div className="flex-course-and-date">
        <h1 className="courseTitle">{eachList.courseTitle}</h1>
        <div className="clock-container">
          <AiFillClockCircle className="icon" />
          <p className="duration">{eachList.duration}</p>
        </div>
      </div>
      <p className="description">{eachList.description}</p>
      <div className="tag-list-container">
        {eachList.tagsList.map(eachtag => (
          <div className="para-con" key={eachtag.id}>
            <p className="tags">{eachtag.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
