import React from 'react'
import "./about.css"

function about() {
  return (
    <div className="home-container-1 about">
      
      <div className="home-container-2">
        <div className="main-bar" >
          <h3 className="about-h3">
            About Buffer OverFlow
          </h3>
          
          <p className="about-p">
           Welcome to Buffer OverFlow –  Empowering Knowledge Exchange with MERN!<br /></p><br/>
           <h3 className="about-h3">
           Our Mission:
          </h3>
          <p className="about-p">
          Buffer OverFlow  is a dynamic online platform crafted using the powerful MERN stack – MongoDB, Express.js, React, and Node.js. This robust combination of technologies allows us to deliver a seamless and responsive user experience, providing you with a cutting-edge platform for collaborative knowledge sharing.
            <br/>
            Our mission is to bridge the gap between students and their dream careers. We aim to provide a comprehensive and user-friendly platform that not only assesses your skills but also guides you on the path to success.
            </p><br />
            <h3 className="about-h3">
            Current Development Focus:
          </h3>

          <p className="about-p">
          As we are currently in the development phase, our team is diligently working on user modules to elevate your user experience and enhance the capabilities of our platform. We are committed to creating a space that not only meets but exceeds your expectations.          </p>
          <br />
          <p className="about-p">
            In this website, the following features have been incorporated:
          </p>
          <div className='points'>
          <ul>
            <li className="about-p">
              User <span className="keyword">authentication</span> (Log In /
              Sign up).
            </li>
            <li className="about-p">
              Asking and answering <span className="keyword">questions.</span>
            </li>
            <li className="about-p">
              <span className="keyword">Search</span> function for questions,
              users, and comments.
            </li>
            <li className="about-p">
              Ability to <span className="keyword">support</span> on questions and{" "}
              <span className="keyword">delete</span> questions/answers.
            </li>
           
            <li className="about-p">
              Random <span className="keyword">avatars</span> are assigned to
              each user's profile, with the user being able to change it.
            </li>
         
            <li className="about-p">
              Platform for <span className="keyword">sharing</span> programming
              experiences with community.
            </li>
            <li className="about-p">
              A separate <span className="keyword">notifications</span> page
              where all friend requests, user comments' likes and dislikes and
              when their question is answered will be featured.
            </li>
            <li className="about-p">
              Added animations with{" "}
              <span className="keyword">Framer Motion</span> and{" "}
              <span className="keyword">GSAP</span>, creating an engaging user
              experience.
            </li>
          
          </ul>
          </div>
          <br />
          <hr />
          <br />
          <h3 className="about-h3">
            Teams
          </h3>
          
          <h3>Himanshu Jaiswal <a href="https://www.linkedin.com/in/itshimanshu010/" target="_blank" rel="noopener noreferrer">Linkedin</a></h3>
          <h3>Himanshu Kumar <a href="https://www.linkedin.com/in/himanshu-kumar-81a050233/" target="_blank" rel="noopener noreferrer">Linkedin</a></h3>
        
          </div>
        </div>
      
      </div>
   
  )
}

export default about