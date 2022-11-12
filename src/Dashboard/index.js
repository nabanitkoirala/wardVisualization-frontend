import React, { useEffect, useState } from 'react'
import Map from '../Components/Map'

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
import TableData from '../Components/TableData';
import GroupFilterListContainer from '../Components/GroupFilterListContainer';
import PopulationDistributionCount from '../Components/MinorComponents/PopulationDistribution/populationDistributionCount';
import InfrastructureGraph from '../Components/MinorComponents/InfrastructureGraph';
import SearchAndListDetails from '../Components/MinorComponents/SearchAndListDetails';
import http from '../Utils/Browsing'
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const Dashboard = () => {
    // const [data, setData] = useState([
    //     {
    //         'type': 'Feature',
    //         'id': 1,
    //         'geometry': {
    //             'type': 'Point',
    //             'coordinates': [87.283353, 26.816517]
    //         },
    //         'properties': {
    //             "name": 'Goroka Hospital',
    //             "contactNumber": 12345,
    //             "address": "dharan-12",
    //             "houseImage": "house3.jpg",
    //             "type": 'health'

    //         }
    //     },
    //     {
    //         'type': 'Feature',
    //         'id': 2,
    //         'geometry': {
    //             'type': 'Point',
    //             'coordinates': [87.283353, 26.816517]
    //         },
    //         'properties': {
    //             "name": 'Goroka Hospital',
    //             "contactNumber": 12345,
    //             "address": "dharan-12",
    //             "houseImage": "house3.jpg",
    //             "type": 'health'

    //         }
    //     },
    //     {
    //         'type': 'Feature',
    //         'id': 3,
    //         'geometry': {
    //             'type': 'Point',
    //             'coordinates': [87.283353, 26.816517]
    //         },
    //         'properties': {
    //             "name": 'Goroka Hospital',
    //             "contactNumber": 12345,
    //             "address": "dharan-12",
    //             "houseImage": "house3.jpg",
    //             "type": 'health'

    //         }
    //     },
    //     {
    //         'type': 'Feature',
    //         'id': 4,
    //         'geometry': {
    //             'type': 'Point',
    //             'coordinates': [87.285153, 26.816444],
    //         },
    //         'properties': {
    //             "name": 'Kainantu hospital',
    //             "contactNumber": 12345,
    //             "address": "dharan-12",
    //             "houseImage": "house3.jpg",
    //             "type": 'health'
    //         }
    //     },
    //     {
    //         'type': 'Feature',
    //         'id': 5,
    //         'geometry': {
    //             'type': 'Point',
    //             'coordinates': [87.285040, 26.815397],
    //         },
    //         'properties': {
    //             "name": 'LOPI School',
    //             "contactNumber": 12345,
    //             "address": "dharan-12",
    //             "houseImage": "house3.jpg",
    //             "type": 'education'
    //         }

    //     },
    //     {
    //         'type': 'Feature',
    //         'id': 6,
    //         'geometry': {
    //             'type': 'Point',
    //             'coordinates': [87.283593, 26.815758],
    //         },
    //         'properties': {
    //             "name": 'Saint Marry School',
    //             "contactNumber": 12345,
    //             "address": "dharan-12",
    //             "houseImage": "house3.jpg",
    //             "type": 'education'
    //         }

    //     },
    //     {
    //         'type': 'Feature',
    //         'id': 7,
    //         'geometry': {
    //             'type': 'Point',
    //             'coordinates': [87.285004, 26.815421],
    //         },
    //         'properties': {
    //             "name": 'Kumari Bank Ltd',
    //             "contactNumber": 12345,
    //             "address": "dharan-12",
    //             "houseImage": "house3.jpg",
    //             "type": 'finance'
    //         }

    //     },
    //     {
    //         'type': 'Feature',
    //         'id': 8,
    //         'geometry': {
    //             'type': 'Point',
    //             'coordinates': [87.279859, 26.816394],
    //         },
    //         'properties': {
    //             "name": 'Prabhu Bank Limited',
    //             "contactNumber": 12345,
    //             "address": "dharan-12",
    //             "houseImage": "house3.jpg",
    //             "type": 'finance'
    //         }

    //     },
    //     {
    //         'type': 'Feature',
    //         'id': 9,
    //         'geometry': {
    //             'type': 'Point',
    //             'coordinates': [87.284443, 26.816281],
    //         },
    //         'properties': {
    //             "name": 'Radio Nepal',
    //             "contactNumber": 12345,
    //             "address": "dharan-12",
    //             "houseImage": "house3.jpg",
    //             "type": 'communication'
    //         }

    //     },
    //     {
    //         'type': 'Feature',
    //         'id': 10,
    //         'geometry': {
    //             'type': 'Point',
    //             'coordinates': [87.283890, 26.815385],
    //         },
    //         'properties': {
    //             "name": 'Radio Makalu',
    //             "contactNumber": 12345,
    //             "address": "dharan-12",
    //             "houseImage": "house3.jpg",
    //             "type": 'communication'
    //         }

    //     },
    //     {
    //         'type': 'Feature',
    //         'id': 11,
    //         'geometry': {
    //             'type': 'Point',
    //             'coordinates': [87.281845, 26.816449],
    //         },
    //         'properties': {
    //             "name": 'Ward 12 office',
    //             "contactNumber": 12345,
    //             "address": "dharan-12",
    //             "houseImage": "house3.jpg",
    //             "type": 'governance'
    //         }
    //     },
    //     {
    //         'type': 'Feature',
    //         'id': 12,
    //         'geometry': {
    //             'type': 'Point',
    //             'coordinates': [87.281741, 26.816630],
    //         },
    //         'properties': {
    //             "name": 'Dharan Municipality',
    //             "contactNumber": 12345,
    //             "address": "dharan-12",
    //             "houseImage": "house3.jpg",
    //             "type": 'governance'
    //         }
    //     },
    //     {
    //         'type': 'Feature',
    //         'id': 13,
    //         'geometry': {
    //             'type': 'Point',
    //             'coordinates': [87.277400, 26.816167],
    //         },
    //         'properties': {
    //             "name": 'Star Hotel',
    //             "contactNumber": 12345,
    //             "address": "dharan-12",
    //             "houseImage": "house3.jpg",
    //             "type": 'hotel'
    //         }
    //     },
    //     {
    //         'type': 'Feature',
    //         'id': 14,
    //         'geometry': {
    //             'type': 'Point',
    //             'coordinates': [87.278822, 26.815332],
    //         },
    //         'properties': {
    //             "name": 'Zenith Hotel',
    //             "contactNumber": 12345,
    //             "address": "dharan-12",
    //             "houseImage": "house3.jpg",
    //             "type": 'hotel'
    //         }
    //     },
    //     {
    //         'type': 'Feature',
    //         'id': 15,
    //         'geometry': {
    //             'type': 'Point',
    //             'coordinates': [87.279390, 26.814655],
    //         },
    //         'properties': {
    //             "name": 'Shiva Mandir',
    //             "contactNumber": 12345,
    //             "address": "dharan-12",
    //             "houseImage": "house3.jpg",
    //             "type": 'culture'
    //         }
    //     },
    //     {
    //         'type': 'Feature',
    //         'id': 16,
    //         'geometry': {
    //             'type': 'Point',
    //             'coordinates': [87.281369, 26.814031],
    //         },
    //         'properties': {
    //             "name": 'Zame Maszid',
    //             "contactNumber": 12345,
    //             "address": "dharan-12",
    //             "houseImage": "house3.jpg",
    //             "type": 'culture'
    //         }
    //     },
    //     {
    //         'type': 'Feature',
    //         'id': 17,
    //         'geometry': {
    //             'type': 'Point',
    //             'coordinates': [87.282886, 26.815184],
    //         },
    //         'properties': {
    //             "name": 'Krishna Dhago Udhyog',
    //             "contactNumber": 12345,
    //             "address": "dharan-12",
    //             "houseImage": "house2.jpg",
    //             "type": 'industry'
    //         }
    //     },
    //     {
    //         'type': 'Feature',
    //         'id': 18,
    //         'geometry': {
    //             'type': 'Point',
    //             'coordinates': [87.283443, 26.815871],
    //         },
    //         'properties': {
    //             "name": 'Shiva Pauroti Udhyog',
    //             "contactNumber": 12345,
    //             "address": "dharan-12",
    //             "houseImage": "house3.jpg",
    //             "type": 'industry'
    //         }
    //     },
    //     {
    //         'type': 'Feature',
    //         'id': 19,
    //         'geometry': {
    //             'type': 'Point',
    //             'coordinates': [87.283899, 26.816808],
    //         },
    //         'properties': {
    //             "houseNumber": 13,
    //             "name": 'Ram Kumar Thapa',
    //             "storey": 3,
    //             "ownerOccupation": 'Business',
    //             "annualIncome": 500000,
    //             "contact": "982088396",
    //             "address": "Chatara Line",
    //             "totalMembers": 13,
    //             "maleMembers": 8,
    //             "femaleMembers": 4,
    //             "otherMembers": 1,
    //             "onRent": "yes",
    //             "houseImage": "house1.jpg",
    //             "rentInfo": [
    //                 {
    //                     "rentOwner": "Samaya Wagle",
    //                     "annualIncome": 3000000,
    //                     "occupation": "Business",
    //                     "contact": "1234567890",
    //                     "address": "Dhankuta-5",
    //                     "totalMembers": 5,
    //                     "maleMembers": 2,
    //                     "femaleMembers": 3,
    //                     "otherMembers": 0
    //                 }
    //             ],
    //             "type": 'population'
    //         }
    //     },
    //     {
    //         'type': 'Feature',
    //         'id': 20,
    //         'geometry': {
    //             'type': 'Point',
    //             'coordinates': [87.279703, 26.816739],
    //         },
    //         'properties': {
    //             "houseNumber": 14,
    //             "name": 'Buddhi Bahadur Rai',
    //             "storey": 3,
    //             "ownerOccupation": 'Business',
    //             "annualIncome": 500000,
    //             "contact": "982088396",
    //             "address": "Chatara Line",
    //             "totalMembers": 13,
    //             "maleMembers": 8,
    //             "femaleMembers": 4,
    //             "otherMembers": 1,
    //             "onRent": "yes",
    //             "houseImage": "house2.jpg",
    //             "rentInfo": [
    //                 {
    //                     "rentOwner": "Gopal Giri",
    //                     "annualIncome": 1000000,
    //                     "occupation": "Driver",
    //                     "contact": "1234567890",
    //                     "address": "Shankhuwasava-5,khadbari",
    //                     "totalMembers": 5,
    //                     "maleMembers": 4,
    //                     "femaleMembers": 1,
    //                     "otherMembers": 0
    //                 },
    //                 {
    //                     "rentOwner": "Ramesh Basnet",
    //                     "annualIncome": 1500000,
    //                     "occupation": "Auto Driver",
    //                     "contact": "1234567890",
    //                     "address": "khotang-5",
    //                     "totalMembers": 3,
    //                     "maleMembers": 2,
    //                     "femaleMembers": 1,
    //                     "otherMembers": 0
    //                 }
    //             ],
    //             "type": 'population'
    //         }
    //     },
    //     {
    //         'type': 'Feature',
    //         'id': 21,
    //         'geometry': {
    //             'type': 'Point',
    //             'coordinates': [87.280195, 26.816607]
    //         },
    //         'properties': {
    //             "houseNumber": 15,
    //             "name": 'Ramesh Jung Thapa',
    //             "storey": 3,
    //             "ownerOccupation": 'Business',
    //             "annualIncome": 500000,
    //             "contact": "982088396",
    //             "address": "Chatara Line",
    //             "totalMembers": 13,
    //             "maleMembers": 8,
    //             "femaleMembers": 4,
    //             "otherMembers": 1,
    //             "onRent": "yes",
    //             "houseImage": "house2.jpg",
    //             "rentInfo": [
    //                 {
    //                     "rentOwner": "Krishna Giri",
    //                     "annualIncome": 1000000,
    //                     "occupation": "Driver",
    //                     "contact": "1234567890",
    //                     "address": "Shankhuwasava-5,khadbari",
    //                     "totalMembers": 3,
    //                     "maleMembers": 2,
    //                     "femaleMembers": 1,
    //                     "otherMembers": 0
    //                 },
    //                 {
    //                     "rentOwner": "Ramesh Basnet",
    //                     "annualIncome": 1500000,
    //                     "occupation": "Auto Driver",
    //                     "contact": "1234567890",
    //                     "address": "khotang-5",
    //                     "totalMembers": 3,
    //                     "maleMembers": 2,
    //                     "femaleMembers": 1,
    //                     "otherMembers": 0
    //                 }
    //             ],
    //             "type": 'population'
    //         }
    //     },
    //     {
    //         'type': 'Feature',
    //         'id': 22,
    //         'geometry': {
    //             'type': 'Point',
    //             'coordinates': [87.279838, 26.816284],
    //         },
    //         'properties': {
    //             "houseNumber": 16,
    //             "name": 'Govinda Bahadur Rai',
    //             "storey": 3,
    //             "ownerOccupation": 'Business',
    //             "annualIncome": 500000,
    //             "contact": "982088396",
    //             "address": "Chatara Line",
    //             "totalMembers": 13,
    //             "maleMembers": 8,
    //             "femaleMembers": 4,
    //             "otherMembers": 1,
    //             "onRent": "yes",
    //             "houseImage": "house2.jpg",
    //             "rentInfo": [
    //                 {
    //                     "rentOwner": "Krishna Giri",
    //                     "annualIncome": 1000000,
    //                     "occupation": "Driver",
    //                     "contact": "1234567890",
    //                     "address": "Shankhuwasava-5,khadbari",
    //                     "totalMembers": 3,
    //                     "maleMembers": 2,
    //                     "femaleMembers": 1,
    //                     "otherMembers": 0
    //                 },
    //                 {
    //                     "rentOwner": "Ramesh Basnet",
    //                     "annualIncome": 1500000,
    //                     "occupation": "Auto Driver",
    //                     "contact": "1234567890",
    //                     "address": "khotang-5",
    //                     "totalMembers": 3,
    //                     "maleMembers": 2,
    //                     "femaleMembers": 1,
    //                     "otherMembers": 0
    //                 }
    //             ],
    //             "type": 'population'
    //         }
    //     },
    //     {
    //         'type': 'Feature',
    //         'id': 23,
    //         'geometry': {
    //             'type': 'Point',
    //             'coordinates': [87.280269, 26.816231]
    //         },
    //         properties: {
    //             "houseNumber": 17,
    //             "name": 'Nirmal Rai',
    //             "storey": 4,
    //             "ownerOccupation": 'Business',
    //             "annualIncome": 8000000,
    //             "contact": "982088396",
    //             "address": "Chatara Line",
    //             "totalMembers": 13,
    //             "maleMembers": 3,
    //             "femaleMembers": 4,
    //             "otherMembers": 1,
    //             "onRent": "yes",
    //             "houseImage": "house3.jpg",
    //             rentInfo: [
    //                 {
    //                     rentOwner: "Binod Giri",
    //                     annualIncome: 1000000,
    //                     occupation: "Driver",
    //                     contact: "1234567890",
    //                     address: "Shankhuwasava-5,khadbari",
    //                     totalMembers: 3,
    //                     maleMembers: 2,
    //                     femaleMembers: 1,
    //                     otherMembers: 0
    //                 },
    //                 {
    //                     rentOwner: "Ganesh Basnet",
    //                     annualIncome: 1500000,
    //                     occupation: "Auto Driver",
    //                     contact: "1234567890",
    //                     address: "khotang-5",
    //                     totalMembers: 3,
    //                     maleMembers: 2,
    //                     femaleMembers: 1,
    //                     otherMembers: 0
    //                 }
    //             ],
    //             "type": 'population'
    //         }
    //     },
    // ])
    const [data, setData] = useState([])

    const [clickedButton, setClickedButton] = useState(1)
    const [selectedMapView, setSelectedMapView] = useState('General Map View')
    const [changedMapView, setChangedMapView] = useState(false)
    const [searchError, setSearchError] = useState(false)
    const [searchKeyword, setSearchKeyword] = useState('');
    const [flyCoordinate, setFlyCoordinate] = useState([]);
    const [hoveredId, setHoveredId] = useState(null);

    const [houseHoldCount, setHouseHoldCount] = useState([]);
    const [mapViewStyle, setMapViewStyle] = useState('');
    const [displayName, setDisplayName] = useState('Overall')
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



    const overallFinalData = [
        {
            name: 'Household',
            value: totalHouseHold,
            color: '#FFA500'
        },
        {
            name: 'Health',
            value: totalHealthInstitution.length,
            color: '#E5E5E5'
        },
        {
            name: 'Education',
            value: totalEducationalInstitution.length,
            color: '#A0C5E8'
        },
        {
            name: 'Finance',
            value: totalFinancialInstitution.length,
            color: '#E5E5E5'
        },
        {
            name: 'Communication',
            value: totalCommunication.length,
            color: '#17A2FF'
        },
        {
            name: 'Governance',
            value: totalGovernance.length,
            color: '#F54100'
        },
        {
            name: 'Hotel/Resturant',
            value: totalHotel.length,
            color: '#000000'
        },
        {
            name: 'Cultural Heritage',
            value: totalCulture.length,
            color: '#1F9F59'
        },
        {
            name: 'Industries',
            value: totalIndustries.length,
            color: '#CA6F00'
        }
    ]
    const totalDataCount = overallFinalData.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue.value
    }, 0)

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




    const searchTerm = searchKeyword.toLowerCase()

    const searchedData = data.filter(item => (item.properties.name.toLowerCase()) === searchTerm)
    useEffect(() => {
        const householdCount = data.filter(i => i.properties.type === 'population');
        setHouseHoldCount(householdCount)
    }, [data])
    const handleChangeSearch = (value) => {
        const householdCount = data.filter(i => i.properties.type === 'population');
        const filteredData = householdCount.filter((item, i) => (
            item.properties.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
        ));

        setHouseHoldCount(filteredData)

    }

    useEffect(() => {

        switch (clickedButton) {
            case 1:

                setDisplayName('Overall')
                break;

            case 2:
                setDisplayName('HouseHold')
                break;

            case 3:
                setDisplayName('Health')
                break;
            case 4:
                setDisplayName('Education')
                break;
            case 5:
                setDisplayName('Finance')
                break;
            case 6:
                setDisplayName('Communication')
                break;
            case 7:
                setDisplayName('Governance')
                break;
            case 8:
                setDisplayName('Hotel/Resturant')
                break;
            case 9:
                setDisplayName('Cultural Heritage')
                break;
            case 10:
                setDisplayName('Industries')
                break;

            default:
                setDisplayName('Overall')
                break;
        }
    }, [clickedButton])
    useEffect(() => {

        http.get('/dataCollection', true)
            .then(function (response) {
                console.log("This is response", response.data.data)
                const responseParse = response.data.data.map((item, index) => {
                    const parsedData = {
                        'type': 'Feature',
                        'id': index + 1,
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [Number(item.geometry.coordinates[1]), Number(item.geometry.coordinates[0])],
                        },
                        'properties': {
                            "houseNumber": item.properties.houseNumber,
                            "name": item.properties.name,
                            "storey": item.properties.storey,
                            "ownerOccupation": item.properties.ownerOccupation,
                            "annualIncome": Number(item.properties.annualIncome),
                            "contact": item.properties.contact,
                            "address": item.properties.address,
                            "totalMembers": item.properties.totalMembers,
                            "maleMembers": item.properties.maleMembers,
                            "femaleMembers": item.properties.femaleMembers,
                            "otherMembers": item.properties.otherMembers,
                            "onRent": item.properties.onRent,
                            "houseImage": item.properties.buildingImage,
                            "rentInfo": item.properties.rentInfo.length ? item.properties.rentInfo.map((rent) => {
                                return ({
                                    "rentOwner": rent.rentOwner,
                                    "annualIncome": Number(rent.annualIncome),
                                    "occupation": rent.occupation,
                                    "contact": rent.contact,
                                    "address": rent.address,
                                    "totalMembers": rent.totalMembers,
                                    "maleMembers": rent.maleMembers,
                                    "femaleMembers": rent.femaleMembers,
                                    "otherMembers": rent.otherMembers
                                })
                            }) : [],
                            "type": 'population'
                        }
                    }
                    return parsedData

                })
                console.log("Is this final data", JSON.stringify(responseParse))
                setData(responseParse)

            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])
    console.log("This is external data", data)
    console.log("This is household count", houseHoldCount)

    return (
        <div className='mainContainers' >
            <div className='sideBar' >
                <div style={{ height: '100px', backgroundColor: 'white', position: 'sticky', top: '0', borderBottom: '1px solid gainsboro', zIndex: 1 }} >Dharn 12

                </div>

                <PopulationDistributionCount
                    overallData={clickedButton === 1 ? true : false}
                    houseHoldData={clickedButton === 2 ? true : false}
                    setClickedButton={setClickedButton}
                    clickedButton={clickedButton}
                    finalTotalMaleCount={finalTotalMaleCount}
                    finalTotalFemaleCount={finalTotalFemaleCount}
                    finalTotalOtherCount={finalTotalOtherCount}
                    totalPeopleOnHouse={totalPeopleOnHouse}
                    totalPeopleOnRent={totalPeopleOnRent}
                    displayName={displayName}



                />
                {
                    clickedButton === 1 && <InfrastructureGraph
                        data={overallFinalData}

                    />

                }
                {
                    clickedButton !== 1 &&

                    <SearchAndListDetails
                        setSearchError={setSearchError}
                        setSearchKeyword={setSearchKeyword}
                        handleChangeSearch={handleChangeSearch}
                        searchKeyword={searchKeyword}
                        houseHoldCount={houseHoldCount}
                        setHoveredId={setHoveredId}
                        setFlyCoordinate={setFlyCoordinate}

                    />
                }

            </div>
            <div className='mapContainer' >
                {data.length ?
                    <Map
                        data={data}
                        clickedButton={clickedButton}
                        selectedMapView={selectedMapView}
                        changedMapView={changedMapView}
                        setChangedMapView={setChangedMapView}
                        flyCoordinate={flyCoordinate}
                        setFlyCoordinate={setFlyCoordinate}
                        hoveredId={hoveredId}
                        mapViewStyle={mapViewStyle}
                    /> : ""}

            </div>
        </div >
    )
}

export default Dashboard
