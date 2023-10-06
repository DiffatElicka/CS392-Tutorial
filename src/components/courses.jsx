import './courses.css';
import { useJsonQuery } from '../utilities/fetch';
import { useState } from "react";
import TermBar from './TermBar'


// const terms = {
//     Fall: '',
//     Winter: '',
//     Spring: ''
//   };
// const schedule = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');


const Course = ({id, course, selectedCourses, toggleSelected}) => {
    return (
        <div className='card m-1 p-2' onClick={() => toggleSelected(course)}>
            <div className={`card-body ${selectedCourses.includes(course) ? 'selected' : ''}`} >
                <h5 className='card-title' style={{fontWeight: 'bold'}}> {course.term} CS {course.number} <img src='../../dist/assets/check-mark-button-svgrepo-com.svg' className={`check-mark ${selectedCourses.includes(course) ? 'checked' : ''}`}/></h5>
                <p className='card-text'>{course.title} </p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{course.meets}</li>
                
            </ul>
            
        
        
        </div>
        // console.log(course[1])
    )
} 

const CourseSelector = ({courses, termselection, selectedCourses, toggleSelected}) => (
    <div className="course-list">
      { 
        courses.filter((e, i) => { return e[1].term == termselection}).map(term =>{;return  <Course key={term[0]} id={term[0]} course={term[1]} selectedCourses={selectedCourses} toggleSelected={toggleSelected} />})
      }
    </div>
  );

const CourseList = ({selectedCourses, toggleSelected, termSelection}) => {
    // const [termSelection, setTermSelection] = useState(() => Object.keys(terms)[0]);

    const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
    if (error) return <h1>Error loading course data: {`${error}`}</h1>;
    if (isLoading) return <h1>Loading course data...</h1>;
    if (!data) return <h1>No course data found</h1>;
    const courses = Object.entries(data.courses);
    // console.log(courses.map((e) => e[1]));
    // console.log(selectedCourses);
    return (<div>
            
            <CourseSelector courses={courses} termselection={termSelection} selectedCourses={selectedCourses} toggleSelected={toggleSelected}/></div>);
}



  
  export default CourseList;