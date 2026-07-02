

export default async function getWeather(city,unit){
    // console.log(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&key=KV5PJENKX4RAHCHEDRESPQEFG&contentType=json`);
    const response= await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&key=KV5PJENKX4RAHCHEDRESPQEFG&contentType=json`);
    if(!response.ok){
        throw new Error(`Sorry man, its ${response.status}`);
    }
    else{
        const apiData = await response.json();
        return{
        address : apiData.resolvedAddress,
        temp : apiData.currentConditions.temp,
        feelsLike : apiData.currentConditions.feelslike,
        humidity : apiData.currentConditions.humidity,
        rainChances : apiData.currentConditions.precipprob,
        tempMax : apiData.days[0].tempmax,
        tempMin : apiData.days[0].tempmin,
        yap : apiData.description,
        whichPrecip : (() => {
            const precipType = apiData.days[0].preciptype;
            const value = Array.isArray(precipType) ? precipType[0] : precipType;
            return value ? value.charAt(0).toUpperCase() + value.slice(1) : "None";
        })(),
        currentTime : Number(apiData.currentConditions.datetime.split(":")[0]),
        todayHours : apiData.days[0].hours,
        tomorrowHours : apiData.days[1].hours,
        day1 : apiData.days[1],
        day2 : apiData.days[2],
        day3 : apiData.days[3],
        day4 : apiData.days[4],
        day5 : apiData.days[5],
        day6 : apiData.days[6],
        day7 : apiData.days[7],
        }
    }
}