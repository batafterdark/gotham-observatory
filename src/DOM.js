// import 
const weatherDiv = document.querySelector(".weatherInfo");
const dailyForecast = document.querySelector("#dailyForecast");
const hourlyForecast = document.querySelector("#hourlyForecast");
const forecastContainer = document.querySelector(".forecast");
const icons ={
    humidity: `<svg width="169px" height="169px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.0066 3.25608C16.8483 2.85737 19.1331 2.8773 22.2423 3.65268C22.7781 3.78629 23.1038 4.32791 22.9699 4.86241C22.836 5.39691 22.2931 5.7219 21.7573 5.58829C18.8666 4.86742 16.9015 4.88747 15.4308 5.20587C13.9555 5.52524 12.895 6.15867 11.7715 6.84363L11.6874 6.89494C10.6044 7.55565 9.40515 8.28729 7.82073 8.55069C6.17734 8.82388 4.23602 8.58235 1.62883 7.54187C1.11607 7.33724 0.866674 6.75667 1.0718 6.24513C1.27692 5.73359 1.85889 5.48479 2.37165 5.68943C4.76435 6.6443 6.32295 6.77699 7.492 6.58265C8.67888 6.38535 9.58373 5.83916 10.7286 5.14119C11.855 4.45445 13.1694 3.6538 15.0066 3.25608Z" fill="#fdfcfc"></path> <path d="M22.2423 7.64302C19.1331 6.86765 16.8483 6.84772 15.0066 7.24642C13.1694 7.64415 11.855 8.44479 10.7286 9.13153C9.58373 9.8295 8.67888 10.3757 7.492 10.573C6.32295 10.7673 4.76435 10.6346 2.37165 9.67977C1.85889 9.47514 1.27692 9.72393 1.0718 10.2355C0.866674 10.747 1.11607 11.3276 1.62883 11.5322C4.23602 12.5727 6.17734 12.8142 7.82073 12.541C9.40515 12.2776 10.6044 11.546 11.6874 10.8853L11.7715 10.834C12.895 10.149 13.9555 9.51558 15.4308 9.19621C16.9015 8.87781 18.8666 8.85777 21.7573 9.57863C22.2931 9.71224 22.836 9.38726 22.9699 8.85275C23.1038 8.31825 22.7781 7.77663 22.2423 7.64302Z" fill="#fdfcfc"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9998 10.0266C18.6526 10.0266 18.3633 10.2059 18.1614 10.4772C18.0905 10.573 17.9266 10.7972 17.7089 11.111C17.4193 11.5283 17.0317 12.1082 16.6424 12.7555C16.255 13.3996 15.8553 14.128 15.5495 14.8397C15.2567 15.5213 14.9989 16.2614 14.9999 17.0117C15.0006 17.2223 15.0258 17.4339 15.0604 17.6412C15.1182 17.9872 15.2356 18.4636 15.4804 18.9521C15.7272 19.4446 16.1131 19.9674 16.7107 20.3648C17.3146 20.7664 18.0748 21 18.9998 21C19.9248 21 20.685 20.7664 21.2888 20.3648C21.8864 19.9674 22.2724 19.4446 22.5192 18.9522C22.764 18.4636 22.8815 17.9872 22.9393 17.6413C22.974 17.4337 22.9995 17.2215 22.9998 17.0107C23.0001 16.2604 22.743 15.5214 22.4501 14.8397C22.1444 14.128 21.7447 13.3996 21.3573 12.7555C20.968 12.1082 20.5803 11.5283 20.2907 11.111C20.073 10.7972 19.909 10.573 19.8382 10.4772C19.6363 10.2059 19.3469 10.0266 18.9998 10.0266ZM20.6119 15.6257C20.3552 15.0281 20.0049 14.3848 19.6423 13.782C19.4218 13.4154 19.2007 13.0702 18.9998 12.7674C18.7989 13.0702 18.5778 13.4154 18.3573 13.782C17.9948 14.3848 17.6445 15.0281 17.3878 15.6257L17.3732 15.6595C17.1965 16.0704 16.9877 16.5562 17.0001 17.0101C17.0121 17.3691 17.1088 17.7397 17.2693 18.0599C17.3974 18.3157 17.574 18.5411 17.8201 18.7048C18.06 18.8643 18.4248 19.0048 18.9998 19.0048C19.5748 19.0048 19.9396 18.8643 20.1795 18.7048C20.4256 18.5411 20.6022 18.3156 20.7304 18.0599C20.8909 17.7397 20.9876 17.3691 20.9996 17.01C21.0121 16.5563 20.8032 16.0705 20.6265 15.6597L20.6119 15.6257Z" fill="#fdfcfc"></path> <path d="M14.1296 11.5308C14.8899 11.2847 15.4728 12.076 15.1153 12.7892C14.952 13.1151 14.7683 13.3924 14.4031 13.5214C13.426 13.8666 12.6166 14.3527 11.7715 14.8679L11.6874 14.9192C10.6044 15.5799 9.40516 16.3115 7.82074 16.5749C6.17735 16.8481 4.23604 16.6066 1.62884 15.5661C1.11608 15.3615 0.866688 14.7809 1.07181 14.2694C1.27694 13.7578 1.8589 13.509 2.37167 13.7137C4.76436 14.6685 6.32297 14.8012 7.49201 14.6069C8.67889 14.4096 9.58374 13.8634 10.7286 13.1654C11.8166 12.5021 12.9363 11.9171 14.1296 11.5308Z" fill="#fdfcfc"></path> </g></svg>`,
    temp: `<svg fill="#ededed" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ededed"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>temperature-high</title> <path d="M20.75 6.008c0-6.246-9.501-6.248-9.5 0v13.238c-1.235 1.224-2 2.921-2 4.796 0 3.728 3.022 6.75 6.75 6.75s6.75-3.022 6.75-6.75c0-1.875-0.765-3.572-2-4.796l-0.001-0zM16 29.25c-2.9-0-5.25-2.351-5.25-5.251 0-1.553 0.674-2.948 1.745-3.909l0.005-0.004 0.006-0.012c0.13-0.122 0.215-0.29 0.231-0.477l0-0.003c0.001-0.014 0.007-0.024 0.008-0.038l0.006-0.029v-13.52c-0.003-0.053-0.005-0.115-0.005-0.178 0-1.704 1.381-3.085 3.085-3.085 0.060 0 0.12 0.002 0.179 0.005l-0.008-0c0.051-0.003 0.11-0.005 0.17-0.005 1.704 0 3.085 1.381 3.085 3.085 0 0.063-0.002 0.125-0.006 0.186l0-0.008v13.52l0.006 0.029 0.007 0.036c0.015 0.191 0.101 0.36 0.231 0.482l0 0 0.006 0.012c1.076 0.966 1.75 2.361 1.75 3.913 0 2.9-2.35 5.25-5.25 5.251h-0zM16.75 21.367v-15.367c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 15.367c-1.164 0.338-2 1.394-2 2.646 0 1.519 1.231 2.75 2.75 2.75s2.75-1.231 2.75-2.75c0-1.252-0.836-2.308-1.981-2.641l-0.019-0.005zM26.5 2.25c-1.795 0-3.25 1.455-3.25 3.25s1.455 3.25 3.25 3.25c1.795 0 3.25-1.455 3.25-3.25v0c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM26.5 7.25c-0.966 0-1.75-0.784-1.75-1.75s0.784-1.75 1.75-1.75c0.966 0 1.75 0.784 1.75 1.75v0c-0.001 0.966-0.784 1.749-1.75 1.75h-0z"></path> </g></svg>`,
    pin:`<svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12C14.4853 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4853 3 12 3C9.51472 3 7.5 5.01472 7.5 7.5C7.5 9.98528 9.51472 12 12 12Z" stroke="#ffffff" stroke-miterlimit="10" stroke-linecap="round"></path> <path d="M12 14.0137V22" stroke="#ffffff" stroke-miterlimit="10" stroke-linecap="round"></path> </g></svg>`,
    rain: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.34141 6C7.16508 3.66962 9.38756 2 12 2C15.3137 2 18 4.68629 18 8C20.2091 8 22 9.79086 22 12C22 14.2091 20.2091 16 18 16H7C4.23858 16 2 13.7614 2 11C2 8.46898 3.8806 6.37721 6.32069 6.04576" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 20L6 22" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 20L11 22" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 20L16 22" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
    max: `<svg fill="#ffffff" viewBox="0 0 32 32" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style> .cls-1 { fill: none; } </style> </defs> <rect x="20" y="10" width="7" height="2"></rect> <rect x="20" y="16" width="10" height="2"></rect> <rect x="20" y="22" width="7" height="2"></rect> <path d="M10,20.1839V7H8V20.1839a3,3,0,1,0,2,0Z" transform="translate(0 0)"></path> <path d="M30,4H12.9744A4.9829,4.9829,0,0,0,4,7V18.1108a7,7,0,1,0,10,0V7a5.0019,5.0019,0,0,0-.1011-1H30ZM9,28a4.9933,4.9933,0,0,1-3.332-8.7183L6,18.9834V7a3,3,0,0,1,6,0V18.9834l.332.2983A4.9933,4.9933,0,0,1,9,28Z" transform="translate(0 0)"></path> <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"></rect> </g></svg>`,
    min: `<svg fill="#ffffff" viewBox="0 0 32 32" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style> .cls-1 { fill: none; } </style> </defs> <rect x="20" y="4" width="7" height="2"></rect> <rect x="20" y="10" width="10" height="2"></rect> <rect x="20" y="16" width="7" height="2"></rect> <path d="M12,23a3,3,0,0,1-6,0Z" transform="translate(0 0)"></path> <path d="M30,22H15.9192A7.0107,7.0107,0,0,0,14,18.1108V7A5,5,0,0,0,4,7V18.1108A6.9946,6.9946,0,1,0,15.92,24H30ZM9,28a4.9933,4.9933,0,0,1-3.332-8.7183L6,18.9834V7a3,3,0,0,1,6,0V18.9834l.332.2983A4.9933,4.9933,0,0,1,9,28Z" transform="translate(0 0)"></path> <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"></rect> </g></svg>`,
}
export default function showWeather(weatherObject){
    weatherDiv.innerHTML="";
    if(hourlyForecast){
        hourlyForecast.innerHTML=""
    }
    if(dailyForecast){
        dailyForecast.innerHTML=""
    }
    weatherDiv.insertAdjacentHTML('beforeend', /* html*/`
        <div className="weatherData" id="yap">${weatherObject.yap}</div>
        <div class="weatherData" id="location"><p>${icons.pin} ${weatherObject.address}</p></div>
        <div class="weatherData" id="temp"><p>${icons.temp} Currently : ${weatherObject.temp}°</p></div>
        <div class="weatherData" id="extremes"><p>${icons.max} Max : ${weatherObject.tempMax}° ${icons.min} Min : ${weatherObject.tempMin}°</p></div>
        <div class="weatherData" id="feelsLike">${icons.temp} Feels Like : ${weatherObject.feelsLike}°</div>
        <div class="weatherData" id="humidity"><p>${icons.humidity} Humidity : ${weatherObject.humidity}</p></div>
        <div class="weatherData" id="rainChances">${icons.rain} ${weatherObject.whichPrecip} Chances : ${weatherObject.rainChances}%</div>
        <button id="forecast">See Forecast</button>
    `)
}
export async function showForecast(weatherObject){
    if (!weatherObject) return;

    function formatHour(datetime) {
        let hour = Number(datetime.split(":")[0]);
        const ampm = hour >= 12 ? "PM" : "AM";
        hour = hour % 12;
        if (hour === 0) hour = 12;
        return `${hour} ${ampm}`;
    }
    if (hourlyForecast) {
        hourlyForecast.innerHTML = "";
    }
    if (dailyForecast) {
        dailyForecast.innerHTML = "";
    }
    const startHour = Number.isFinite(weatherObject.currentTime)
        ? weatherObject.currentTime
        : 0;

    const next10Hours = weatherObject.todayHours.slice(
        startHour,
        startHour + 10
    );
    if (next10Hours.length < 10) {
        next10Hours.push(
            ...weatherObject.tomorrowHours.slice(
                0,
                10 - next10Hours.length
            )
        );
    }
    function formatDay(datetime){
        const date = datetime.substring(datetime.indexOf("-")+1);
        return date;
    }
    const hourlyCards = document.createElement("div");
    hourlyCards.className = "forecastCards";
    hourlyForecast.appendChild(hourlyCards);

    hourlyForecast.insertAdjacentHTML("afterbegin", /*html*/`
        <p class="forecastHeading">Hourly Forecast</p>
    `);

    for(const hour of next10Hours){
        const icon = await import(`./assets/icons/${hour.icon}.svg`);
        hourlyCards.insertAdjacentHTML("beforeend",/*html*/`
        <div class="hourCard">
            <p class="hourTime">${formatHour(hour.datetime)}</p>
            <img class="weatherIcons" src="${icon.default}"/>
            <p class="hourTemp">${hour.temp}°</p>
        </div>
        `)
    }

    const dailyDays = [
        weatherObject.day1,
        weatherObject.day2,
        weatherObject.day3,
        weatherObject.day4,
        weatherObject.day5,
        weatherObject.day6,
        weatherObject.day7,
    ];

    const dailyCards = document.createElement("div");
    dailyCards.className = "forecastCards";
    dailyForecast.appendChild(dailyCards);

    dailyForecast.insertAdjacentHTML("afterbegin", /*html*/`
        <p class="forecastHeading">Coming Days</p>
    `);

    for (const day of dailyDays) {
        const icon = await import(`./assets/icons/${day.icon}.svg`);
        dailyCards.insertAdjacentHTML("beforeend",/*html*/`
        <div class="dayCard">
            <p class="whichDay">${formatDay(day.datetime)}</p>
            <img class="weatherIcons" src="${icon.default}"/>
            <p class="hourTemp">${day.temp}°</p>
        </div>
        `)
    }
};
