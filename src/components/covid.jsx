import { useEffect, useState } from "react"
import './covid.css'

const Covid = () => {

    const [data, setData] = useState([])
    const [time, setTime] = useState([])
    const getCovidData = async () => {
        const res = await fetch('https://api.rootnet.in/covid19-in/stats/latest')
        const resBody = await res.json();
        setData(resBody.data.summary)
        setTime(resBody.lastOriginUpdate)
    }

    useEffect(() => {
       getCovidData();
    }, []);

    return (
        <>
        <section>
            <h1>COVID-19 CORONAVIRUS TRACKER</h1>
            <h1>Total Cases in INDIA</h1>
            <ul className="cards-container">
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                        <p className="card__name">TOTAL CASES</p>
                        <p className="card__total card__small">{data.total}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                        <p className="card__name">TOTAL Deaths</p>
                        <p className="card__total card__small">{data.deaths}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                        <p className="card__name">TOTAL Discharged</p>
                        <p className="card__total card__small">{data.discharged}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                        <p className="card__name">Confirmed Foreign Cases</p>
                        <p className="card__total card__small">{data.confirmedCasesForeign}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                        <p className="card__name">Confirmed Indian Cases</p>
                        <p className="card__total card__small">{data.confirmedCasesIndian}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                        <p className="card__name">Last Updated at</p>
                        <p className="card__total card__small">{time}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
        </>
    )
}

export default Covid