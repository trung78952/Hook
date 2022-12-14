import { useEffect, useState } from "react"
import axios from "axios"
import moment from "moment/moment"
const Covid = () => {
    const [dataCovid, setdataCovid] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(async () => {
        setTimeout(async () => {
            let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z')
            let data = res && res.data ? res.data : [];
            if (data && data.length > 0) {
                data.map(item => {
                    item.Date = moment(item.Date).format('DD/MM/YYYY');
                    return item;
                })
            }
            setdataCovid(data)
            setLoading(false)
        }, 3000)

    }, [])
    return (
        <div className="table">
            <h2>Covid tracking Việt Nam</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                {loading === false && dataCovid && dataCovid.length > 0 &&
                    dataCovid.map((item, index) => {
                        return (
                            <tbody key={item.ID}>
                                <tr>
                                    <td>{item.Date}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Active}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                {loading === true &&
                    <tbody>
                        <tr>
                            <td colSpan='5'>loading....</td>
                        </tr>
                    </tbody>
                }
            </table>
        </div>
    )
}
export default Covid