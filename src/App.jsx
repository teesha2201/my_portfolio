import { useState } from 'react';
import './App.css'
import Headers from "./Components/Headers";
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer';
import ResumePdf from './Components/ResumePdf';

function App() {
  const pdfUrl ="./assets/Resumefile/TeeshaGupta_resume2024june.pdf";

  return (
    <>
     <div className='app'>
      <BrowserRouter>
        <Headers/>
        
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
