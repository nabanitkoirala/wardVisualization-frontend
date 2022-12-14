/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef, useState } from 'react';
import cookie from 'js-cookie'
import axios from 'axios';
import { json, useNavigate } from 'react-router-dom';
import http from '../../Utils/Browsing';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './styles.scss';
import { statusProgressContext } from '../../Utils/Store';
import ProgressBar from 'react-bootstrap/ProgressBar';
import PaginationData from '../../Components/Pagination/Pagination';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';













function MyVerticallyCenteredModal(props) {

    const { coordinates, setCoordinates, data, setData,
        handleChange, handleRentStatus,
        setRentMemberCount, rentMemberCount, handleRentDetails, handleImage,
        imageUpload,
        handleSubmit, buildingImage, editDataClicked, handleUpdate } = props

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Household Information
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Longitude</Form.Label>
                        <Form.Control type="text"
                            name="long" placeholder='Longitude'
                            value={coordinates.long}
                            onChange={(e) => setCoordinates({ ...coordinates, 'long': e.target.value })} />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control type="text" name="lat"
                            placeholder='Latitude'
                            value={coordinates.lat}
                            onChange={(e) => setCoordinates({ ...coordinates, 'lat': e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>House Number</Form.Label>
                        <Form.Control type="number"
                            name="houseNumber"
                            placeholder="House Number"
                            value={data.properties.houseNumber} onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Owner Name</Form.Label>
                        <Form.Control type="text"
                            name="name"
                            placeholder="Owner Name"
                            value={data.properties.name} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Storey</Form.Label>
                        <Form.Control
                            type="number"
                            name='storey'
                            placeholder="Storey"
                            value={data.properties.storey}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Owner Occupation</Form.Label>
                        <Form.Control
                            type="text"
                            name="ownerOccupation"
                            placeholder="Owner Occupation"
                            value={data.properties.ownerOccupation}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Annual Income</Form.Label>
                        <Form.Control
                            type="text"
                            name="annualIncome"
                            placeholder="Annual Income"
                            value={data.properties.annualIncome}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control
                            type="text"
                            name="contact"
                            placeholder="Contact"
                            value={data.properties.contact}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={data.properties.address}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Total Family Member</Form.Label>
                        <Form.Control
                            type="number"
                            name="totalMembers"
                            placeholder="Total Family Members"
                            value={data.properties.totalMembers}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Male</Form.Label>
                        <Form.Control
                            type="number"
                            name="maleMembers"
                            placeholder="Total male members"
                            value={data.properties.maleMembers}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Female</Form.Label>
                        <Form.Control
                            type="number"
                            name="femaleMembers"
                            placeholder="Total Female Members"
                            value={data.properties.femaleMembers}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Other</Form.Label>
                        <Form.Control
                            type="number"
                            name="otherMembers"
                            placeholder="Other members"
                            value={data.properties.otherMembers}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Building Image</Form.Label>
                        <Form.Control
                            type="file"
                            name="buildingImage"
                            placeholder="photo"
                            ref={imageUpload}
                            onChange={handleImage} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Is House on Rent?" name="onRent" defaultChecked={data.properties.onRent ? true : false} value={data.properties.onRent} onChange={() => {

                            handleRentStatus(true)
                        }} />
                    </Form.Group>
                    {data.properties.onRent ?
                        <>
                            <Button variant="primary" type="submit"
                                onClick={(e) => {
                                    e.preventDefault()
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
                                }} >Add</Button>

                            {rentMemberCount.map((item, index) => (
                                <div key={item}>
                                    {index !== 0 &&
                                        <Button variant="primary" type="button" onClick={() => {
                                            let finalRentInfoData = data.properties.rentInfo;
                                            finalRentInfoData.splice(index, 1);
                                            setData({
                                                ...data, properties: {
                                                    ...data.properties,
                                                    rentInfo: finalRentInfoData
                                                }
                                            })
                                            setRentMemberCount(rentMemberCount.filter(i => i !== item))
                                        }} >Remove</Button>}
                                    <p >{'Rent Info' + index}</p>
                                    { }
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Rent Owner</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="rentOwner"
                                            placeholder="Owner Name"
                                            value={data.properties.rentInfo.length && data.properties.rentInfo[index].rentOwner}
                                            onChange={(e) => handleRentDetails(e, index)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Annual Income</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="annualIncome"
                                            placeholder="Annual Income"
                                            value={data.properties.rentInfo.length && data.properties.rentInfo[index].annualIncome}
                                            onChange={(e) => handleRentDetails(e, index)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Occupation</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="occupation"
                                            placeholder="Occupation"
                                            value={data.properties.rentInfo.length && data.properties.rentInfo[index].occupation}
                                            onChange={(e) => handleRentDetails(e, index)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Contact</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="contact"
                                            placeholder="Contact"
                                            value={data.properties.rentInfo.length && data.properties.rentInfo[index].contact}
                                            onChange={(e) => handleRentDetails(e, index)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="address"
                                            placeholder="Address"
                                            value={data.properties.rentInfo.length && data.properties.rentInfo[index].address}
                                            onChange={(e) => handleRentDetails(e, index)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Total Members</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="totalMembers"
                                            placeholder="Total Members"
                                            value={data.properties.rentInfo.length && data.properties.rentInfo[index].totalMembers}
                                            onChange={(e) => handleRentDetails(e, index)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Male</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="maleMembers"
                                            placeholder="Male Members"
                                            value={data.properties.rentInfo.length && data.properties.rentInfo[index].maleMembers}
                                            onChange={(e) => handleRentDetails(e, index)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Female</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="femaleMembers"
                                            placeholder="Female Members"
                                            value={data.properties.rentInfo.length && data.properties.rentInfo[index].femaleMembers}
                                            onChange={(e) => handleRentDetails(e, index)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Other</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="otherMembers"
                                            placeholder="Other Members"
                                            value={data.properties.rentInfo.length && data.properties.rentInfo[index].otherMembers}
                                            onChange={(e) => handleRentDetails(e, index)} />
                                    </Form.Group>

                                </div>
                            ))}
                        </> : ''}

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type="button" onClick={editDataClicked ? handleUpdate : handleSubmit}>
                    Submit
                </Button>
                <Button onClick={props.onHide}>Close</Button>

            </Modal.Footer>
        </Modal>
    );
}
const LandingPage = () => {
    const history = useNavigate();
    const [statusProgress, setStatusProgress] = useContext(statusProgressContext)
    const [modalShow, setModalShow] = useState(false);
    const imageUpload = useRef();
    const fileUploadRef = useRef();
    const [receivedData, setReceivedData] = useState([]);
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
    const [fileUpload, setFileUpload] = useState(null)
    const [coordinates, setCoordinates] = useState({
        lat: '',
        long: ''
    })
    const [showProgressBar, setShowProgressBar] = useState(false)

    const [rentMemberCount, setRentMemberCount] = useState([0]);
    const [editDataClicked, setEditDataClicked] = useState(false)
    const [editDataId, setEditDataId] = useState()

    //data for pagination
    const [totalDataCount, setTotalDataCount] = useState()
    const [pageDataLimit, setPageDataLimit] = useState(3)
    const [isLoading, setIsLoading] = useState(false)
    const [searchWord, setSearchWord] = useState('')
    const [searchActivated, setSearchActivated] = useState(false)
    const [loading, setLoading] = useState(false)


    const fetchData = (page, limit, searchKey) => {
        console.log("What page limit", page, limit)
        setLoading(true)
        setIsLoading(true)
        http.get(`/dataCollection?page=${page || 1}&limit=${limit}&search=${searchKey || ''}`, true)
            .then(function (response) {

                setReceivedData(response.data.data)
                setTotalDataCount(response.data.totalDataCount)
                console.log("This is final response", response.data)
                setIsLoading(false)
                setLoading(false)
                setSearchActivated(searchKey ? true : false)


            })
            .catch(function (error) {
                console.log(error);
                setIsLoading(false)
            });
    }
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
                onRent: !data.properties.onRent
            }
        })
    }
    const handleImage = (e) => {
        setBuildingImage(

            e.target.files[0]


        )
    }
    const handleFileUploadChange = (e) => {
        setFileUpload(e.target.files[0])
    }

    const handleFileUpload = async (e) => {
        e.preventDefault()
        setShowProgressBar(true)
        let form_data = new FormData();
        form_data.append('file', fileUpload)
        http.post('/dataCollection', form_data, true, true, setStatusProgress)
            .then((res) => {
                fetchData()
                fileUploadRef.current.value = ""
                setShowProgressBar(false)
                setStatusProgress(0)
            }).catch(err => console.log("Error", err))

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const datas = { ...data, geometry: { ...data.geometry, coordinates: [coordinates.long, coordinates.lat] } }




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

        // form_data.properties['buildingImage'] = buildingImage;
        // form_data.append('geometry', 'salkdhlashdl')
        // form_data.append('properties', datas.properties)

        // await axios.post('http://localhost:5000/api/v1/dataCollection', form_data, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // })
        http.post('/dataCollection/?email=user@gmail.com&password=user123', form_data, false, true, setStatusProgress)
            .then(res => {

                fetchData()
                imageUpload.current.value = ""
                setCoordinates({
                    lat: '',
                    long: ''
                })
                setRentMemberCount([0])
                setBuildingImage(null)
                setData({
                    geometry: {
                        type: 'Point',
                        coordinates: []
                    },
                    properties: {
                        houseNumber: "",
                        name: "",
                        storey: "",
                        ownerOccupation: "",
                        annualIncome: "",
                        contact: "",
                        address: "",
                        totalMembers: "",
                        maleMembers: "",
                        femaleMembers: "",
                        otherMembers: "",
                        onRent: false,
                        rentInfo: [],
                        type: 'Population',
                        isDataVerified: false

                    }
                })

            })
            .catch(err => console.log("This is error", err))

        // console.log("This is final data", datas)
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        const datas = { ...data, geometry: { ...data.geometry, coordinates: [coordinates.long, coordinates.lat] } }



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
                "buildingImage": buildingImage || datas.properties.buildingImage,
                "rentInfo": datas.properties.rentInfo,
                "type": "population",
                "isDataVerified": false
            }
        }
        // console.log("Form data", form_data)

        // form_data.properties['buildingImage'] = buildingImage;
        // form_data.append('geometry', 'salkdhlashdl')
        // form_data.append('properties', datas.properties)

        // await axios.post('http://localhost:5000/api/v1/dataCollection', form_data, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // })
        http.put(`/dataCollection/${editDataId}`, form_data, true, true, setStatusProgress)
            .then(res => {

                fetchData()
                imageUpload.current.value = ""
                setCoordinates({
                    lat: '',
                    long: ''
                })
                setRentMemberCount([0])
                setBuildingImage(null)
                setData({
                    geometry: {
                        type: 'Point',
                        coordinates: []
                    },
                    properties: {
                        houseNumber: "",
                        name: "",
                        storey: "",
                        ownerOccupation: "",
                        annualIncome: "",
                        contact: "",
                        address: "",
                        totalMembers: "",
                        maleMembers: "",
                        femaleMembers: "",
                        otherMembers: "",
                        onRent: false,
                        rentInfo: [],
                        type: 'Population',
                        isDataVerified: false

                    }
                })

            })
            .catch(err => console.log("This is error", err))

        // console.log("This is final data", datas)
    }



    useEffect(() => {
        if (!editDataClicked) {
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
        }
    }, [data.properties.onRent])
    const handleClickPaginationButton = (page, limit) => {
        http.get(`/dataCollection/?page=${page}&limit=${limit}`, true)
            .then(function (response) {

                setReceivedData(response.data.data)
                setTotalDataCount(response.data.totalDataCount)
                console.log("This is final response", response.data)

            })
            .catch(function (error) {
                console.log(error);
            });
    }

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


    useEffect(() => {
        console.log("This")
        fetchData(null, pageDataLimit)
    }, [pageDataLimit])

    const highestRentMemberCount = receivedData.length && Math.max(...receivedData.map(i => i.properties.rentInfo.length))
    const highestRentMemberArray = receivedData.length && receivedData
        .filter(i => i.properties.rentInfo.length === highestRentMemberCount)[0].properties.rentInfo



    const handleRentInformation = (dataList) => {
        const headers = ['Rent Owner', 'Occupation', 'Annual Income', 'Contact', 'Address', 'Total family members', 'Male', 'Female', 'Other']
        let run = [];

        const finalOutput = dataList.map((item) => {
            run.push(...headers)
            return run
        })
        return finalOutput
    }
    const test = highestRentMemberArray.length && handleRentInformation(highestRentMemberArray)[0]

    const handleDataEditClick = (data) => {

        setEditDataId(data._id)
        setEditDataClicked(true)
        setModalShow(true)
        setCoordinates({
            lat: data.geometry.coordinates[0],
            long: data.geometry.coordinates[1]
        })

        setData({
            geometry: {
                type: 'Point',
                coordinates: data.geometry.coordinates
            },
            properties: data.properties
        })
        let datas = [];
        for (let i = 0; i < data.properties.rentInfo.length; i++) {
            datas.push(i);

            setRentMemberCount(datas)
        }


    }
    const handleDataPerpage = (data) => {
        setIsLoading(true)
        setPageDataLimit(data)
    }

    const handleSearch = (e, searchActivated) => {
        e.preventDefault()
        console.log("This is search activated", searchActivated)

        if (searchActivated) {
            fetchData(null, pageDataLimit)
            setSearchWord('')
        } else {
            fetchData(null, pageDataLimit, searchWord)
        }


    }

    console.log("This is loading", isLoading)
    console.log("This is total count", totalDataCount)
    return (

        <div style={{ display: 'flex', flexDirection: 'column' }} >
            <div style={{ backgroundColor: 'cyan', height: '10vh' }} >Navbar
                <button type="button" onClick={() => {
                    localStorage.clear()
                    history('/login')

                }}>Logout</button>
            </div>
            <div style={{ display: 'flex', height: '90vh', width: '100%' }} >
                <div style={{ backgroundColor: 'lightblue', padding: '40px', width: '20%' }} >
                    <ul>
                        <li>Add Household</li>
                        <li>Add Resource</li>
                    </ul>
                </div>
                <div style={{ padding: '40px', width: '80%' }} >
                    <Button variant="primary" onClick={() => setModalShow(true)}>
                        Add Household
                    </Button>
                    <Form.Control
                        type="file"
                        name="file"
                        placeholder="Upload File"
                        ref={fileUploadRef}
                        onChange={handleFileUploadChange}
                    />
                    <Button variant="primary" onClick={handleFileUpload}>
                        Submit File
                    </Button>
                    <input style={{ width: '30%' }}
                        type="text"
                        placeholder='search by name,address or house number'
                        value={searchWord}
                        onChange={(e) => {
                            setSearchActivated(false)
                            setSearchWord(e.target.value)
                        }} />
                    <button type="button" onClick={(e) => handleSearch(e, searchActivated)} >{searchActivated ? 'Reset' : 'Search'}</button>
                    <a href="http://localhost:5000/api/v1/datacollection/download" download>Download File</a>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => {
                            setEditDataClicked(false)
                            setModalShow(false)
                        }}
                        coordinates={coordinates}
                        setCoordinates={setCoordinates}
                        data={data}
                        setData={setData}
                        handleChange={handleChange}
                        handleRentStatus={handleRentStatus}
                        setRentMemberCount={setRentMemberCount}
                        rentMemberCount={rentMemberCount}
                        handleRentDetails={handleRentDetails}
                        handleImage={handleImage}
                        handleSubmit={handleSubmit}
                        buildingImage={buildingImage}
                        imageUpload={imageUpload}
                        handleUpdate={handleUpdate}
                        editDataClicked={editDataClicked}

                    />
                    {isLoading ? <p>Loading...</p> :
                        <div>
                            {showProgressBar ?
                                <div className='progressBar' >
                                    <ProgressBar className='progressMainBar' now={statusProgress} label={`${statusProgress}%`} />
                                </div> : ''}


                            <Table striped bordered hover responsive size='md' className='tableData'  >
                                <thead>
                                    <tr>
                                        <th rowSpan="2" style={{ whiteSpace: 'nowrap' }}>House Number</th>
                                        <th rowSpan="2" style={{ whiteSpace: 'nowrap' }}>Image</th>
                                        <th rowSpan="2" style={{ whiteSpace: 'nowrap' }}>House Owner</th>
                                        <th rowSpan="2" style={{ whiteSpace: 'nowrap' }}>Storey</th>
                                        <th rowSpan="2" style={{ whiteSpace: 'nowrap' }}>Owner Occupation</th>
                                        <th rowSpan="2" style={{ whiteSpace: 'nowrap' }}>Annual Income</th>
                                        <th rowSpan="2" style={{ whiteSpace: 'nowrap' }}>Contact</th>
                                        <th rowSpan="2" style={{ whiteSpace: 'nowrap' }}>Address</th>
                                        <th rowSpan="2" style={{ whiteSpace: 'nowrap' }}>House on rent</th>
                                        {test ? <th colSpan={highestRentMemberCount * 9} style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>Rent Information</th> : ''}
                                        <th colSpan="4" style={{ whiteSpace: 'nowrap', textAlign: 'center' }}>Family Members</th>
                                        <th rowSpan="2" style={{ whiteSpace: 'nowrap' }}>Is Verified</th>
                                        <th rowSpan="2" style={{ whiteSpace: 'nowrap' }}>Remarks</th>
                                    </tr>
                                    <tr>

                                        {test ? test.map((item, index) => (

                                            <th className='subHeader' style={{ whiteSpace: 'nowrap' }} key={index} >{item}</th>


                                        )) : ''}


                                        {/* <th className='subHeader' style={{ whiteSpace: 'nowrap' }}>Rent Owner</th>
                                    <th className='subHeader' style={{ whiteSpace: 'nowrap' }}>Occupation</th>
                                    <th className='subHeader' style={{ whiteSpace: 'nowrap' }}>Annual Income</th>
                                    <th className='subHeader' style={{ whiteSpace: 'nowrap' }}>Contact</th>
                                    <th className='subHeader' style={{ whiteSpace: 'nowrap' }}>Address</th>
                                    <th className='subHeader' style={{ whiteSpace: 'nowrap' }} >Total family members</th>
                                    <th className='subHeader' style={{ whiteSpace: 'nowrap' }}>Male </th>
                                    <th className='subHeader' style={{ whiteSpace: 'nowrap' }}>Female</th>
                                    <th className='subHeader' style={{ whiteSpace: 'nowrap' }}>Other</th> */}




                                        <th className='subHeader' style={{ whiteSpace: 'nowrap' }}> Total family members</th>
                                        <th className='subHeader' style={{ whiteSpace: 'nowrap' }}>Male</th>
                                        <th className='subHeader' style={{ whiteSpace: 'nowrap' }}>Female</th>
                                        <th className='subHeader' style={{ whiteSpace: 'nowrap' }}>Other</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {receivedData.length ? receivedData.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.properties.houseNumber}</td>
                                            <td>
                                                <a href={data.properties.buildingImage} target="_blank" rel="noreferrer">
                                                    <img src={data.properties.buildingImage} alt="house" height={100} width={100} style={{ cursor: 'pointer', objectFit: 'contain' }} />
                                                </a>
                                            </td>
                                            <td>{data.properties.name}</td>
                                            <td>{data.properties.storey}</td>
                                            <td>{data.properties.ownerOccupation}</td>
                                            <td>{data.properties.annualIncome}</td>
                                            <td>{data.properties.contact}</td>
                                            <td>{data.properties.address}</td>
                                            <td>{data.properties.onRent ? 'Yes' : 'No'}</td>

                                            {
                                                highestRentMemberArray.length ? highestRentMemberArray.map((itm, indx) => (

                                                    <>
                                                        <td>{data.properties.rentInfo[indx] ? data.properties.rentInfo[indx].rentOwner === '' ? '-' : data.properties.rentInfo[indx].rentOwner : '-'}</td>
                                                        <td>{data.properties.rentInfo[indx] ? data.properties.rentInfo[indx].occupation === '' ? '-' : data.properties.rentInfo[indx].occupation : '-'}</td>
                                                        <td>{data.properties.rentInfo[indx] ? data.properties.rentInfo[indx].annualIncome === '' ? '-' : data.properties.rentInfo[indx].annualIncome : '-'}</td>
                                                        <td>{data.properties.rentInfo[indx] ? data.properties.rentInfo[indx].contact === '' ? '-' : data.properties.rentInfo[indx].contact : '-'}</td>
                                                        <td>{data.properties.rentInfo[indx] ? data.properties.rentInfo[indx].address === '' ? '-' : data.properties.rentInfo[indx].address : '-'}</td>
                                                        <td>{data.properties.rentInfo[indx] ? data.properties.rentInfo[indx].totalMembers === '' ? '-' : data.properties.rentInfo[indx].totalMembers : '-'}</td>
                                                        <td>{data.properties.rentInfo[indx] ? data.properties.rentInfo[indx].maleMembers === '' ? '-' : data.properties.rentInfo[indx].maleMembers : '-'}</td>
                                                        <td>{data.properties.rentInfo[indx] ? data.properties.rentInfo[indx].femaleMembers === '' ? '-' : data.properties.rentInfo[indx].femaleMembers : '-'}</td>
                                                        <td>{data.properties.rentInfo[indx] ? data.properties.rentInfo[indx].otherMembers === '' ? '-' : data.properties.rentInfo[indx].otherMembers : '-'}</td>
                                                    </>

                                                ))
                                                    : ''}
                                            <td>{data.properties.totalMembers}</td>
                                            <td>{data.properties.maleMembers}</td>
                                            <td>{data.properties.femaleMembers}</td>
                                            <td>{data.properties.otherMembers}</td>
                                            <td>{data.properties.isDataVerified ? 'Yes' : 'No'}</td>
                                            <td>
                                                <button type='button' onClick={() => handleDataEditClick(data)}>Edit</button>
                                                <button type='button'>Delete</button>
                                            </td>



                                            {/* {data.properties.rentInfo.length ? data.properties.rentInfo.map((d) => (
                                            <>
                                                <td>{d.rentOwner}</td>
                                                <td>{d.occupation}</td>
                                                <td>{d.annualIncome}</td>
                                                <td>{d.contact}</td>
                                                <td>{d.address}</td>
                                                <td>{d.totalMembers}</td>
                                                <td>{d.maleMembers}</td>
                                                <td>{d.femaleMembers}</td>
                                                <td>{d.otherMembers}</td>
                                            </>


                                        )) :
                                            <>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </>
                                        } */}


                                        </tr>
                                    )) : 'No Data Available'}

                                </tbody>
                            </Table>


                        </div>}
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div style={{ display: 'flex' }}>
                            <p>Data Per Page</p>
                            <DropdownButton id="dropdown-basic-button" title={pageDataLimit}>
                                <Dropdown.Item onClick={() => handleDataPerpage(3)} >3</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleDataPerpage(5)}>5</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleDataPerpage(8)}>8</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        < PaginationData
                            totalDataCount={totalDataCount}
                            itemsPerPage={pageDataLimit}
                            handleClickPaginationButton={fetchData}
                            searchWord={searchWord}

                        />
                    </div>
                </div>
            </div>
        </div >
    )
}


export default LandingPage;