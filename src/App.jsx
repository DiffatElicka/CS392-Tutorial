import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Bannar from './components/bannar';
import CourseList from './components/courses';
import Chooser from './components/chooser';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TermBar from './components/TermBar'

// const App = () => (
//   ...
// );


const queryClient = new QueryClient();
const App = () => {
  const [selectedCourses, setCourseSelected] = useState([]);

  const toggleSelected = (item) => setCourseSelected(
    selectedCourses.includes(item)
    ? selectedCourses.filter(x => x !== item)
    : [...selectedCourses, item]
  );
  return <div className="container">
    <QueryClientProvider client={queryClient}>
      <Bannar/>
      <CourseList selectedCourses={selectedCourses} toggleSelected={toggleSelected}/>
    </QueryClientProvider>
      
  </div>

}
  

export default App;
