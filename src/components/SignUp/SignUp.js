import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/UserContext';

const SignUp = () => {
    const [error, setError] = useState('')
    const { createUser, signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handelSubmit = event => {
        event.preventDefault();

        const form = event.target;
        // const fName = form.firstName.value;
        // const lName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user.uid) {
                    toast('Login successfully', {
                        position: "top-center"
                    });
                }
                setError('');
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);

                if (user.uid) {
                    toast('Login successfully', {
                        position: "top-center"
                    });
                }
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error('error', error);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Register now!!!!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" name='firstName' placeholder="First Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <label className="label">
                            <Link to="/login" className="label-text-alt link link-hover">Already, Have an Accounts?</Link>
                        </label>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <p className='text-red-600'>{error}</p>
                    </form>
                </div>
                <p className='text-center'>-------------Or-------------</p>
                <div>
                    <Link onClick={handleGoogleSignIn}>
                        <div className='flex justify-content-center align-items-center mt-3'>
                            <div className='flex justify-between items-center login-container'>
                                <div className='w-10 h-10 ml-1'>
                                    <img
                                        src='https://i.ibb.co/7yz77Hj/google.png' alt=''
                                    ></img>
                                </div>
                                <div className='text-black font-semibold'>
                                    Continue with Google
                                </div>
                                <div className='mr-6'>

                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;