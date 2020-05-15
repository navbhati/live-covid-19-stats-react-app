export const GetLatestCovidNewsUK = async () => {

    try {


        const data = await fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?autoCorrect=false&pageNumber=1&pageSize=50&q=coronavirus&safeSearch=false", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
                "x-rapidapi-key": "b6e827b151mshbf3ff40340792ccp1da0ccjsne226ad04c043"
            }
        }).then(r => r.json())
        return data.value
    } catch (error) {
        console.log(error);
    }
}