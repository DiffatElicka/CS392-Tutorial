import { useState } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Bannar from './bannar';
import CourseList from './courses';
// import TermBar from './components/TermBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TermBar from './TermBar'
import Modal from './Modal';
import Cart from "./Cart"
import isConflict from '../utilities/timeconflict'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseForm from './CourseForm'
import Navigation from './Navigation';


const Dispatcher = ({courses}) => {
    const terms = {
        Fall: '',
        Winter: '',
        Spring: ''
      };
      const [selectedCourses, setCourseSelected] = useState([]);
      const [open, setOpen] = useState(false);
    
      const openModal = () => setOpen(true);
      const closeModal = () => setOpen(false);
    
      const toggleSelected = (item) => {
        
        // timeStringToNumber(item);
        var a = isConflict(selectedCourses, item);
        console.log(a);
        if(a){
          return ;
        }else{
          console.log("No way!!");
          return setCourseSelected(
            selectedCourses.includes(item)
            ? selectedCourses.filter(x => x !== item)
            : [...selectedCourses, item]
          );
        }
        
    }

    const [termSelection, setTermSelection] = useState(() => Object.keys(terms)[0]);

    return <div className="container">
        <BrowserRouter>
        <Routes>
        <Route path="/" element={
            <div>
            <Bannar/>
            <Navigation/>
            <div className='d-flex'><TermBar selection={termSelection} setSelection={setTermSelection}/> <button className="btn btn-outline-dark ms-auto" onClick={openModal} title='Carts'><i className="bi bi-cart4"></i></button>
            <Modal open={open} close={closeModal}>
                <Cart selected={selectedCourses} />
            </Modal> </div>
            
            <CourseList selectedCourses={selectedCourses} toggleSelected={toggleSelected} termSelection={termSelection} courses={courses}/>
            </div>
        } />
        <Route path="/:id/edit" element={<CourseForm courses={courses} />} />

        </Routes>
    </BrowserRouter>
    
      
  </div>

}
  


export default Dispatcher;