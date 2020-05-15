import React, { useState, useEffect } from 'react'
import { GetLatestCovidNewsUK } from '../api/CovidNews'
import { NewsCards } from '../components/News/NewsCards'
import { NewsHeader } from '../components/Headers/NewsHeader'

export const News = () => {

    const [covidNews, setCovidNews] = useState([])

    useEffect(async () => {
        let data = await GetLatestCovidNewsUK()
        //console.log(data);

        setCovidNews(data)
    }, [])

    return (
        <div>
            <NewsHeader />
            <div className="container">
                <NewsCards news={covidNews} />
            </div>
        </div>
    )
}