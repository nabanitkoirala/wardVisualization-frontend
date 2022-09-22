import React from 'react';
import './styles.scss';



const TableData = ({ title, data }) => {
    return (
        <div style={{ marginTop: '20px', marginLeft: '10px', marginRight: '10px', marginBottom: '20px', overflowX: 'scroll' }}>
            <span style={{ fontWeight: 'bold', fontSize: '20px' }}>{title}</span>
            <table  >
                <tr>
                    <th>Sn</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Contact</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i} >

                        <td>{i + 1}</td>
                        <td>{item.properties.name}</td>
                        <td>{item.properties.address}</td>
                        <td>{item.properties.contactNumber}</td>


                    </tr>
                ))}


            </table>
        </div>
    )
}


export default TableData;