import React from 'react'
import { Avatar } from "@mui/material";
import { Link } from 'react-router-dom';
import './css/QuestionWall.css'
import ReactHtmlParser from 'react-html-parser';

function QuestionWall({ question }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  let tags = [0];
  try {
    if (question.tags[0]) {
      tags = JSON.parse(question.tags[0]);
    }
  } catch (error) {
    console.error("Error parsing tags:", error);
  }
  return (
    <div className="question-wall">
      <div className="question-wall-container">
        <div className="question-wall-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>Support</span>
            </div>
            <div className="all-option">
              <p>{question?.answerDetails?.length}</p>
              <span>Answers</span>
            </div>
            <div className="all-option">
              <small>0 Views</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          <Link to={`/question?q=${question?._id}`}>{question?.title}</Link>

          <div
            style={{
              maxWidth: "90%",
            }}
          >
            <div className='answer-color'>
            {ReactHtmlParser(truncate(question.body, 200))}
              </div>
            </div>
          
            
            
            <div
              style={{
                display: "flex",
              }}
            >
              {tags.map((_tag) => (
            <>
             <span className='question-tags'>{_tag}</span>
             
            </>
            ))}
            </div>
          
          <div className="author">
            <small>{new Date(question?.created_at).toLocaleString()}</small>
            <div className="author-details">
              <Avatar src = {question?.user?.photo}/>
              <p>
                {question?.user?.displayName ? question?.user?.displayName : String(question?.user?.email).split('@')[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionWall