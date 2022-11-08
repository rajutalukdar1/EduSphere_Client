import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { logOut, user } = useContext(AuthContext);

    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    const url = 'https://i.ibb.co/s2CQR5G/Cartoon-Teacher-PNG-Free-Download.png';
    const menuItems = <>
        <li className='font-semibold'><Link to='/home'>Home</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>




        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/'>My Review</Link></li>

                    <li className='font-semibold'>
                        <button onClick={handelLogOut} className='btn-ghost'>Log Out</button>
                    </li>
                </>
                :
                <>
                    <li className='font-semibold'><Link to='/login'>Login</Link></li>
                    <li className='font-semibold'><Link to='/signup'>Register</Link></li>
                </>

        }

    </>

    return (
        <div className="navbar pt-12 bg-base-100 h-28 lg:h-40 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className='w-1/3'>
                    <img className='' src={url} alt="" />
                </Link>
                <Link className=' font-semibold text-2xl' to='/'><span className='text-cyan-400'>Edu</span><span className='text-red-400'>Sphere</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="tooltip mr-4" data-tip={user?.displayName}>
                    {
                        user?.photoURL ?
                            <img className='rounded-full h-14' src={user?.photoURL} alt="" />
                            :
                            <p className=''><FaUserCircle className='w-10 h-11'></FaUserCircle></p>
                    }
                </div>
                <button className="btn btn-error hidden lg:block">Contact Me</button>
            </div>
        </div>
    );
};

export default Header;