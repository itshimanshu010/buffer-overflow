import React from 'react'
import './index.css'
import MainQuestion from './MainQuestion'
import Sidebar from '../BufferOverFlow/Sidebar'


function index() {
  return (
    <div className='buffer-index'>
        <div className='buffer-index-content'>
            <Sidebar />
            <MainQuestion />
        </div>   
    </div>
  )
}

export default index