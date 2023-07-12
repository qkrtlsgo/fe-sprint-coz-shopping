import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './base.css';
import { useState, useEffect } from 'react';
import Main from './page/Main';

function App() {
  const [allData, setAllData] = useState([])
  console.log(allData);
  const fetchData = async () => {
    try {
      const response = await fetch('http://cozshopping.codestates-seb.link/api/v1/products');
      const data = await response.json();
      setAllData(data);
    } catch(error) {
      console.error('Error:', error);
    } finally {
     
    }
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main allData={allData} />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
