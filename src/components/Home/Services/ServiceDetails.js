import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const card = useLoaderData();
    const { price, name, img, details, services } = card;
    console.log(card)
    return (
        <div className='card w96 bg-base-100 shadow-xl'>
            <figure><img src={img} alt="Shoes" /></figure>
            <div className='card-body'>
                <h2 className='card-title'>
                    {name}
                </h2>
                <div>
                    <p className='card-title'>Price: {price}$</p>
                </div>
                <div>
                    <p>{details}</p>
                </div>
                <p>{services}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;