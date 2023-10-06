import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Bannar from './components/bannar';
import CourseList from './components/courses';
// import TermBar from './components/TermBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TermBar from './components/TermBar'
import Modal from './components/Modal';
import Cart from "./components/Cart"

// const App = () => (
//   ...
// );


const queryClient = new QueryClient();
const App = () => {
  const terms = {
    Fall: '',
    Winter: '',
    Spring: ''
  };
  const [selectedCourses, setCourseSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const toggleSelected = (item) => setCourseSelected(
    selectedCourses.includes(item)
    ? selectedCourses.filter(x => x !== item)
    : [...selectedCourses, item]
  );
  
  const [termSelection, setTermSelection] = useState(() => Object.keys(terms)[0]);

  return <div className="container">
    <QueryClientProvider client={queryClient}>
      <Bannar/>
      <div className='d-flex'><TermBar selection={termSelection} setSelection={setTermSelection}/> <button className="btn btn-outline-dark ms-auto" onClick={openModal} title='Carts'><i className="bi bi-cart4"></i></button>
      <Modal open={open} close={closeModal}>
          <Cart selected={selectedCourses} />
      </Modal> </div>
      
      <CourseList selectedCourses={selectedCourses} toggleSelected={toggleSelected} termSelection={termSelection}/>
    </QueryClientProvider>
      
  </div>

}
  

export default App;
