// Write your code here
import './index.css'

import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {eachList} = props
  return (
    <div>
      <img src={eachList.imageUrl} alt="project" className="projectUrl" />
      <div className="flex-con-details">
        <h1 className="projectTitle">{eachList.projectTitle}</h1>
        <div className="con-details">
          <AiFillCalendar className="icon" />
          <p className="duaration">{eachList.duration}</p>
        </div>
      </div>
      <p className="description">{eachList.description}</p>
      <button type="button" className="button">
        <a href={eachList.projectUrl} className="achor-element">
          Visit
        </a>
      </button>
    </div>
  )
}

export default ProjectTimelineCard
