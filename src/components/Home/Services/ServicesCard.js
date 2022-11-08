import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const ServicesCard = ({ service }) => {
    const { _id, img, price, name, details } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl img-container">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                </div>
                <p>
                    {
                        details.length > 100 ?
                            <>{details.slice(0, 110) + '...'}<Link to={`/details`}><small>Read More</small></Link></>
                            :
                            <>{details}</>
                    }
                </p>
                <Link to={`/services/${_id}`}>
                    <div className="btn btn-primary rounded-xl">Details</div>
                </Link>
                {/* <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Check Out</button>
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default ServicesCard;