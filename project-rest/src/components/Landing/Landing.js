import React from 'react';
import ayam from './ayam-atas.png';
import lemon from './lemon.png';
import milkshake from './milkshake.png';
import orange from './orange.png';
import stroberi from './stroberi.png';
import delivery from './deli.png';
import './Landing.css';
import { Link, useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();
    const goToMenu = () => {
        navigate("/product");
    };

    const gotoAbout = () => {
        navigate('/about');
    };
    return (
        <>
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
                    <button className='btn-about' onClick={gotoAbout}>About Us</button>
                </div>
                {/* <div className='img-add'>
                <img src={lemon} />
                <img src={orange} />
                <img src={milkshake} />
                <img src={stroberi} />
            </div> */}
            </div>
            <div className='service'>
                <div className='tab-service'>
                    <img src='https://cdn-icons-png.flaticon.com/512/2905/2905662.png' />
                    <br></br>
                    <p1>Table service</p1>
                    <p>Pelayanan reguler atau pengunjung makan di tempat di meja yang sudah disediakan</p>
                </div>
                <div className='self-service'>
                    <img src='https://cdn-icons-png.flaticon.com/128/5277/5277755.png' />
                    <br></br>
                    <p1>Self Service</p1>
                    <p>Pengunjung dipersilakan mengambil sendiri menu yang telah disediakan</p>
                </div>
                <div className='take-away'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3532/3532548.png' />
                    <br></br>
                    <p1>Take Away Service</p1>
                    <p>Pengunjung dapat memesan makanan untuk dapat dibawa pulang.</p>
                </div>
                <div className='delivery-order'>
                    <img src='https://icon-library.com/images/icon-delivery/icon-delivery-7.jpg' />
                    <br></br>
                    <p1>Delivery Order</p1>
                    <p>Bagi customer yang menginginkan pesanan diantar ke alamat tujuan silakan contact us melalui HP atau email</p>
                </div>
            </div>
        </>

    );
}

export default Landing;