import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Bannar from './components/bannar';
import CourseList from './components/courses';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


// const App = () => (
//   ...
// );
const queryClient = new QueryClient();
const App = () => (
  <div className="container">
    <QueryClientProvider client={queryClient}>
      <Bannar/>
      
      <CourseList/>
    </QueryClientProvider>
      
  </div>
);

export default App;
