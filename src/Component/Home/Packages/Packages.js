import React, { useEffect, useState } from 'react';

const Packages = () => {

    const [packages, Setpackages] = useState([])

    useEffect (() => {
        fetch('http://localhost:5000/services')
        .then (res=> res.json())
        .then (data => Setpackages(data))
    }, [])

    return (
        <div className='row'>
            {
                packages.map (pack => 
                <div className='col-md-4 col-lg-4 col-sm-12 g-2'>
                    <div className='card-group h-100'>
                        <div className="card">
                        <img src={pack.img} className="card-img mx-auto d-block img-fluid" alt="" />
                        <div className='"card-body"'>
                            <h2 className='"card-title'>{pack.name}</h2>
                            <h5 className='card-text'>{pack.description}</h5>
                        </div>
                        <div className='card-footer'>
                            <button>Book Now</button>

                        </div>


                    </div>


                </div>


            </div> )
            }
            
        </div>
    );
};

export default Packages;