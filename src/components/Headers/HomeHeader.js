import React from 'react';
import { PageColor } from '../PageColors'

export const HomeHeader = () => {

    return (
        <div className="jumbotron jumbotron-fluid mb-0 pb-0 pt-2 text-white" style={{ backgroundImage: 'linear-gradient(127deg, rgba(113,118,136,1) 0%, rgba(113,118,136,1) 0%)', bottom: 0, width: '100%' }}>
            <div className="container">
                <h1 className="display-4">Live Rolling updates on coronavirus disease (COVID-19)</h1>
                <hr />
                <p className="lead p-0">
                    Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.<br />
                    <br />The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).<br />
                    <span className="hd-info">Stay Home. Stay Safe.</span>
                    <hr />
                    <span className="hd-source">Source: <a href="https://www.who.int/health-topics/coronavirus#tab=tab_1" target="blank" className="text-white"><u>WHO</u></a></span>
                </p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 4 1440 200"><path fill="#fff" fill-opacity="1" d="M0,96L34.3,85.3C68.6,75,137,53,206,74.7C274.3,96,343,160,411,170.7C480,181,549,139,617,138.7C685.7,139,754,181,823,181.3C891.4,181,960,139,1029,122.7C1097.1,107,1166,117,1234,133.3C1302.9,149,1371,171,1406,181.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
        </div>
    )
}