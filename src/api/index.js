const rapidApiHost = "coronavirus-monitor.p.rapidapi.com"
const rapidApiKey = "b6e827b151mshbf3ff40340792ccp1da0ccjsne226ad04c043"
const overallUrl = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php'
const casesByCountryUrl = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php"
const dailydataUrl = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php?country="
const affectedCountriesUrl = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php"

export const fetchOverallData = async () => {
    try {
        const data = await fetch(overallUrl, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": rapidApiHost,
                "x-rapidapi-key": rapidApiKey
            }
        }).then(r => r.json())
        // console.log(data);
        return data
    } catch (error) {
        console.log(error);
    }
}

function convertInt(val) {
    try {
        return parseInt(val.replace(/,/g, ''))
    } catch (error) {
        console.log(error)
        return parseInt(val)
    }
}

function getDate(date) {
    let epoch = Date.parse(date)
    return new Date(epoch).toLocaleDateString()
}

export const fetchCountriesData = async () => {
    try {
        const data = await fetch(casesByCountryUrl, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": rapidApiHost,
                "x-rapidapi-key": rapidApiKey
            }
        }).then(r => r.json())

        // deleting the empty data object
        delete data.countries_stat[0];

        const countries_stat = Object.values(data.countries_stat)
        // console.log(Object.values(countries_stat))

        // adding id property to each object and converting string prop to int prop in the array of objects - no longer needed
        countries_stat.forEach(function (element, index) {
            element.id = index;
            Object.keys(element).forEach(function (el) {
                el === 'country_name' ? null : element[el] = convertInt(element[el])
            })
        })

        //console.log(countries_stat);

        return countries_stat
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async (country) => {
    try {
        const data = await fetch(dailydataUrl + country, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": rapidApiHost,
                "x-rapidapi-key": rapidApiKey
            }
        }).then(r => r.json())

        // console.log(Object.values(data))
        // console.log(Object.keys(data));
        //let dailyData = Object.values(data)
        let dailyData = data.stat_by_country
        // console.log(dailyData)

        const modifiedData = {
            country_name: Object.values(dailyData.map(d => (d.country_name))),
            total_cases: Object.values(dailyData.map(d => (convertInt(d.total_cases)))),
            new_cases: Object.values(dailyData.map(d => (convertInt(d.new_cases)))),
            active_cases: Object.values(dailyData.map(d => (convertInt(d.active_cases)))),
            total_deaths: Object.values(dailyData.map(d => (convertInt(d.total_deaths)))),
            new_deaths: Object.values(dailyData.map(d => (convertInt(d.new_deaths)))),
            total_recovered: Object.values(dailyData.map(d => (convertInt(d.total_recovered)))),
            serious_critical: Object.values(dailyData.map(d => (convertInt(d.serious_critical)))),
            total_cases_per1m: Object.values(dailyData.map(d => (convertInt(d.total_cases_per1m)))),
            record_date: Object.values(dailyData.map(d => (getDate(d.record_date)))),
        }
        // console.log(modifiedData);
        return modifiedData
    } catch (error) {
        console.log(error);
    }
}

export const fetchAffectedCountries = async () => {
    try {
        const data = await fetch(affectedCountriesUrl, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": rapidApiHost,
                "x-rapidapi-key": rapidApiKey
            }
        }).then(r => r.json())

        const countries = data.affected_countries
        //console.log(countries);

        return countries

    } catch (error) {
        console.log(error);
    }
}

/*
Overall Data Sample -
total_cases: "3,326,005"
new_cases: "21,785"
total_deaths: "234,505"
new_deaths: "675"
total_recovered: "1,052,180"
active_cases: "2,039,320"
serious_critical: "50,845"
total_cases_per_1m_population: "427"
deaths_per_1m_population: "30.1"
statistic_taken_at: "2020-05-01 12:06:01"
*/