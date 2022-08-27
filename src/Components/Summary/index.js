import React from 'react';
import { Container, Col, Row, Card, Dropdown, DropdownButton } from 'react-bootstrap';
import './styles.scss';
import { Link } from 'react-router-dom';

const hospitalDetails = [

    {


        "name": 'Goroka Hospital',
        "contactNumber": 12345,
        district: 'Goroka'
    },
    {
        "name": 'Kainantu hospital',
        "contactNumber": 12345,
        district: 'Daulo'

    },
    {
        "name": 'LOPI Medical Clinic',
        "contactNumber": 12345,
        district: 'Kainantu'
    },
    {
        "name": 'Marie Stopes - Goroka',
        "contactNumber": 12345,
        district: 'Lufa'
    },
    {
        "name": 'Kassam Rural Hospital project',
        "contactNumber": 12345,
        district: 'Henganofi'
    },
    {
        "name": 'GOTOMI HEALTH CENTER',
        "contactNumber": 12345,
        district: 'Okapa'
    },
    {
        "name": 'Kainantu Rural Hospital',
        "contactNumber": 12345,
        district: 'Unggai Benna'
    },
    {
        "name": 'Vanuga Medical Centre',
        "contactNumber": 12345,
        district: 'Obura Wonenara'
    },
    {
        "name": 'Kompri Community Health Post',
        "contactNumber": 12345,
        district: 'Henganofi'
    },
    {
        "name": 'Kapakamarigi Health Center',
        "contactNumber": 12345,
        district: 'Kainantu'
    },
    {
        "name": 'Chuave Rural Hospital',
        "contactNumber": 12345,
        district: 'Okapa'
    },
    {
        "name": 'Yasubi Clinic',
        "contactNumber": 12345,
        district: 'Lufa'
    },
    {
        "name": 'Yandime Sub Health Centre',
        "contactNumber": 12345,
        district: 'Lufa'
    },
    {
        "name": 'Kainantu Health Center',
        "contactNumber": 12345,
        district: 'Henganofi'
    },
    {
        "name": 'Henganofi Clinic',
        "contactNumber": 12345,
        district: 'Goroka'
    },
    {
        "name": 'Asaroka Health Centre',
        "contactNumber": 12345,
        district: 'Goroka'
    },
    {
        "name": 'Fore IREAN BACKER Health Center',
        "contactNumber": 12345,
        district: 'Lufa'
    },
    {
        "name": 'Okapa district Government health Centre',
        "contactNumber": 12345,
        district: 'Okapa'
    },
]
const Summary = () => {
    console.log("test")

    return (
        // <div className='main-container'>
        //     <div className='sub-container'>
        //         <div className='card' style={{ height: 'fit-content', background: 'none', color: 'black', border: 'none', justifyContent: 'end', boxShadow: 'none', textAlign: 'start' }}>
        //             <h2>Summary</h2>
        //         </div>
        //         {/* <h1>Summary</h1> */}
        //         <div className='card hiddenCard'>

        //         </div>
        //         <div className='card hiddenCard'>

        //         </div>
        //         <div className='card hiddenCard'>

        //         </div>
        //     </div>

        //     <div className='sub-container'>
        //         <div className='card' style={{ backgroundColor: '#017CF7' }}>
        //             <div className='card-components-header'>Total Cases</div>
        //             <div className='card-components-body' >2345</div>
        //         </div>
        //         <div className='card' style={{ backgroundColor: '#3772F6' }}>
        //             <div className='card-components-header'>Total Admission</div>
        //             <div className='card-components-body'>2345</div>
        //         </div>
        //         <div className='card' style={{ backgroundColor: '#67C916' }}>
        //             <div className='card-components-header'>Total Discharges</div>
        //             <div className='card-components-body'>2345</div>
        //         </div>
        //         <div className='card' style={{ backgroundColor: '#ECBA2C' }}>
        //             <div className='card-components-header'>Total LHOR</div>
        //             <div className='card-components-body'>2345</div>
        //         </div>
        //     </div>
        //     <div className='sub-container'>
        //         <div className='card' style={{ backgroundColor: '#A95B1F' }} >
        //             <div className='card-components-header'>Total Absconds</div>
        //             <div className='card-components-body'>2345</div>
        //         </div>
        //         <div className='card' style={{ backgroundColor: '#F04732' }}>
        //             <div className='card-components-header'>Total Deaths</div>
        //             <div className='card-components-body'>2345</div>
        //         </div>
        //         <div className='card' style={{ backgroundColor: '#9FCA68' }}>
        //             <div className='card-components-header'>Health Worker</div>
        //             <div className='card-components-body'>2345</div>
        //         </div>
        //         <div className='card' style={{ backgroundColor: '#F04732' }}>
        //             <div className='card-components-header'>Health Worker Death</div>
        //             <div className='card-components-body'>2345</div>
        //         </div>
        //     </div>
        //     <div className='sub-container'>
        //         <div className='card' style={{ backgroundColor: '#3772F6' }}>
        //             <div className='card-components-header'>Current Impatients</div>
        //             <div className='card-components-body'>2345</div>
        //         </div>
        //         <div className='card' style={{ backgroundColor: '#3772F6' }}>
        //             <div className='card-components-header'>Admission in 24 Hours</div>
        //             <div className='card-components-body'>2345</div>
        //         </div>
        //         <div className='card' style={{ backgroundColor: '#F04732' }}>
        //             <div className='card-components-header'>Death in 24 Hours</div>
        //             <div className='card-components-body'>2345</div>
        //         </div>
        //         <div className='card hiddenCard' style={{ visibility: 'hidden' }} >

        //         </div>
        //     </div>
        // </div>
        <div style={{ height: '92%', padding: '2%' }} >
            <section>
                <div>
                    Papuwa Neu Guinea|Recent Update
                </div>
                <div style={{ display: 'flex' }} >
                    <div style={{ backgroundColor: 'red', flex: '2', display: 'flex', flexDirection: 'column' }} >
                        <div style={{ display: 'flex', justifyContent: 'space-between' }} ><span style={{ fontWeight: 'bold' }} >Last 24 hours update</span>
                            <span>Updated at:19th February 2022</span></div>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }} >
                            <div style={{ height: '50px', width: '50px', backgroundColor: 'green' }} >New Case</div>
                            <div style={{ height: '50px', width: '50px', backgroundColor: 'blue' }} >New Case</div>
                            <div style={{ height: '50px', width: '50px', backgroundColor: 'yellow' }} >New Case</div>
                        </div>
                        <div>12345|PCR Test</div>
                        <div style={{ display: 'flex' }} >
                            <div>1243|Isolation</div>
                            <div>123|Quarantined</div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'blue', flex: '3', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }} ><span>Total Data</span>
                            <span>Updated at:19th February 2022</span></div>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }} >
                            <div style={{ height: '50px', width: '50px', backgroundColor: 'green' }} >New Case</div>
                            <div style={{ height: '50px', width: '50px', backgroundColor: 'blue' }} >New Case</div>
                            <div style={{ height: '50px', width: '50px', backgroundColor: 'yellow' }} >New Case</div>
                            <div style={{ height: '50px', width: '50px', backgroundColor: 'yellow' }} >New Case</div>
                        </div>
                        <div>12345|PCR Test</div>
                        <div style={{ display: 'flex' }} >
                            <div>1243|Isolation</div>
                            <div>123|Quarantined</div>
                        </div>
                    </div>

                </div>
            </section>
            <section>
                <div>Hospital Information</div>
                <div style={{ display: 'flex' }} >
                    <div>Filters</div>
                    <div>
                        <DropdownButton id="dropdown-basic-button" title="Select Districts">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                <div style={{ display: 'flex' }} >
                    <div style={{ flex: '3' }} >Map</div>
                    <div style={{ flex: '2' }} >
                        <div style={{ display: 'flex' }} >
                            Hospital Information
                        </div>
                        <div>Location:</div>
                        <div>Hospital Detail list district wise</div>
                    </div>
                </div>
            </section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
        </div>
    )
}


export default Summary;