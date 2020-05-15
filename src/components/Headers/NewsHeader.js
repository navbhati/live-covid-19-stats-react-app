import React from 'react';

// Basically a Jumbotron
export const NewsHeader = () => (
    <div className="jumbotron jumbotron-fluid mb-0 pb-0 pt-2 text-white" style={{ backgroundImage: 'linear-gradient(127deg, rgba(233,196,106,1) 0%, rgba(233,196,106,1) 0%)' }}>
        <div className="container">
            <h1 className="display-4">Live latest trending news on COVID-19</h1>
            <hr />
            <p className="lead">All the latest breaking news on COVID-19. Browse latest collection of articles and commentary from various sources on COVID-19.</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L34.3,85.3C68.6,75,137,53,206,74.7C274.3,96,343,160,411,170.7C480,181,549,139,617,138.7C685.7,139,754,181,823,181.3C891.4,181,960,139,1029,122.7C1097.1,107,1166,117,1234,133.3C1302.9,149,1371,171,1406,181.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
    </div>
)