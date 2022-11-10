import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import UseTitle from '../../UseTitle/UseTitle';
import ServicesCard from './ServicesCard';



const Services = () => {
    UseTitle('Services')
    const [services, setService] = useState([]);
    // const { loading } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    useEffect(() => {
        fetch('https://assignment-no-11-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setService(data))

    }, [])
    return (
        <div>
            <div className='text-center mb-4 mt-10'>
                <p className="text-3xl font-bold text-orange-600">Services</p>
                <h2 className='text-5xl font-semibold'>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which don't look even slightly believable. </p>
            </div>
            <div>
                {
                    loading ? <>
                        <h1>loading...</h1></> : (
                        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            {
                                services.map(service => <ServicesCard
                                    key={service._id}
                                    service={service}
                                ></ServicesCard>)
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;