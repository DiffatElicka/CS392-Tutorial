import './courses.css';

const Course = ({course}) => (
    <div className='card m-1 p-2'>
        <div className='card-body'>
            <h5 className='card-title' style={{fontWeight: 'bold'}}> {course.term} CS {course.number}</h5>
            <p className='card-text'>{course.title} </p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">{course.meets}</li>
        </ul>
    
    
    </div>
    // console.log(course[1])
);


const CourseList = ({schedule}) => (
    <div className='course-list'>
        {/* <Course key = {key} course = {course}/> */}
        {Object.entries(schedule.courses).map((course, key) => <Course key = {key} course = {course[1]}/> ) }

    </div>

);
  
  export default CourseList;