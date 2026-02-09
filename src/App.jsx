import { useEffect, useRef, useState } from 'react';
import './App.css'

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { RoughNotation } from "react-rough-notation";


import { useInView } from 'react-intersection-observer';





function App() {

  


const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 }); 

 


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          } else{
            entry.target.classList.remove('show')

          }
        })
      },
      { threshold: 0.5 }
    )

    // ← Here is where you put your querySelector
    const meImg = document.querySelector('.me-hello-image')
    if (meImg) observer.observe(meImg)

    const paragraph = document.querySelector('.hi-low-container p')
    if (paragraph) observer.observe(paragraph)

    const timeLine = document.querySelectorAll('.AM-line')
    timeLine.forEach(line => observer.observe(line))

    const notate = document.querySelector('.notate')
    if(notate) observer.observe(notate)




    return () => observer.disconnect() // cleanup  
  }, [])  





  return (
    <>
      <div className="container-1">
        <div className='hi-low-container'>
        <h2>Hi! I'm <span className='gradient-hi'>JOSHUA</span></h2>
        <p>Welcome to my Portfolio</p>
        </div>
        {/* my pic here */}
        <img className="me-hello-image" src="src/assets/hiMe.jpg"/>

      </div>

{/* ------short paragraph about me------- */}

<div className="container-2">

    <p>Starting fresh and learning to become a great web developer. As I improve my skills further, I aim to increase your company's productivity and quality.                   <RoughNotation
                    type="underline"
                    show={true}       // controls animation
                    color="#F52727"
                    padding={[2, 2]}
                    strokeWidth={5}
                    animationDuration={2000} 
                    animationDelay={1000}
                    iterations={5}
                  >
                    I look forward working with You!
                  </RoughNotation></p>

    {/* image of a search term work icon in ppt transparent behind the paragraph. container height must  be 25% smaller than the others */}

</div>

{/* ------short paragraph about me----end--- */}

{/* ---------------ABOUT ME----------------------- */}
      <div className="container-3">
        <h2>About Me</h2>
        <div className="container-AM">
            <div className="box-AM">
              <hr className='AM-line'/> 

                {/* image?? */}
                <h3>College</h3>
              <p>
                Studied in De La Salle University Dasmariñas. Finishing my course of{" "}
                <span ref={ref}>
                  <RoughNotation
                    type="highlight"
                    show={inView}       // controls animation
                    color="#9CF527"
                    padding={[5, 5]}
                    animationDuration={2000} 
                  >
                    Computer Engineering
                  </RoughNotation>
                </span>
              </p>

              </div>

                          <div className="box-AM">
                {/* image?? */}
                <h3>Computer Engineering</h3>
                <p>The course that I took allowed me to venture into different kinds of engineering. About electricity or circuits. But the one that I took and became more proefficient in is {""}           <span ref={ref}>
                  <RoughNotation
                    type="highlight"
                    show={inView}       // controls animation
                    color="#F5a327"
                    padding={[5, 5]}
                    animationDuration={2000} 
                    animationDelay={500}
                  >
                    Web Development
                  </RoughNotation>
                </span> </p>
              <hr className='AM-line'/>
              </div>


              

              <div className="box-AM">
                <hr className='AM-line'/>
                {/* image?? */}
                <h3>Web Development</h3>
                <p>As I finish my course and graduate, I am improving my skills of {""}                 
                  <span ref={ref}>
                  <RoughNotation
                    type="box"
                    show={inView}       // controls animation
                    color="#F52727"
                    padding={[2, 2]}
                    strokeWidth={2}
                    animationDuration={2000} 
                    animationDelay={1000}
                    iterations={10}
                  >
                    Front End Web Dev
                  </RoughNotation>
                </span></p>
                

              </div>
              
              
            </div>                            

      </div>
        

{/* ---------------ABOUT ME---end----------------------- */}




      {/* -------MY WORKS---------- */}

      <div className="container-4">

        <h2>My Works</h2>
        <h3>Hover for more info</h3>

          <div className="grid-MW">
              {/* Portfolio itself */}
              <div className="box-MW"> 
                
                  <div className="topbar-MW">
                    Simple Merch Shop Website

                  </div>

                  <div className="botbar-MW">
                    <img src="src/assets/gifs/merch_web.gif" />
                    < a href="https://github.com/jshaAbls/simple_merch_website" target="_blank" el="noopener noreferrer"className="visit-btn">
  Visit the Website
</a>
                  </div>

              </div>

            {/* Shop gallery thingy */}
              <div className="box-MW">
                
                  <div className="topbar-MW">
                    Realtor Website (Landing Page)

                  </div>

                  <div className="botbar-MW">
                    <img src="src/assets/gifs/lux_web.gif" />
                                        < a href="https://github.com/jshaAbls/luxury-demoweb" target="_blank" el="noopener noreferrer"className="visit-btn">
  Visit the Website
</a>
                  </div>
              </div>


            {/* WIPs */}
              <div className="box-MW">
                
                  <div className="topbar-MW">
                    This Portfolio
                  </div>

                  <div className="botbar-MW">
          Gets improved as I go further. Continuous work in Progress

                  </div>
              </div>

              <div className="box-MW">
                
                  <div className="topbar-MW">
                    WORK IN PROGRESS

                  </div>

                  <div className="botbar-MW">
                    WORK IN PROGRESS :)


                  </div>
              </div>

          </div>
        
      </div>

      {/* -------MY WORKS---end--------- */}

      {/*-----------MY SOCIALS---------------- */}
      <div className="container-5">
        <h2>My Socials</h2>
        <p>Visit my profiles and email here!</p>
        
        <div className="container-icon">
          <div className="social-icons">

            <div className="email-icon">
              <FaEnvelope  />
              <span className="hovetText">joshua0913abalos@gmail.com</span>
            </div>



            <a href="https://www.github.com/jshaAbls"
                target="_blank"
                rel="noopener noreferrer">

            <FaGithub  />
            </a>


            <a
              href="https://www.linkedin.com/in/jshabls"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin />
            </a>

            
          </div>
        </div>

      </div>

      {/*-----------MY SOCIALS---end------------- */}

    </>
  )
}

export default App
