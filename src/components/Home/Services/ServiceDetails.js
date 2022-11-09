import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const card = useLoaderData();
    const { price, name, img, details } = card;
    console.log(card)
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure className="px-8 p-8">
                        <img src={img} className="rounded-xl" alt="" />
                    </figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold">{name}</h2>
                <h2 className="card-title">Price:{price}$</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;