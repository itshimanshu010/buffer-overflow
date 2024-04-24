import React, { useState} from 'react'
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { TagsInput } from 'react-tag-input-component' 
import './index.css'
//import ChipsArray from "./TagsInput";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
//import {WithContext as TagsInput} from  'react-tag-input'

function Question() {
  const user = useSelector(selectUser);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTag] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)


  const handleQuill = (value) => {
    setBody(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title !== "" && body !== "") {
      setLoading(true);
      const bodyJSON = {
        title: title,
        body: body,
        tag: JSON.stringify(tags),
        user: user,
      };
      await axios 
        .post("/api/question", bodyJSON)
        .then((res) => {
          // console.log(res.data);
          alert("Question added successfully");
          setLoading(false);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  return (
    <div className='add-question'>
        <div className='add-question-container'>
            <div className='head-title'>
                <h1><center>Ask a Question</center></h1>
            </div>
            <div className='question-container'>
              <div className='question-options'>
                  <div className='question-option'>
                      <div className='title'>
                        <h3>Title</h3>
                        <small>
                        Be specific and imaging you're asking a question to another person
                        </small>
                        <input onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Add Question Title' />
                      </div>
                  </div>
               <div className='question-option'>
               <div className='title'>
                        <h3>Body</h3>
                        <small>
                        Be specific and imaging you're asking a question to another person
                        </small>
                        <ReactQuill onChange={handleQuill} value={body}
                  className='react-quill' theme='snow'/>
                      </div>
               </div>
               <div className='question-option'>
                      <div className='title'>
                        <h3>Tags</h3>
                        <small> <b>
                        Add up to 5 tags to describe what your question is about</b>
                        </small>
                        
                        <TagsInput value={tags} onChange={setTag} name='tags' placeHolder='Press Here to Add New Tag'  style={{ border: 'solid black' }} />
                        {/* <ChipsArray /> */}
                        <button disabled={loading} type='submit' onClick={handleSubmit} className='button'>{ loading ? "Adding Question..." : "Add Your Question"}</button>
                      </div>
               </div>
              </div>
            </div>
            
        </div>

    </div>
  )
}

export default Question