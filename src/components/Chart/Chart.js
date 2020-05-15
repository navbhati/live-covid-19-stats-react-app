import React from 'react'
import { Line, Bar } from 'react-chartjs-2'
import { Loading } from '../Loading'

export const Chart = (props) => {

    if (!props.dailyData.total_cases) {
        return (
            <Loading />
        )
    }

    return (
        <div className="col">
            <Line
                data={{
                    labels: props.dailyData.record_date.reverse(),
                    datasets: [
                        {
                            label: 'Confirmed Cases Trend',
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: props.dailyData.total_cases.reverse(),
                        }
                    ]
                }}
            />

            <Line
                data={{
                    labels: props.dailyData.record_date.reverse(),
                    datasets: [
                        {
                            label: 'Seriously Critical Trend',
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: 'rgb(255, 0, 0,0.4)',
                            borderColor: 'rgb(255, 0, 0,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgb(255, 0, 0,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgb(255, 0, 0,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: props.dailyData.total_deaths.reverse(),
                        }
                    ]
                }}
            />

        </div>
    )
}


/*
   data={{
                labels: props.dailyData.record_date.reverse(),
                datasets: [{
                    data: props.dailyData.total_cases.reverse(),
                    label: 'Infected',
                    borderColor: '#f7d559',
                    fill: true,
                }, {
                    data: props.dailyData.total_deaths.reverse(),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true,
                }]
            }}
             */