import React, { useState, useEffect } from 'react';
import { Cards } from '../components/Home/Cards';
import { fetchOverallData, fetchCountriesData } from '../api';
import { CountriesTable } from '../components/Home/CountriesTable'
import { HomeHeader } from '../components/Headers/HomeHeader'

export const Home = () => {

    const [overallData, setOverallData] = useState({});
    useEffect(async () => {
        let data = await fetchOverallData()
        //console.log(data);
        setOverallData(data)
    }, [])

    const [countriesData, setCountriesData] = useState([])
    useEffect(async () => {
        let data = await fetchCountriesData()
        //console.log(data);
        setCountriesData(data)
    }, [])

    return (
        <div>
            <HomeHeader />
            <div className="container">
                <Cards data={overallData} />
                <CountriesTable data={countriesData} />
            </div>
        </div >)
}