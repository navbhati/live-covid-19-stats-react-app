import React from 'react';
import { AboutHeader } from '../components/Headers/AboutHeader'

export const About = () => (
    <div>
        <AboutHeader />
        <div className="container">
            <h3>About</h3>
            <hr />
            <p class="lead">This website was developed by <a href="https://naveenbhati.com" target="blank">Naveen Bhati</a>. &#128075;</p>

            <p class="lead">The goal of this project is to provide a simple way to visualize the impact of COVID-19.</p>

            <p class="lead">The data is from reliable sources from around the world. The website shows latest data at all time, refresh to see any changes.</p>

            <p class="lead">If you have questions,feedback or suggestion on any feature you'd like to see on this site, please send me an email!</p>

            <p class="lead">With growing number of users and new feature development, maintenance costs can be high. Please consider buying a coffee &#9749; to support my work. </p>

            <p class="lead"> I appreciate any help. &#128079;</p>
        </div>
    </div >
)