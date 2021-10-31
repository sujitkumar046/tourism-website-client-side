import React from 'react';

const PlacesToGo = () => {
    return (
        <>
        <div className='container-fluid my-5'>
        <div className=''>
            <h5 className='text-primary'>Choose Your</h5>
            <h1 className='fs-1 fw-bold'>Winter Resort</h1>

        </div>
        <div className= 'row container-fluid my-5'>
            <div className='col-md-4'>
            <img height='350px' width='350px' className='rounded-circle' src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/destinations-featured-img-8-1.jpg" alt="" /> <br /> <br />
            <h3>Kerala</h3>
            </div>
            <div className='col-md-4'>
            <img height='350px' width='350px' className='rounded-circle' src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/destinations-featured-img-9-1.jpg" alt="" /> <br /> <br />
            <h3>Jaipur</h3>
            </div>
            <div className='col-md-4'>
            <img height='350px' width='350px' className='rounded-circle' src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/destinations-featured-img-10-1.jpg" alt="" /> <br /> <br />
            <h3>Switzerland</h3>
            </div>

            
        </div>

        </div>
        
        </>
    );
};

export default PlacesToGo;