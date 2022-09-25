import "./current-weather.css"

const CurrentWeather = ({ data }) => {

    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img alt="Weather" className="weather-icon" src={`/icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}ºC</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels Like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}ºC</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Temp Min</span>
                        <span className="parameter-value">{Math.round(data.main.temp_min)}ºC</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Temp Max</span>
                        <span className="parameter-value">{Math.round(data.main.temp_max)}ºC</span>
                    </div>
                    <br></br>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;