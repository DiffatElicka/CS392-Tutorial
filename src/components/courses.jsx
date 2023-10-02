import './courses.css';
import { useJsonQuery } from '../utilities/fetch';
import { useState } from "react";
import TermBar from './TermBar'
const terms = {
    Fall: '',
    Winter: '',
    Spring: ''
  };
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

const CourseSelector = ({courses, selection, setSelection}) => (
    <div className="course-list">
      { 
        courses.filter((e, i) => e[1].term == selection).map(term => <Course key={term[0]} course={term[1]} />)
      }
    </div>
  );

const CourseList = () => {
    const [selection, setSelection] = useState(() => Object.keys(terms)[0]);
    
    const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
    if (error) return <h1>Error loading course data: {`${error}`}</h1>;
    if (isLoading) return <h1>Loading course data...</h1>;
    if (!data) return <h1>No course data found</h1>;
    const courses = Object.entries(data.courses);
    // console.log(courses.map((e) => e[1]));
    // console.log(courses[1]);
    return (<div><TermBar selection={selection} setSelection={setSelection}/> 
            <CourseSelector courses={courses} selection={selection} setSelection={setSelection}/></div>);
}



  
  export default CourseList;