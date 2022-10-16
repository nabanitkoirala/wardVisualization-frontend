import React, { useEffect, useState } from 'react';
import cookie from 'js-cookie'
import axios from 'axios';
import { json, useNavigate } from 'react-router-dom';
import http from '../../Utils/Browsing';
const LandingPage = () => {
    const history = useNavigate();
    const [data, setData] = useState({
        geometry: {
            type: 'Point',
            coordinates: []
        },
        properties: {
            houseNumber: null,
            name: "",
            storey: null,
            ownerOccupation: "",
            annualIncome: "",
            contact: "",
            address: "",
            totalMembers: null,
            maleMembers: null,
            femaleMembers: null,
            otherMembers: null,
            onRent: false,
            rentInfo: [],
            type: 'Population',
            isDataVerified: false

        }
    })
    const [buildingImage, setBuildingImage] = useState(null);
    const [coordinates, setCoordinates] = useState({
        lat: '',
        long: ''
    })


    const [rentMemberCount, setRentMemberCount] = useState([0]);
    // useEffect(() => {
    //     axios.get('http://localhost:5000/api/v1/dataCollection')
    //         .then(function (response) {
    //             console.log("final result", response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }, [])

    const handleChange = (e) => {
        setData({
            ...data, properties: {
                ...data.properties,
                [e.target.name]: e.target.value
            }

        })
    }
    const handleRentStatus = (boolean) => {
        setData({
            ...data, properties: {
                ...data.properties,
                onRent: boolean
            }
        })
    }
    const handleImage = (e) => {
        setBuildingImage(

            e.target.files[0]


        )
    }
    console.log("This is render", rentMemberCount)
    console.log("This data", data)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const datas = { ...data, geometry: { ...data.geometry, coordinates: [coordinates.long, coordinates.lat] } }


        console.log("This is final data", datas)

        let form_data = {

            "geometry": {
                "type": "Point",
                "coordinates": datas.geometry.coordinates
            },
            "properties": {
                "houseNumber": datas.properties.houseNumber,
                "name": datas.properties.name,
                "storey": datas.properties.storey,
                "ownerOccupation": datas.properties.ownerOccupation,
                "annualIncome": datas.properties.annualIncome,
                "contact": datas.properties.contact,
                "address": datas.properties.address,
                "totalMembers": datas.properties.totalMembers,
                "maleMembers": datas.properties.maleMembers,
                "femaleMembers": datas.properties.femaleMembers,
                "otherMembers": datas.properties.otherMembers,
                "onRent": datas.properties.onRent,
                "buildingImage": buildingImage,
                "rentInfo": datas.properties.rentInfo,
                "type": "population",
                "isDataVerified": false
            }
        }
        // console.log("Form data", form_data)
        console.log("This building image", buildingImage);
        // form_data.properties['buildingImage'] = buildingImage;
        // form_data.append('geometry', 'salkdhlashdl')
        // form_data.append('properties', datas.properties)
        console.log("This is form dta", form_data)
        // await axios.post('http://localhost:5000/api/v1/dataCollection', form_data, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // })
        http.post('/dataCollection', form_data, true, true)
            .then(res => {
                console.log("This is response", res.data)
            })
            .catch(err => console.log("This is error", err))

        // console.log("This is final data", datas)
    }


    console.log("This is final data", data)
    console.log("Rent member count", rentMemberCount)

    useEffect(() => {
        if (data.properties.onRent) {
            setData({
                ...data, properties: {
                    ...data.properties,
                    rentInfo: [{
                        "rentOwner": "",
                        "annualIncome": "",
                        "occupation": "",
                        "contact": "",
                        "address": "",
                        "totalMembers": "",
                        "maleMembers": "",
                        "femaleMembers": "",
                        "otherMembers": ""
                    }]
                }
            })
        } else {
            setData({
                ...data, properties: {
                    ...data.properties,
                    rentInfo: []
                }
            })
        }
    }, [data.properties.onRent])


    const handleRentDetails = (e, i) => {
        // const finalData = { ...data.properties.rentInfo[i], [e.target.name]: e.target.value }
        // console.log("This is data for test", data)
        // console.log("These are e and i", e.target.name, e.target.value, i)
        // setData({
        //     ...data, properties: {
        //         ...data.properties,
        //         rentInfo: [...data.properties.rentInfo, data.properties.rentInfo[i][e.target.name] = e.target.value]
        //     }
        // })
        let newArray = [...data.properties.rentInfo];
        newArray[i] = { ...newArray[i], [e.target.name]: e.target.value }
        setData({
            ...data, properties: {
                ...data.properties,
                rentInfo: newArray
            }
        })
    }
    console.log("This is final array to submit", data)
    return (
        <>
            <div>This is landing page</div>
            <button type="button" onClick={() => {
                localStorage.clear()
                history('/login')

            }}>Logout</button>
            <p>Information</p>
            <input type="text" name="long" placeholder='Longitude' value={coordinates.long} onChange={(e) => setCoordinates({ ...coordinates, 'long': e.target.value })} /><br />
            <input type="text" name="lat" placeholder='Latitude' value={coordinates.lat} onChange={(e) => setCoordinates({ ...coordinates, 'lat': e.target.value })} /><br />
            <input type="number" name="houseNumber" placeholder="House Number" value={data.properties.houseNumber} onChange={(e) => handleChange(e)} /><br />
            <input type="text" name="name" placeholder="Owner Name" value={data.properties.name} onChange={handleChange} /><br />
            <input type="number" name='storey' placeholder="Storey" value={data.properties.storey} onChange={handleChange} /><br />
            <input type="text" name="ownerOccupation" placeholder="Owner Occupation" value={data.properties.ownerOccupation} onChange={handleChange} /><br />
            <input type="text" name="annualIncome" placeholder="Annual Income" value={data.properties.annualIncome} onChange={handleChange} /><br />
            <input type="text" name="contact" placeholder="Contact" value={data.properties.contact} onChange={handleChange} /><br />
            <input type="text" name="address" placeholder="Address" value={data.properties.address} onChange={handleChange} /><br />
            <input type="number" name="totalMembers" placeholder="Total Family Members" value={data.properties.totalMembers} onChange={handleChange} /><br />
            <input type="number" name="maleMembers" placeholder="Total male members" value={data.properties.maleMembers} onChange={handleChange} /><br />
            <input type="number" name="femaleMembers" placeholder="Total Female Members" value={data.properties.femaleMembers} onChange={handleChange} /><br />
            <input type="number" name="otherMembers" placeholder="Other members" value={data.properties.otherMembers} onChange={handleChange} /><br />
            <input type="file" name="buildingImage" placeholder="photo" onChange={handleImage} /><br />
            <p>House On Rent?</p>
            <input type="radio" id="age1" name="onRent" value={true} onChange={() => {

                handleRentStatus(true)
            }} /><br />
            <label for="age1" />Yes<br />
            <input type="radio" id="age2" name="onRent" value={false} defaultChecked

                onChange={() => {

                    handleRentStatus(false)
                }} /><br />
            <label for="age2" />No<br />

            {/* "rentOwner": "Doma Limbu",
            "annualIncome": "23444",
            "occupation": "Retired Army",
            "contact": "2323",
            "address": "Sankhuwasava",
            "totalMembers": "3",
            "maleMembers": "2",
            "femaleMembers": "1",
            "otherMembers": "0" */}
            {data.properties.onRent ? <>
                <button type='button' onClick={() => {
                    setData({
                        ...data, properties: {
                            ...data.properties,
                            rentInfo: [...data.properties.rentInfo, {
                                "rentOwner": "",
                                "annualIncome": "",
                                "occupation": "",
                                "contact": "",
                                "address": "",
                                "totalMembers": "",
                                "maleMembers": "",
                                "femaleMembers": "",
                                "otherMembers": ""
                            }]
                        }
                    })
                    setRentMemberCount([...rentMemberCount, rentMemberCount.length])
                }} >Add</button>

                {rentMemberCount.map((item, index) => (
                    <div key={item}>
                        {index !== 0 &&
                            <button type='button' onClick={() => {
                                let finalRentInfoData = data.properties.rentInfo;
                                finalRentInfoData.splice(index, 1);
                                setData({
                                    ...data, properties: {
                                        ...data.properties,
                                        rentInfo: finalRentInfoData
                                    }
                                })
                                setRentMemberCount(rentMemberCount.filter(i => i !== item))
                            }} >Remove</button>}
                        <p >{'Rent Info' + index}</p>
                        <input type="text" name="rentOwner" placeholder="Owner Name"
                            value={data.properties.rentInfo.length && data.properties.rentInfo[index].rentOwner}
                            onChange={(e) => handleRentDetails(e, index)} /><br />
                        <input type="text" name="annualIncome" placeholder="Annual Income"
                            value={data.properties.rentInfo.length && data.properties.rentInfo[index].annualIncome}
                            onChange={(e) => handleRentDetails(e, index)} /><br />
                        <input type="text" name="occupation" placeholder="Occupation"
                            value={data.properties.rentInfo.length && data.properties.rentInfo[index].occupation}
                            onChange={(e) => handleRentDetails(e, index)} /><br />
                        <input type="text" name="contact" placeholder="Contact"
                            value={data.properties.rentInfo.length && data.properties.rentInfo[index].contact}
                            onChange={(e) => handleRentDetails(e, index)} /><br />
                        <input type="text" name="address" placeholder="Address"
                            value={data.properties.rentInfo.length && data.properties.rentInfo[index].address}
                            onChange={(e) => handleRentDetails(e, index)} /><br />
                        <input type="text" name="totalMembers" placeholder="Total Members"
                            value={data.properties.rentInfo.length && data.properties.rentInfo[index].totalMembers}
                            onChange={(e) => handleRentDetails(e, index)} /><br />
                        <input type="text" name="maleMembers" placeholder="Male Members"
                            value={data.properties.rentInfo.length && data.properties.rentInfo[index].maleMembers}
                            onChange={(e) => handleRentDetails(e, index)} /><br />
                        <input type="text" name="femaleMembers" placeholder="Female Members"
                            value={data.properties.rentInfo.length && data.properties.rentInfo[index].femaleMembers}
                            onChange={(e) => handleRentDetails(e, index)} /><br />
                        <input type="text" name="otherMembers" placeholder="Other Members"
                            value={data.properties.rentInfo.length && data.properties.rentInfo[index].otherMembers}
                            onChange={(e) => handleRentDetails(e, index)} /><br />
                    </div>
                ))}

            </>
                : ''
            }

            <button type="button" onClick={handleSubmit}>Submit</button>







        </>
    )
}


export default LandingPage;