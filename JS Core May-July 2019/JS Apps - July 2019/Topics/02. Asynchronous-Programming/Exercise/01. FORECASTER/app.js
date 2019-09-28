function attachEvents() {
    let getWeatherBtn = document.querySelector('#submit'),
        location = document.querySelector('#location'),
        forecastSection = document.querySelector('#forecast'),
        [current, upcoming] = forecastSection.children,
        status = '';

    const symbols = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°'
    };

    const displayError = () => {
        forecastSection.style.display = 'block';
        forecastSection.textContent = 'Error';
    };

    const createDOMElement = (el, attribute, attributeValue, innerText) => {
        let element = document.createElement(el);
        element.setAttribute(attribute, attributeValue);
        element.textContent = innerText;

        return element;
    };

    const dispplayThreeDayForecast = (data) => {
        if (status === 200) {
            upcoming.textContent = '';

            let labelDiv = createDOMElement('div', 'class', 'label', 'Three-day forecast'),
                forecastInfosDiv = createDOMElement('div', 'class', 'forecast-info', '');

            data.forecast.forEach(element => {
                let upcomingSPan = createDOMElement('span', 'class', 'upcoming', ''),
                    symbolSpan = createDOMElement('span', 'class', 'symbol', symbols[element.condition]),
                    temperatureSpan = createDOMElement('span', 'class', 'forecast-data', `${element.low}${symbols['Degrees']}/${element.high}${symbols['Degrees']}`),
                    conditionSPan = createDOMElement('span', 'class', 'forecast-data', element.condition);

                upcomingSPan.appendChild(symbolSpan);
                upcomingSPan.appendChild(temperatureSpan);
                upcomingSPan.appendChild(conditionSPan);

                forecastInfosDiv.appendChild(upcomingSPan);
            });

            upcoming.appendChild(labelDiv);
            upcoming.appendChild(forecastInfosDiv);

            forecastSection.appendChild(upcoming);
        }
        else {
            displayError();
        }
        status = '';
    };

    const getThreeDayForecast = (code) => {
        fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`)
            .then(response => {
                status = response.status
                return response.json()
            })
            .then(data => dispplayThreeDayForecast(data))
    };

    const displayCurrentConditions = (data) => {
        if (status === 200) {
            let forecastsDiv = createDOMElement('div', 'class', 'forecasts', ''),
                labelDiv = createDOMElement('div', 'class', 'label', 'Current conditions'),
                conditionSymbol = createDOMElement('span', 'class', 'condition symbol', symbols[data.forecast.condition]),
                condition = createDOMElement('span', 'class', 'condition', ''),
                locationSpan = createDOMElement('span', 'class', 'forecast-data', data.name),
                temperatureSpan = createDOMElement('span', 'class', 'forecast-data', `${data.forecast.low}${symbols['Degrees']}/${data.forecast.high}${symbols['Degrees']}`),
                conditionSpan = createDOMElement('span', 'class', 'forecast-data', data.forecast.condition);

            condition.appendChild(locationSpan);
            condition.appendChild(temperatureSpan);
            condition.appendChild(conditionSpan);

            forecastsDiv.appendChild(conditionSymbol);
            forecastsDiv.appendChild(condition);

            current.innerHTML = '';
            current.appendChild(labelDiv);
            current.appendChild(forecastsDiv);

            forecastSection.appendChild(current);
            forecastSection.style.display = 'block';
        }
        else {
            displayError();
        }
        status = '';
    };

    const getCurrentConditions = (code) => {
        fetch(`https://judgetests.firebaseio.com/forecast/today/${code}.json`)
            .then(response => {
                status = response.status;
                return response.json();
            })
            .then(data => displayCurrentConditions(data));
    };

    const loadForecast = (data) => {
        let locationInfo = data.filter(x => x.name === location.value);

        if (locationInfo.length !== 0 && status === 200) {
            getCurrentConditions(locationInfo[0].code);
            getThreeDayForecast(locationInfo[0].code);
        }
        else {
            displayError();
        }
        status = '';
    };

    getWeatherBtn.addEventListener('click', () => {
        forecastSection.style.display = 'none';
        forecastSection.textContent = '';

        fetch('https://judgetests.firebaseio.com/locations.json')
            .then(response => {
                status = response.status;
                return response.json()
            })
            .then(data => loadForecast(data));
    });

}

attachEvents();