import React from 'react';
import './Css/service.css';

function Service() {
  return (
    
    <div id="services">
   <section className='service'>

    <h2 className='title'>My Service</h2>

    <div className='service-all-box'>
          
          <div className='service-box'>
            <div className='box-title'>
                <h4>Frontned Developer</h4>
                <p>
                     I build modern, responsive, and user-friendly interfaces using HTML,
                     CSS, JavaScript, and React, ensuring smooth performance across all
                     devices and screen sizes.
                </p>
            </div>
          </div>

          <div className='service-box'>
            <div className='box-title'>
                <h4>Backend Development</h4>
                <p>
                   I develop secure and scalable backend applications with Java and
                   Spring Boot, creating RESTful APIs and implementing clean business
                   logic for real-world projects.
                </p>
            </div>
          </div>

          <div className='service-box'>
            <div className='box-title'>
                <h4>Database Design</h4>
                <p> 
                  I design efficient and well-structured databases using MySQL and
                  PostgreSQL, focusing on data integrity, optimized queries, and
                  reliable application performance.
                </p>
            </div>
          </div>

          <div className='service-box'>
            <div className='box-title'>
                <h4>Full Stack Projects</h4>
                <p>
                   I create complete web applications by integrating responsive
                   frontends, powerful backends, and well-designed databases into a
                   single seamless solution.
                </p>
            </div>
          </div>

          <div className='service-box'>
            <div className='box-title'>
                <h4>Bug Fixing</h4>
                <p>
                   I troubleshoot frontend, backend, and API issues, improving code
                   quality, fixing errors, and enhancing the overall stability and
                   performance of applications.
                </p>
            </div>
          </div>

    </div>

   </section>

   </div>

  );
}

export default Service;