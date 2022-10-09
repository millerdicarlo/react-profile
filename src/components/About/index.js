import React from 'react'; 
// import images from assets
import myImage from '../../assets/images/myimage.jpeg';
import flowerImage from '../../assets/images/myflower.png';
import { Col } from 'react-bootstrap';


function About() {
    return(
    <section className="title">
      
      <div className="row justify-content-center" id="about-container">       
      <Col lg={6} md={12}>
      <center><img src={myImage} className="my-image" alt="nicole-profile"/></center>
      <p class="name">Miller DiCarlo</p>
      <p class="job">full stack web developer</p>
      <h2 class="education">about me</h2>
        <p>
        Hi there, I'm Miller! I switched my gears from my career in medicince to dive into Web Development. 
        Web Development has interested me since I was in college, but I never took the leap to really get into it until recently. I soon found that the technologial field suits me far better than the medical field and decided to start pursing a career in coding!
        I always believed that anything can be improved and 
        there are different ways to solve problems.
        <br></br>
        <br></br>
        I am Full Stack Web Developer based in Charlotte, NC with a Bachelor’s Degree in Biology. I also posses Emergency Medical Transport, First-Aid/CPR, and Basic Life Support Certifications.
        I am incredibly organized and hard working. I'm a naturally bubbly person and always put my all into everything that I do.
        <br></br>
        <br></br>
         </p>
      </Col>

      </div>
    </section> 
)}
  
export default About;