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
import isConflict from './utilities/timeconflict'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseForm from './components/CourseForm'
import Dispatcher from './components/Dispatcher';
import { useJsonQuery } from './utilities/fetch';

// import { it } from 'vitest';


// const App = () => (
//   ...
// );


const queryClient = new QueryClient();

const Data = () => {
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
  if (error) return <h1>Error loading course data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading course data...</h1>;
  if (!data) return <h1>No course data found</h1>;
  const courses = Object.entries(data.courses);
  // console.log(courses);
  return <Dispatcher courses={courses}>

  </Dispatcher>;
}

const App = () => {

  return <QueryClientProvider client={queryClient}>
    <Data/>
  </QueryClientProvider>



}
  

export default App;
