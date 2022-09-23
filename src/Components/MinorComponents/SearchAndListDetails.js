import React from 'react';
import Form from 'react-bootstrap/Form';


const SearchAndListDetails = ({ searchKeyword, setSearchError, setSearchKeyword, handleChangeSearch,
    houseHoldCount, setHoveredId, setFlyCoordinate
}) => {
    return (
        <div style={{ margin: '20px 0', display: 'flex', flexDirection: 'column', gap: '50px' }} >
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
                        handleChangeSearch(e.target.value)
                    }}

                />
                {/* 
                {searchError ? <Form.Text id="passwordHelpBlock"
                    style={{ position: 'absolute', color: 'red' }} >
                    Cannot find the name of your search value
                </Form.Text> : ''} */}
            </div>
            {
                houseHoldCount.map((item) => (
                    <div onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        onClick={() => setFlyCoordinate(item.geometry.coordinates)}
                        style={{ display: 'flex', padding: '20px 0', borderBottom: '1px solid gainsboro', cursor: 'pointer' }}
                        key={item.id}
                    >
                        <img src='/house1.jpg' alt="house" height={100} />
                        <div style={{ margin: '0 20px' }} >
                            <span>{`${item.properties.name}'s Residency`}</span>
                            <div>
                                <span>{item.properties.address}</span>
                                <span style={{ marginLeft: '5px' }} >{`House Number ${item.properties.houseNumber}`}</span>
                            </div>
                            <div>
                                <span>Storey:{item.properties.storey}</span>
                                <span style={{ marginLeft: '5px' }}>on Rent:{item.properties.rentInfo.length}</span>
                            </div>

                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default SearchAndListDetails