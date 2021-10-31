import React from 'react';

const Footer = () => {
    return (
        <div className='container-fluid mt-5 mb-2 border-top pt-5 bg-warning'>
        <div className='row g-3'>
            <div className='col-md-4 col-lg-4 ms-3 col-sm-12' >
                
                <img className='d-block bg-primary' height='40px' src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/logo-white.png" alt="" />

                <p className='mt-3 ms-1 text-start'>
                Our moto and vision is you to provide best possible opportunity to discover arround the world!
                </p>

                <div className="d-flex text-center fs-3 ms-1 ">
                  <div>
                  <i class="fab fa-facebook"></i>
                  </div>
                  <div className="ms-2">
                    <i className="fab fa-twitter"></i>
                  </div>
                  <div className="ms-2">
                    <i className="fab fa-youtube"></i>
                  </div>
                </div>
           
                

            </div>


            <div className='col-md-4 col-lg-4 col-sm-12 ms-3'>
               <h3 className='text-start'>Our Location</h3>
               <p className='text-start'>
               Broadway & Morris St, New York
               </p>
               <p className='text-start' >
                    E-mail: <span className='fw-bold text-underline'>setsail@code.com</span> 
                    <br />

                    Phone: 1562 837 5209
               </p>


           </div>

        

            <div className='col-md-3 col-lg-3 col-sm-6 ms-3'>
                <h3 className='text-start'>Hotline</h3>
                <h2 className='text-danger text-start'>01-800-123-4560</h2>
                <p  className='text-start'>Our 24/7 customer care will help you out!</p>
                <p className='text-start m-0'> © 2019 <span className='fw-bold'>Setsail</span> All Rights Reserved </p>

            </div>


        </div>
 
  
      
    </div>
    );
};
    

export default Footer;