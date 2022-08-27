import React from 'react';
import ChartVisuaization from './ChartVisualization';
import Map from './Map';
import TableData from './TableData';
import './styles.scss';


const DistrictSummary = () => {
    const data = [
        {
            // feature for Mapbox SF
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                "condition": "response",
                'coordinates': [-6.412926, 145.586948]
            },
            'properties': {
                name: 'Ram'
            }
        }

    ]
    return (
        <div style={{
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center',
            paddingTop: '50px', paddingBottom: '50px', backgroundColor: '#F7F7F7'
        }}
        // className="main-container"
        >
            <div style={{ marginRight: 'auto', marginLeft: '10%' }} >
                <h2>Hospital Information</h2>
            </div>
            <div className='map-worker'>
                <Map datas={data} />


                <div className="health-worker-table" >
                    <span style={{ fontWeight: 'bold', fontSize: '20px' }} >Health Workers Statistics</span>
                    <table  >
                        <tr>
                            <th>Health Worker</th>
                            <th>Total Cases</th>
                            <th>Death</th>

                        </tr>
                        <tr>
                            <td>Goroka</td>
                            <td>2235</td>
                            <td>3254</td>


                        </tr>
                        <tr>
                            <td>Daulo</td>
                            <td>2235</td>
                            <td>3254</td>


                        </tr>
                        <tr>
                            <td>Kainantu</td>
                            <td>2235</td>
                            <td>3254</td>

                        </tr>
                        <tr>
                            <td>Lufa</td>
                            <td>2235</td>
                            <td>3254</td>

                        </tr>
                        <tr>
                            <td>Henganofi</td>
                            <td>2235</td>
                            <td>3254</td>

                        </tr>
                        <tr>
                            <td>Okapa</td>
                            <td>2235</td>
                            <td>3254</td>

                        </tr>
                        <tr>
                            <td>Unggai Benna</td>
                            <td>2235</td>
                            <td>3254</td>

                        </tr>
                        <tr>
                            <td>Obura Wonenara</td>
                            <td>2235</td>
                            <td>3254</td>

                        </tr>
                    </table>
                </div>
            </div>
            {/* <Map datas={data} /> */}
            <ChartVisuaization />

            <TableData />
        </div >
    )
}


export default DistrictSummary;