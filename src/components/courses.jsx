const Course = ({course}) => (
    <p>{course.term} CS {course.number}: {course.title}</p>
    // console.log(course[1])
  );


const CourseList = ({schedule}) => (
    <div>
        {/* <Course key = {key} course = {course}/> */}
        {Object.entries(schedule.courses).map((course, key) => <Course key = {key} course = {course[1]}/> ) }

    </div>

);
  
  export default CourseList;