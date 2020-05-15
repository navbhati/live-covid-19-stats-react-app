import React from 'react';
import CountUp from 'react-countup';
import { Loading } from '../Loading';

export const Cards = (props) => {
    //console.log(props);

    if (!props.data.total_cases) {
        return (<Loading />)
    }

    return (
        <div class="row">
            <div class="col">
                <div className="card shadow-md">
                    <div className="card-body bg-info text-center">
                        <h5 className="card-title" style={{ fontSize: '2.2em' }}><CountUp start={0} end={parseInt(props.data.total_cases.replace(/,/g, ''))} duration={1.5} separator="," /></h5>
                        <p className="lead">Total Cases</p>
                    </div>
                    <div className="card-footer">
                        <small>Last Updated: {props.data.statistic_taken_at}</small>
                    </div>
                </div>
            </div>
            <div class="col">

                <div className="card shadow-md">
                    <div className="card-body bg-danger text-center">
                        <h5 className="card-title" style={{ fontSize: '2.2em' }}><CountUp start={0} end={parseInt(props.data.total_deaths.replace(/,/g, ''))} duration={1.5} separator="," /></h5>
                        <p className="lead">Total Deaths</p>
                    </div>
                    <div className="card-footer">
                        <small>Last Updated: {props.data.statistic_taken_at}</small>
                    </div>
                </div>
            </div>
            <div class="col">

                <div className="card shadow-md">
                    <div className="card-body bg-secondary text-center">
                        <h5 className="card-title" style={{ fontSize: '2.2em' }}><CountUp start={0} end={parseInt(props.data.new_cases.replace(/,/g, ''))} duration={1.5} separator="," /></h5>
                        <p className="lead">Cases Today</p>
                    </div>
                    <div className="card-footer">
                        <small>Last Updated: {props.data.statistic_taken_at}</small>
                    </div>
                </div>
            </div>
            <div class="col">

                <div className="card shadow-md">
                    <div className="card-body bg-warning text-center">
                        <h5 className="card-title" style={{ fontSize: '2.2em' }}><CountUp start={0} end={parseInt(props.data.serious_critical.replace(/,/g, ''))} duration={1.5} separator="," /></h5>
                        <p className="lead">Total Critical</p>
                    </div>
                    <div className="card-footer">
                        <small>Last Updated: {props.data.statistic_taken_at}</small>
                    </div>
                </div>
            </div>
            <div class="col">
                <div className="card shadow-md">
                    <div className="card-body bg-success text-center">
                        <h5 className="card-title" style={{ fontSize: '2.2em' }}><CountUp start={0} end={parseInt(props.data.total_recovered.replace(/,/g, ''))} duration={1.5} separator="," /></h5>
                        <p className="lead">Total Recovered</p>
                    </div>
                    <div className="card-footer">
                        <small>Last Updated: {props.data.statistic_taken_at}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}