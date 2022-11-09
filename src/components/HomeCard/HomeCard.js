import React, { useEffect, useState } from 'react';
import ServicesCard from '../Home/Services/ServicesCard';

const HomeCard = () => {
    const [services, setService] = useState([]);
    // const { loading } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        fetch('https://assignment-no-11-server.vercel.app/service')
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
                    loading ? loading : (
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

export default HomeCard;