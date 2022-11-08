import React from 'react';

const About = () => {
    return (
        <div className='mb-10'>
            <div>
                <h2 className='text-3xl font-bold mt-10 mb-5'>ABOUT PAGE</h2>
            </div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/wLMWv6b/about.jpg" alt='' className="rounded-lg shadow-2xl w-1/2" />
                    <div>
                        <h2 className='text-2xl font-semibold text-cyan-700'>Over 10 Years Experience in This WebPage</h2>
                        <h1 className="text-5xl font-bold">Studies Can Now Be Done Online Much Easily</h1>
                        <p className="py-6">You can access 700+ different videos from 100 professional trainers for free</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;