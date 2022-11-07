import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/UserContext';
import './Login.css';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const handelSignIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user.uid) {
                    toast('Login successfully', {
                        position: "top-center"
                    });
                }
                form.reset();
                // setError('');
                // navigate(from, { replace: true });

            })
            .catch(error => {
                console.error(error);
                // setError(error.message)
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
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSignIn} className="card-body">
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
                            <label className="label">
                                <Link to="" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <small><p>Don't have a accounts?<Link to='/signup'>Sign Up now</Link></p></small>
                        {/* <p className='text-red-600'>{error}</p> */}
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

export default Login;