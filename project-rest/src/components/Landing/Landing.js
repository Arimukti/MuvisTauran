import React from 'react';
import ayam from './ayam-atas.png';
import lemon from './lemon.png';
import milkshake from './milkshake.png';
import orange from './orange.png';
import stroberi from './stroberi.png';
import './Landing.css';
import { Link, useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();
    const goToMenu = () => {
        navigate("/product");
    };
    return (
        <div class="container">
            <div className='up'>
                <div className='text-title'>
                    <h1>Selamat datang di MuvisTaurant</h1>
                    <p1>Kami menyediakan berbagai menu tradisional yang memiliki rasa khas.</p1>
                    <br /><br />
                    <p>"Kepuasan anda adalah prioritas kami"</p>
                </div>
                <div className='img-ayam'>
                    <img src={ayam} />
                </div>
            </div>
            <div className='btn-landing'>
                <button className='btn-left' onClick={goToMenu} >Let's Go</button>
                <button className='btn-about'>About Us</button>
            </div>
            <div className='img-add'>
                <img src={lemon} />
                <img src={orange} />
                <img src={milkshake} />
                <img src={stroberi} />
            </div>
        </div>
    );
}

export default Landing;