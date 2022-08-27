import React, { useEffect, useState } from 'react'
import Map from '../Components/DistrictSummary/Map'
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './styles.scss'
import TableData from '../Components/DistrictSummary/TableData';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const Dashboard = () => {
    const [data, setData] = useState([
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [87.283353, 26.816517]
            },
            'properties': {
                "name": 'Goroka Hospital',
                "contactNumber": 12345,
                "address": "dharan-12",
                "houseImage": "house3.jpg",
                "type": 'health'

            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [87.285153, 26.816444],
            },
            'properties': {
                "name": 'Kainantu hospital',
                "contactNumber": 12345,
                "address": "dharan-12",
                "houseImage": "house3.jpg",
                "type": 'health'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [87.285040, 26.815397],
            },
            'properties': {
                "name": 'LOPI School',
                "contactNumber": 12345,
                "address": "dharan-12",
                "houseImage": "house3.jpg",
                "type": 'education'
            }

        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [87.283593, 26.815758],
            },
            'properties': {
                "name": 'Saint Marry School',
                "contactNumber": 12345,
                "address": "dharan-12",
                "houseImage": "house3.jpg",
                "type": 'education'
            }

        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [87.285004, 26.815421],
            },
            'properties': {
                "name": 'Kumari Bank Ltd',
                "contactNumber": 12345,
                "address": "dharan-12",
                "houseImage": "house3.jpg",
                "type": 'finance'
            }

        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [87.279859, 26.816394],
            },
            'properties': {
                "name": 'Prabhu Bank Limited',
                "contactNumber": 12345,
                "address": "dharan-12",
                "houseImage": "house3.jpg",
                "type": 'finance'
            }

        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [87.284443, 26.816281],
            },
            'properties': {
                "name": 'Radio Nepal',
                "contactNumber": 12345,
                "address": "dharan-12",
                "houseImage": "house3.jpg",
                "type": 'communication'
            }

        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [87.283890, 26.815385],
            },
            'properties': {
                "name": 'Radio Makalu',
                "contactNumber": 12345,
                "address": "dharan-12",
                "houseImage": "house3.jpg",
                "type": 'communication'
            }

        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [87.281845, 26.816449],
            },
            'properties': {
                "name": 'Ward 12 office',
                "contactNumber": 12345,
                "address": "dharan-12",
                "houseImage": "house3.jpg",
                "type": 'governance'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [87.281741, 26.816630],
            },
            'properties': {
                "name": 'Dharan Municipality',
                "contactNumber": 12345,
                "address": "dharan-12",
                "houseImage": "house3.jpg",
                "type": 'governance'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [87.277400, 26.816167],
            },
            'properties': {
                "name": 'Star Hotel',
                "contactNumber": 12345,
                "address": "dharan-12",
                "houseImage": "house3.jpg",
                "type": 'hotel'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [87.278822, 26.815332],
            },
            'properties': {
                "name": 'Zenith Hotel',
                "contactNumber": 12345,
                "address": "dharan-12",
                "houseImage": "house3.jpg",
                "type": 'hotel'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [87.279390, 26.814655],
            },
            'properties': {
                "name": 'Shiva Mandir',
                "contactNumber": 12345,
                "address": "dharan-12",
                "houseImage": "house3.jpg",
                "type": 'culture'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [87.281369, 26.814031],
            },
            'properties': {
                "name": 'Zame Maszid',
                "contactNumber": 12345,
                "address": "dharan-12",
                "houseImage": "house3.jpg",
                "type": 'culture'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [87.282886, 26.815184],
            },
            'properties': {
                "name": 'Krishna Dhago Udhyog',
                "contactNumber": 12345,
                "address": "dharan-12",
                "houseImage": "house2.jpg",
                "type": 'industry'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [87.283443, 26.815871],
            },
            'properties': {
                "name": 'Shiva Pauroti Udhyog',
                "contactNumber": 12345,
                "address": "dharan-12",
                "houseImage": "house3.jpg",
                "type": 'industry'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [87.283899, 26.816808],
            },
            'properties': {
                "houseNumber": 13,
                "name": 'Ram Kumar Thapa',
                "storey": 3,
                "ownerOccupation": 'Business',
                "annualIncome": 500000,
                "contact": "982088396",
                "address": "Chatara Line",
                "totalMembers": 13,
                "maleMembers": 8,
                "femaleMembers": 4,
                "otherMembers": 1,
                "onRent": "yes",
                "houseImage": "house1.jpg",
                "rentInfo": [
                    {
                        "rentOwner": "Samaya Wagle",
                        "annualIncome": 3000000,
                        "occupation": "Business",
                        "contact": "1234567890",
                        "address": "Dhankuta-5",
                        "totalMembers": 5,
                        "maleMembers": 2,
                        "femaleMembers": 3,
                        "otherMembers": 0
                    }
                ],
                "type": 'population'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [87.283692, 26.816956],
            },
            'properties': {
                "houseNumber": 14,
                "name": 'Rajan Baniya',
                "storey": 3,
                "ownerOccupation": 'Business',
                "annualIncome": 500000,
                "contact": "982088396",
                "address": "Chatara Line",
                "totalMembers": 13,
                "maleMembers": 8,
                "femaleMembers": 4,
                "otherMembers": 1,
                "onRent": "yes",
                "houseImage": "house2.jpg",
                "rentInfo": [
                    {
                        "rentOwner": "Krishna Giri",
                        "annualIncome": 1000000,
                        "occupation": "Driver",
                        "contact": "1234567890",
                        "address": "Shankhuwasava-5,khadbari",
                        "totalMembers": 3,
                        "maleMembers": 2,
                        "femaleMembers": 1,
                        "otherMembers": 0
                    },
                    {
                        "rentOwner": "Ramesh Basnet",
                        "annualIncome": 1500000,
                        "occupation": "Auto Driver",
                        "contact": "1234567890",
                        "address": "khotang-5",
                        "totalMembers": 3,
                        "maleMembers": 2,
                        "femaleMembers": 1,
                        "otherMembers": 0
                    }
                ],
                "type": 'population'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [87.282807, 26.816346],
            },
            properties: {
                "houseNumber": 15,
                "name": 'Bishan Jung Rana',
                "storey": 4,
                "ownerOccupation": 'Business',
                "annualIncome": 8000000,
                "contact": "982088396",
                "address": "Chatara Line",
                "totalMembers": 13,
                "maleMembers": 3,
                "femaleMembers": 4,
                "otherMembers": 1,
                "onRent": "yes",
                "houseImage": "house3.jpg",
                rentInfo: [
                    {
                        rentOwner: "Binod Giri",
                        annualIncome: 1000000,
                        occupation: "Driver",
                        contact: "1234567890",
                        address: "Shankhuwasava-5,khadbari",
                        totalMembers: 3,
                        maleMembers: 2,
                        femaleMembers: 1,
                        otherMembers: 0
                    },
                    {
                        rentOwner: "Ganesh Basnet",
                        annualIncome: 1500000,
                        occupation: "Auto Driver",
                        contact: "1234567890",
                        address: "khotang-5",
                        totalMembers: 3,
                        maleMembers: 2,
                        femaleMembers: 1,
                        otherMembers: 0
                    }
                ],
                "type": 'population'
            }
        },
    ])
    const [clickedButton, setClickedButton] = useState(1)
    const [selectedMapView, setSelectedMapView] = useState('General Map View')
    const [changedMapView, setChangedMapView] = useState(false)
    const [searchError, setSearchError] = useState(false)
    const [searchKeyword, setSearchKeyword] = useState('');
    const [flyCoordinate, setFlyCoordinate] = useState([]);

    const handleSearch = () => {
        const searchTerm = searchKeyword.toLowerCase()
        const searchedData = data.filter(item => (item.properties.name.toLowerCase()) === searchTerm)

        if (searchedData.length) {
            setFlyCoordinate(searchedData[0].geometry.coordinates)
            // setSearchKeyword('')
        } else {
            setSearchError(true)
        }
    }
    const householdData = data.filter(i => i.properties.type === 'population').map(itm => itm.properties);
    const populationCalculation = householdData.map(itm => {
        const male = itm.maleMembers;
        const female = itm.femaleMembers;
        const other = itm.otherMembers;
        const rentMale = itm.rentInfo.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue.maleMembers
        }, 0)
        const rentFeMale = itm.rentInfo.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue.femaleMembers
        }, 0)
        const rentOther = itm.rentInfo.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue.otherMembers
        }, 0)
        const totalMale = male + rentMale
        const totalFemale = female + rentFeMale
        const totalOther = other + rentOther;
        return ({
            totalMale: totalMale,
            totalFemale: totalFemale,
            totalOther: totalOther
        })
    })
    const genderWisePeopleOnHouseCalculation = householdData.map(itm => {
        const male = itm.maleMembers;
        const female = itm.femaleMembers;
        const other = itm.otherMembers;

        return ({
            totalMale: male,
            totalFemale: female,
            totalOther: other
        })
    })
    const totalMalePeopleonHouseCalculation = genderWisePeopleOnHouseCalculation.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue.totalMale
    }, 0)
    const totalFemalePeopleonHouseCalculation = genderWisePeopleOnHouseCalculation.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue.totalFemale
    }, 0)
    const totalOtherPeopleonHouseCalculation = genderWisePeopleOnHouseCalculation.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue.totalOther
    }, 0)
    const totalPeopleOnHouse = totalMalePeopleonHouseCalculation + totalFemalePeopleonHouseCalculation + totalOtherPeopleonHouseCalculation
    const genderWisepeopleonRentCalculation = data.filter(i => i.properties.type === 'population')
        .map(d => d.properties.rentInfo).map(dt => {
            const male = dt.reduce(function (previousValue, currentValue) {
                return previousValue + currentValue.maleMembers
            }, 0)
            const female = dt.reduce(function (previousValue, currentValue) {
                return previousValue + currentValue.femaleMembers
            }, 0)
            const other = dt.reduce(function (previousValue, currentValue) {
                return previousValue + currentValue.otherMembers
            }, 0)
            return ({
                rentMale: male,
                rentFemale: female,
                rentOther: other
            })
        })
    const totalMalePeopleonRentCalculation = genderWisepeopleonRentCalculation.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue.rentMale
    }, 0)
    const totalFemalePeopleonRentCalculation = genderWisepeopleonRentCalculation.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue.rentFemale
    }, 0)
    const totalOtherPeopleonRentCalculation = genderWisepeopleonRentCalculation.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue.rentOther
    }, 0)
    const totalPeopleOnRent = totalMalePeopleonRentCalculation + totalFemalePeopleonRentCalculation + totalOtherPeopleonRentCalculation;



    const finalTotalMaleCount = populationCalculation.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue.totalMale
    }, 0)
    const finalTotalFemaleCount = populationCalculation.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue.totalFemale
    }, 0)
    const finalTotalOtherCount = populationCalculation.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue.totalOther
    }, 0)

    const totalPopulation = finalTotalMaleCount + finalTotalFemaleCount + finalTotalOtherCount;
    const totalHouseHold = data.filter(i => i.properties.type === 'population').length;
    const totalHealthInstitution = data.filter(i => i.properties.type === 'health');
    const totalEducationalInstitution = data.filter(i => i.properties.type === 'education');
    const totalFinancialInstitution = data.filter(i => i.properties.type === 'finance');
    const totalCommunication = data.filter(i => i.properties.type === 'communication');
    const totalGovernance = data.filter(i => i.properties.type === 'governance');
    const totalHotel = data.filter(i => i.properties.type === 'hotel');
    const totalCulture = data.filter(i => i.properties.type === 'culture');
    const totalIndustries = data.filter(i => i.properties.type === 'industry');


    const OverallData = {
        labels: ['Household',
            'Health',
            'Education',
            'Finance',
            'Communication',
            'Governance',
            'Hotel/Resturant',
            'Cultural Heritage',
            'Industries'
        ],
        datasets: [
            {

                label: [''

                ],
                backgroundColor: [
                    '#F7D002',
                    '#3A9964',
                    '#D67A0A',
                    '#BC1D3D',
                    '#3DADF8',
                    '#f05620',
                    'F7D002',
                    '#3A9964',
                    '#D67A0A'

                ],
                borderColor: [
                    '#F7D002',
                    '#3A9964',
                    '#D67A0A',
                    '#BC1D3D',
                    '#3DADF8',
                    '#f05620',
                    'F7D002',
                    '#3A9964',
                    '#D67A0A'

                ],

                borderWidth: 2,
                barPercentage: 0.5,
                barThickness: 15,
                maxBarThickness: 50,
                minBarLength: 10,
                data: [
                    totalHouseHold,
                    totalHealthInstitution.length,
                    totalEducationalInstitution.length,
                    totalFinancialInstitution.length,
                    totalCommunication.length,
                    totalGovernance.length,
                    totalHotel.length,
                    totalCulture.length,
                    totalIndustries.length
                ]
            }
        ]
    }
    const PopulationDistribution = {
        labels: ['Male', 'Female', 'Other'],
        datasets: [
            {

                label: [''

                ],
                backgroundColor: [
                    '#F7D002',
                    '#3A9964',
                    '#D67A0A',
                ],
                borderColor: [
                    '#F7D002',
                    '#3A9964',
                    '#D67A0A',
                ],

                borderWidth: 2,
                barPercentage: 0.5,
                barThickness: 15,
                maxBarThickness: 50,
                minBarLength: 10,
                data: [
                    finalTotalMaleCount,
                    finalTotalFemaleCount,
                    finalTotalOtherCount
                ]
            }
        ]
    }
    const rentAndHousePeopleGraph = {
        labels: ['People With House', 'People on Rent'],
        datasets: [
            {

                label: [''

                ],
                backgroundColor: [
                    '#F7D002',
                    '#3A9964',

                ],
                borderColor: [
                    '#F7D002',
                    '#3A9964',

                ],

                borderWidth: 2,
                barPercentage: 0.5,
                barThickness: 15,
                maxBarThickness: 50,
                minBarLength: 10,
                data: [
                    totalPeopleOnHouse,
                    totalPeopleOnRent
                ]
            }
        ]
    }


    return (
        <div className='mainContainer' >
            <div className='sideBar' >
                <div style={{ height: '50px', backgroundColor: 'white', position: 'sticky', top: '0' }} >Dharn 12</div>
                {clickedButton === 1 ? <>
                    <Bar
                        data={OverallData}
                        options={{
                            indexAxis: 'y',
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'right',
                                    display: false
                                },
                                title: {
                                    display: true,
                                    text: 'Overall Household & Institution Information',
                                },
                            },
                            layout: {
                                padding: 10,
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true,
                                        fontColor: 'white'
                                    },
                                }],
                                xAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    },
                                }]
                            }
                        }}
                        width={800} height={600}
                    />
                    <Bar
                        data={PopulationDistribution}
                        options={{
                            indexAxis: 'y',
                            responsive: true,
                            layout: {
                                padding: 10
                            },
                            plugins: {
                                legend: {
                                    position: 'right',
                                    display: false
                                },
                                title: {
                                    display: true,
                                    text: 'Overall Information',
                                },
                            },

                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true,
                                        fontColor: 'white'
                                    },
                                }],
                                xAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    },
                                }]
                            }
                        }}
                        width={800} height={600}
                    /></> : ''}
                {clickedButton === 2 ?
                    <Bar
                        data={rentAndHousePeopleGraph}
                        options={{
                            indexAxis: 'y',
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'right',
                                    display: false
                                },
                                title: {
                                    display: true,
                                    text: 'Overall Household & Institution Information',
                                },
                            },
                            layout: {
                                padding: 10,
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true,
                                        fontColor: 'white'
                                    },
                                }],
                                xAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    },
                                }]
                            }
                        }}
                        width={800} height={600}
                    /> : ''
                }
                {clickedButton === 1 ?
                    <div className='data-count' >
                        <div>

                            <h2>Data Count</h2>
                        </div>
                        <div style={{ display: 'flex' }} >
                            <span style={{ width: '70%', fontSize: '20px' }} >Population:</span>
                            <span style={{ width: '30%', fontSize: '20px' }}>{totalPopulation}</span>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <span style={{ width: '70%', fontSize: '20px' }}>Male:</span>
                            <span style={{ width: '30%', fontSize: '20px' }}>{finalTotalMaleCount}</span>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <span style={{ width: '70%', fontSize: '20px' }}>Female:</span>
                            <span style={{ width: '30%', fontSize: '20px' }}>{finalTotalFemaleCount}</span>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <span style={{ width: '70%', fontSize: '20px' }}>Other:</span>
                            <span style={{ width: '30%', fontSize: '20px' }}>{finalTotalOtherCount}</span>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <span style={{ width: '70%', fontSize: '20px' }}>Household:</span>
                            <span style={{ width: '30%', fontSize: '20px' }}>{totalHouseHold}</span>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <span style={{ width: '70%', fontSize: '20px' }}>Health Institution:</span>
                            <span style={{ width: '30%', fontSize: '20px' }}>{totalHealthInstitution.length}</span>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <span style={{ width: '70%', fontSize: '20px' }}>Educational Institution:</span>
                            <span style={{ width: '30%', fontSize: '20px' }}>{totalEducationalInstitution.length}</span>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <span style={{ width: '70%', fontSize: '20px' }}>Financial Institution:</span>
                            <span style={{ width: '30%', fontSize: '20px' }}>{totalFinancialInstitution.length}</span>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <span style={{ width: '70%', fontSize: '20px' }}>Communication:</span>
                            <span style={{ width: '30%', fontSize: '20px' }}>{totalCommunication.length}</span>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <span style={{ width: '70%', fontSize: '20px' }}>Government Bodies:</span>
                            <span style={{ width: '30%', fontSize: '20px' }}>{totalGovernance.length}</span>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <span style={{ width: '70%', fontSize: '20px' }}>Hotel/Resturant:</span>
                            <span style={{ width: '30%', fontSize: '20px' }}>{totalHotel.length}</span>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <span style={{ width: '70%', fontSize: '20px' }}>Cultural Heritage:</span>
                            <span style={{ width: '30%', fontSize: '20px' }}>{totalCulture.length}</span>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <span style={{ width: '70%', fontSize: '20px' }}>Industries:</span>
                            <span style={{ width: '30%', fontSize: '20px' }}>{totalIndustries.length}</span>
                        </div>
                    </div> : ''
                }
                {clickedButton === 2 ?
                    <div className='data-count' >
                        <div>

                            <h2>Data Count</h2>
                        </div>
                        <div style={{ display: 'flex' }} >
                            <span style={{ width: '70%', fontSize: '20px' }} >People With House:</span>
                            <span style={{ width: '30%', fontSize: '20px' }}>{totalPeopleOnHouse}</span>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <span style={{ width: '70%', fontSize: '20px' }}>People on Rent:</span>
                            <span style={{ width: '30%', fontSize: '20px' }}>{totalPeopleOnRent}</span>
                        </div>

                    </div> : ''
                }
                {clickedButton === 3 ? <TableData title="Health Infrastructure"
                    data={totalHealthInstitution} /> : ''}
                {clickedButton === 4 ? <TableData title="Educational Institutions"
                    data={totalEducationalInstitution} /> : ''}
                {clickedButton === 5 ? <TableData title="Financial Institutions"
                    data={totalFinancialInstitution} /> : ''}
                {clickedButton === 6 ? <TableData title="Communication"
                    data={totalCommunication}
                /> : ''}
                {clickedButton === 7 ? <TableData title="Government Institution"
                    data={totalGovernance}
                /> : ''}
                {clickedButton === 8 ? <TableData title="Hotel/Resturant"
                    data={totalHotel}
                /> : ''}
                {clickedButton === 9 ? <TableData title="Cultural Heritage"
                    data={totalCulture}
                /> : ''}
                {clickedButton === 10 ? <TableData title="Industries"
                    data={totalIndustries}
                /> : ''}
            </div>
            <div className='mapContainer' >
                <div className="mapFilter">
                    <DropdownButton
                        id="dropdown-button-dark-example2"
                        variant="secondary"
                        menuVariant="dark"
                        title={selectedMapView}
                        className="mr-2"

                    >
                        <Dropdown.Item onClick={() => {
                            setSelectedMapView('General Map View')
                            setChangedMapView(true)
                        }} >General Map View</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            setSelectedMapView('Satellite Map View')
                            setChangedMapView(true)
                        }} >Satellite Map View</Dropdown.Item>

                    </DropdownButton>
                    <div>
                        <Form.Control
                            type="text"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                            placeholder='Search by Name'
                            value={searchKeyword}
                            size='md'
                            onChange={(e) => {
                                setSearchError(false)
                                setSearchKeyword(e.target.value)
                            }}

                        />

                        {searchError ? <Form.Text id="passwordHelpBlock"
                            style={{ position: 'absolute', color: 'red' }} >
                            Cannot find the name of your search value
                        </Form.Text> : ''}
                    </div>
                    <Button variant="light" className="ml-2" onClick={handleSearch} disabled={!searchKeyword} >Search</Button>{' '}
                </div>
                <Map data={data}
                    clickedButton={clickedButton}
                    selectedMapView={selectedMapView}
                    changedMapView={changedMapView}
                    setChangedMapView={setChangedMapView}
                    flyCoordinate={flyCoordinate}
                    setFlyCoordinate={setFlyCoordinate}
                />
                <div className='checkboxes' >
                    <div style={{ margin: '10px' }} >
                        <Form.Check
                            type='radio'
                            id='Overall'
                            label='Overall'
                            name='clickedButton'
                            value={1}
                            defaultChecked
                            onClick={() => setClickedButton(1)}

                        />
                        <Form.Check
                            name='clickedButton'
                            type='radio'
                            id='Population'
                            label='Population'
                            value={2}
                            onClick={() => setClickedButton(2)}
                        />
                        <Form.Check
                            name='clickedButton'
                            type='radio'
                            id='Health'
                            label='Health'
                            value={3}
                            onClick={() => setClickedButton(3)}
                        />
                        <Form.Check
                            name='clickedButton'
                            type='radio'
                            id='Education'
                            label='Education'
                            value={4}
                            onClick={() => setClickedButton(4)}
                        />
                        <Form.Check
                            name='clickedButton'
                            type='radio'
                            id='Banking'
                            label='Financial Institution'
                            value={5}
                            onClick={() => setClickedButton(5)}
                        />
                        <Form.Check
                            name='clickedButton'
                            type='radio'
                            id='Communication'
                            label='Communication'
                            value={6}
                            onClick={() => setClickedButton(6)}
                        />
                        <Form.Check
                            name='clickedButton'
                            type='radio'
                            id='Governance'
                            label='Government Institutions'
                            value={7}
                            onClick={() => setClickedButton(7)}
                        />
                        <Form.Check
                            name='clickedButton'
                            type='radio'
                            id='Hotels'
                            label='Hotel/Restaurant'
                            value={8}
                            onClick={() => setClickedButton(8)}
                        />
                        <Form.Check
                            name='clickedButton'
                            type='radio'
                            id='Culture'
                            label='Culture'
                            value={9}
                            onClick={() => setClickedButton(9)}
                        />
                        <Form.Check
                            name='clickedButton'
                            type='radio'
                            id='Industries'
                            label='Industries'
                            value={10}
                            onClick={() => setClickedButton(10)}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
