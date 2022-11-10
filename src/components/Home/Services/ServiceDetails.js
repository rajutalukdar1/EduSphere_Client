import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import ReviewCard from '../../ReviewCard/ReviewCard';

const ServiceDetails = () => {
    const [review, setReview] = useState([]);
    const { _id, price, name, img, details } = useLoaderData();
    const { user } = useContext(AuthContext);
    const handelReviewSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const yourName = form.yourName.value;
        const email = user?.email || 'unregistered';
        const rating = form.yourRating.value;
        const message = form.message.value;
        console.log(name, rating, message)

        const reviews = {
            service: _id,
            serviceName: yourName,
            rating,
            email,
            message,
        }

        fetch('https://assignment-no-11-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('review successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));
    }

    useEffect(() => {
        fetch('https://assignment-no-11-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReview(data))

    }, [])
    return (
        <div>
            <section>
                <div className="card lg:card-side bg-base-100 shadow-xl mt-10">
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
            </section>
            <br />
            <section>
                <div>
                    <h2 className='text-4xl text-red-400 font-bold mt-4'>Add Your Review</h2>
                    <form onSubmit={handelReviewSubmit}>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 mt-4'>
                            <input name='yourName' type="text" placeholder="Your Name" className="input input-bordered input-secondary w-full" required />
                            <input name='yourRating' type="number" placeholder="Your Rating" className="input input-bordered input-accent w-full" required />
                        </div>
                        <textarea name='message' className="textarea textarea-bordered textarea-success h-24 w-full mb-3" placeholder="Your message" required></textarea>
                        <div>
                            <button className="btn btn-wide mb-8">Review Submit</button>
                        </div>
                    </form>
                </div>
            </section>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 overflow-x-auto'>
                {
                    review.map(view => <ReviewCard
                        key={_id}
                        view={view}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default ServiceDetails;