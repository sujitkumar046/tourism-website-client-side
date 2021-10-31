import React, { useEffect, useState } from 'react';

const Packages = () => {

    const [packages, Setpackages] = useState([])

    useEffect (() => {
        fetch('https://gentle-garden-76977.herokuapp.com/services')
        .then (res=> res.json())
        .then (data => Setpackages(data))
    }, [])

    return (
        <div className='row container-fluid'>
            {
                packages.map (pack => 
                <div className='col-md-4 col-lg-4 col-sm-12 g-4'>
                    <div className='card-group h-100'>
                        <div className="card">
                        <img src={pack.img} className="card-img mx-auto d-block img-fluid" alt="" />
                        <div className='"card-body"'>
                            <h3 className='"card-title'>{pack.name}</h3>
                            <h5 className='card-text'>{pack.duration}</h5>
                            <h4>Price: <span className='text-danger'>${pack.price}</span></h4>
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-success'>Book Now</button>

                        </div>


                    </div>


                </div>


            </div> )
            }
            
        </div>
    );
};

export default Packages;