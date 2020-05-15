import React from 'react';
import { FooterBgImage } from '../components/PageColors'

// Basically a Jumbotron
export const Footer = () => (
    <div class="jumbotron jumbotron-fluid mb-0 pb-1 pt-0 text-white" style={{ backgroundImage: `${FooterBgImage()}`, bottom: 0, width: '100%' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#fff" fill-opacity="1" d="M0,96L34.3,85.3C68.6,75,137,53,206,74.7C274.3,96,343,160,411,170.7C480,181,549,139,617,138.7C685.7,139,754,181,823,181.3C891.4,181,960,139,1029,122.7C1097.1,107,1166,117,1234,133.3C1302.9,149,1371,171,1406,181.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
        <div class="container mt-0 pt-0">
            <p class="lead">Thank you for visiting <a href="#" className="text-white"><u>COVID-19 Live Statistics</u></a>. If you've found this site helpful and useful then please consider buying a coffee to support my work.</p>
            <a href="https://ko-fi.com/naveenbhati" class="btn btn-danger" target='blank'>Buy me a Coffee!</a>
            <hr />
            <p class="text-centre">&copy; {year()} All rights Reserved. By <a href="https://naveenbhati.com" target="blank" className="text-white"><u>Naveen Bhati</u></a></p>
        </div>
    </div>
)

const year = () => {
    let y = new Date()
    return y.getFullYear()
}