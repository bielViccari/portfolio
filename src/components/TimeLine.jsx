import { StarFill } from 'react-bootstrap-icons';
import { SchoolIcon } from './SchoolIcon';
import { WorkIcon } from './WorkIcon';

import timelineElements from './timelineElements';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export const TimeLine = () => {
    let workIconStyles = {background: "#F55139"}
    let schoolIconStyles = {background: "#f9c74f"}
    return (
        <div className='verticalTimeLineDiv'>
            <h3 className='timeLineText'>Minha trajetória</h3>
            <VerticalTimeline className='verticalTimeLine'>
                {
                    /*Mapeia os elementos do arquivo timeLineElements, contendo os objetos com informações para os cards*/
                    timelineElements.map(element => {
                        let isWorkIcon = element.icon === "work";
                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentArrowStyle={isWorkIcon ? { borderRight: '7px solid  #F55139' } : { borderRight: '7px solid  #f9c74f' }}
                                key={element.key}
                                date={element.date}
                                dateClassName='date'
                                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                                contentStyle={{ borderTop: `3px solid ${isWorkIcon ? workIconStyles.background : schoolIconStyles.background}` }}
                            >

                                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                                <h6 className="vertical-timeline-element-subtitle">{element.location}</h6>
                                <p id='description'><small>{element.description}</small></p>

                            </VerticalTimelineElement>
                        )
                    })
                }
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarFill />}
  />
            </VerticalTimeline>
        </div>
    )
}