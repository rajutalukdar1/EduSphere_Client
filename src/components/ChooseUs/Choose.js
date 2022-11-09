import React from 'react';

const Choose = () => {
    return (

        <div>
            <div>
                <h2 className='text-3xl font-bold text-orange-400 mt-10 mb-5'>Why Choose Us</h2>
            </div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/ZzwP1HR/mmmm.jpg" alt='' className=" rounded-lg shadow-2xl w-10/12" />
                    <div>
                        <h1 className="text-5xl font-bold">We Are Different FromOther To Provide Services</h1>
                        <p className="py-6">We create experiences that are attractive, simple to use, and drive results for your company. We are not your typical web development agency. Sure, we're strong on corporate branding and web design, but we're really focused on making things work for your audience ... and your business.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;