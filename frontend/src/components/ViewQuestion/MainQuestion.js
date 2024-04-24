import { Bookmark, History } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"
import "./index.css"

function MainQuestion() {
    const [show, setShow] = useState(false);
  return (
    <div className="main">
    <div className="main-container">
      <div className="main-top">
        <h2 className="main-question">This is Question Title </h2>
        <Link to="/add-question">
          <button>Ask Question</button>
        </Link>
    </div>

      <div className="main-desc">
        <div className="info">
          <p>Timestamp</p>

          <p>Active<span>today</span></p>

          <p>Viewed<span>43 times</span></p>
        </div>
      </div>

      <div className="question-wall">
        <div className="question-wall-container">
          <div className="question-wall-left">
            <div className="all-options">
              <p className='arrow'>▲</p>

              <p className="arrow">0</p>

              <p className="arrow">▼</p>

              <Bookmark />

              <History />
            </div>
          </div>
          <div className="question-answer">
            <p>This is question body</p>
            <div className="author">
              <small>asked "Timestamp"</small>
              <div className="author-details">
                <Avatar />
                <p>Author name</p>
              </div>
            </div>
            <div className="comments">
              <div className="comment">
               <p>This is commment - <span>User name</span><small>Timestamp</small></p>
              </div>
             
              <p onClick={() => setShow(!show)}>Add a comment</p>
              {
                show && (
                <div className="title">
                  <textarea
                    style={{
                      margin: "5px 0px",
                      padding: "10px",
                      border: "1px solid rgba(0, 0, 0, 0.2)",
                      borderRadius: "3px",
                      outline: "none",
                    }} 
                    type="text"
                    placeholder="Add your comment..."
                    rows={5}
                    >
                      
                    </textarea>
                    <button 
                  style={{
                    maxWidth:"fit-content",
                     
                   }}>
                    Add comment
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
             <div 
              style={{
                  flexDirection: "column",
                    }} 
              className='question-wall'>

                <p style={{
              marginBottom: "20px",
              fontSize: "1.3rem",
              fontWeight: "300",
            }}>No. Of Answer</p>
                <div className='question-wall-container'>
                    <div className="question-wall-left">
                        <div className="all-options">
                            <p className="arrow">▲</p>
                            <p className="arrow">0</p>
                            <p className="arrow">▼</p>
                            <Bookmark />
                            <History />
                        </div>
                     </div>
                     <div className="question-answer">
                        <p>This is question body</p>
                            <div className="author">
                                <small>asked "Timestamp"</small>
                                    <div className="author-details">
                                        <Avatar />
                                        <p>Author name</p>
                                    </div>
                            </div>
                      </div>
                    </div>
        </div>      
       </div>
          <div className='main-answer'>
                <h3 style={{
            fontSize: "22px",
            margin: "10px 0",
            fontWeight: "400",
          }}>Your Answer</h3>
                <ReactQuill className='react-quill' theme='snow' style={{height:"200px"}} />
                
          </div>
          <button style={{
          marginTop: "40px",
          maxWidth: "fit-content",
        }}>Post Your Answer</button>
          
    </div>
    
         
  )
}

export default MainQuestion