import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/UserContext';
import UseTitle from '../UseTitle/UseTitle';

const AddServices = () => {
    const [myService, setMyService] = useState([]);
    const { user } = useContext(AuthContext);
    UseTitle('Add Services')

    const handelAddServiceCard = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.subjectName.value;
        const price = form.totalPrice.value;
        const email = user?.email || 'unregistered';
        const img = form.photoURL.value;
        const details = form.allDetails.value;
        // console.log(img, price, details, name, email);

        const service = {
            name: name,
            price,
            email,
            img,
            details
        }


        fetch('https://assignment-no-11-server.vercel.app/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    toast('Services add successfully', {
                        position: "top-center"
                    });
                    form.reset();
                }
            })
            .catch(er => console.error(er));
    }

    useEffect(() => {
        fetch('https://assignment-no-11-server.vercel.app/service')
            .then(res => res.json())
            .then(data => setMyService(data))

    }, [])

    return (
        <div>
            <h2 className='text-4xl text-red-400 font-bold mt-4'>Add Your Services</h2>
            <form onSubmit={handelAddServiceCard}>
                <div className='grid grid-cols-1 lg:grid-cols-1 mt-8 mb-8 gap-4 '>
                    <h2 className='text-start text-xl font-bold'><span className='text-orange-500'>Photo</span> URL</h2>
                    <input type="text" name='photoURL' placeholder="PhotoURL" className="input input-bordered input-secondary w-full" />
                    <h2 className='text-start text-xl font-bold'>Subject <span className='text-orange-500'>Name</span></h2>
                    <input type="text" name='subjectName' placeholder="Subject Name" className="input input-bordered input-primary w-full " />
                    <h2 className='text-start text-xl font-bold'><span className='text-orange-500'>Total</span> Price</h2>
                    <input type="text" name='totalPrice' placeholder="Total Price" className="input input-bordered input-accent w-full " />
                    <h2 className='text-start text-xl font-bold'>All <span className='text-orange-500'>Details</span> </h2>
                    <input type="text" name='allDetails' placeholder="All Details" className="input input-bordered input-success w-full " />
                </div>
                <div>
                    <button className="btn btn-wide mb-8">Service Submit</button>
                </div>
            </form>

            <div>

            </div>
        </div>
    );
};

export default AddServices;