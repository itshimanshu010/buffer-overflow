import React, { useEffect, useState } from 'react'
import './css/index.css'
import Main from './Main'
import Sidebar from './Sidebar'
import axios from 'axios';


function Index() {

    const [questions, setQuestions] = useState([]);
  
    useEffect(() => {
      async function getQuestion() {
        await axios.get("/api/question").then((res) => {
          setQuestions(res.data.reverse());
          //console.log(res.data)
        });
      }
      getQuestion();
    }, []);

  return (
    <div className='buffer-index'>
        <div className='buffer-index-content'>
            <Sidebar />
            <Main questions={questions}  />
        </div>   
    </div>
  )
}

export default Index