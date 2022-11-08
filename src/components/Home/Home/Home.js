import React from 'react';
import { Link } from 'react-router-dom';
import About from '../../About/About';
import Choose from '../../ChooseUs/Choose';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='home'>
                <div className='text-container'>
                    <h3>Coaching for</h3>
                    <h2>personal Growth to</h2>
                    <h2>be more Positive</h2>
                    <div>
                        <Link to='/service' className="btn btn-outline btn-primary">OUR Services</Link>
                    </div>
                    <p className='text-rose-300 font-semibold'>A teacher, also called a schoolteacher or formally an educator, is a person who helps students to acquire <br />
                        knowledge, competence, or virtue.Informally the role of teacher may be taken on by anyone <br />
                        (e.g. when showing a colleague how to perform a specific task).In some countries, teaching young people of school <br />
                        age may be carried out in an informal setting, such as within the family <br />
                        (homeschooling), rather than in a formal setting such as a school or college</p>
                </div>
            </div>
            <Services></Services>
            <About></About>
            <Choose></Choose>
        </div>
    );
};

export default Home;