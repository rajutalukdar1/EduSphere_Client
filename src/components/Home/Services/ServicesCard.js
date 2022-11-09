import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import './Services.css';

const ServicesCard = ({ service }) => {
    const { _id, img, price, name, details } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl img-container">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure className="px-8 p-8">
                        <img src={img} className="rounded-xl" alt="" />
                    </figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold"><span className='text-cyan-500'>Sub:</span> {name}</h2>
                <div>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                </div>
                <p>
                    {
                        details.length > 100 ?
                            <>{details.slice(0, 100) + '...'}<Link to={`/services/${_id}`}><small>Read More</small></Link></>
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