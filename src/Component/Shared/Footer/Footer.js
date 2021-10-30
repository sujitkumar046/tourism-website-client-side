import React from 'react';

const Footer = () => {
    return (
        <div className='container-fluid mt-5 border-top pt-5'>
        <div className='row g-3'>
            <div className='col-md-4 col-lg-4 ms-3 col-sm-12' >
                
                <img className='d-block' height='40px' src="https://jthemes.net/themes/html/medservices/files/images/footer-logo.png" alt="" />

                <p className='mt-3 ms-1 text-start'>
                Our moto and vision is you to give treatment, so that you have to come less to our hospital.
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
                  <div className="ms-2">
                  <i className="fab fa-facebook-square"></i>
                  </div>
                </div>
           
                

            </div>


            <div className='col-md-4 col-lg-4 col-sm-12 ms-3'>
               <h3 className='text-start'>Our Location</h3>
               <p className='text-start'>
                121 King Street, Melbourne,

                Victoria 3000 Australia
               </p>
               <p className='text-start' >
                    E-mail: <span className='fw-bold text-underline'>hello@medservice.com</span> 
                    <br />

                    Phone: +12 9 8765 4321
               </p>


           </div>

        

            <div className='col-md-3 col-lg-3 col-sm-6 ms-3'>
                <h3 className='text-start'>Emergency Cases</h3>
                <h2 className='text-primary text-start'>01-800-123-4560</h2>
                <p  className='text-start'>If you have emergency, just call us we'll be right at your door very soon</p>

            </div>


        </div>
 
     <div className='my-5 border-top'>
         <br />
         <p className='text-start ms-4'> © 2019 <span className='fw-bold'>MedService</span> All Rights Reserved </p>
     </div>
        
      
    </div>
    );
};
    

export default Footer;