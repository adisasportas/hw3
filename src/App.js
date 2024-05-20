import React from 'react';
import { StudentProvider } from './context/Context';
import StudentForm from './components/StudentFrom';
import StudentList from './components/StudentList';

const App = () => {
  return (
    <StudentProvider>
      <div>
        <h1>Student Management App</h1>
        <StudentForm />
        <StudentList />
      </div>
    </StudentProvider>
  );
};

export default App;
