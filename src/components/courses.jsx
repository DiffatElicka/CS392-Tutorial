import './courses.css';
import { useJsonQuery } from '../utilities/fetch';

// const schedule = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');


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


const CourseList = () => {


    const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
    if (error) return <h1>Error loading course data: {`${error}`}</h1>;
    if (isLoading) return <h1>Loading course data...</h1>;
    if (!data) return <h1>No course data found</h1>;

    return (<div className='course-list'>
        
        {/* <Course key = {key} course = {course}/> */}
        {Object.entries(data.courses).map((course, key) => <Course key = {key} course = {course[1]}/> ) }

    </div>);
}
    // const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

    // <div className='course-list'>
        
    //     {/* <Course key = {key} course = {course}/> */}
    //     {Object.entries(schedule.courses).map((course, key) => <Course key = {key} course = {course[1]}/> ) }

    // </div>


  
  export default CourseList;