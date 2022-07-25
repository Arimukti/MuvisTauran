import React from 'react';
import "./AboutUs.css";
import muvis from "../brand-muvis.png";

const AboutUs = () => {
    return (
        <>
            <div className='container'>
                <div className='left-text'>
                    <img src={muvis} />
                </div>
                <div className='right-text'>
                    About Us
                    <hr></hr>
                    <p>Kami adalah sebuah restaurant yang baru berdiri sekitar 3 tahun. Kami memiliki beberapa menu sederhana yang biasa anda jumpai di pinggir jalan atau warteg. Karena visi restaurant kami bisa terjangkau semua kalangan.</p>
                </div>
            </div>
            <div className='contact-us'>
                Contact Us:
                Hp: 081326380336
                email: arimuktiz98@gmail.com</div>
        </>
    );
};

export default AboutUs;