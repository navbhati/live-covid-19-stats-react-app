import React, { useState, useEffect } from 'react';
import { ChartsHeader } from '../components/Headers/ChartsHeader'
import { Chart } from '../components/Chart/Chart'
import { CountryPicker } from '../components/Chart/CountryPicker';

import { fetchAffectedCountries, fetchDailyData } from '../api'

export const Charts = () => {

    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {

        const fetchAPI = async () => {
            setFetchedCountries(await fetchAffectedCountries());
        }

        fetchAPI();

    }, [setFetchedCountries]);


    const [countryDailyData, setCountryDailyData] = useState({});
    const handelCountryChange = async (country) => {
        console.log(country);

        const fetchAPI = async () => {
            setCountryDailyData(await fetchDailyData(country));
        }
        fetchAPI();
    }

    return (
        <div>
            <ChartsHeader />
            <div className="container">
                <CountryPicker countries={fetchedCountries}
                    handelCountryChange={handelCountryChange} />
                <Chart dailyData={countryDailyData} />
            </div>
        </div>)
}