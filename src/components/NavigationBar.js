import React from 'react';
import { PageColor } from '../components/PageColors'

export const NavigationBar = () => {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: `${PageColor()}` }}>
            <a className="navbar-brand" href="#">
                <img src="https://img.icons8.com/bubbles/100/000000/coronavirus.png" width="50" height="50" className="d-inline-block align-center mr-2 ml-2" alt="" />COVID-19 <small>Live Stats</small></a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home  <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/charts">Charts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/news">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>

                    <li className="nav-item">
                        <a className="btn btn-danger ml-2 text-white" href="https://ko-fi.com/naveenbhati" target='blank'>Buy me a coffee!</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}