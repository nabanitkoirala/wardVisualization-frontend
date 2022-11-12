import React from 'react';
import Form from 'react-bootstrap/Form';


const SearchAndListDetails = ({ searchKeyword, setSearchError, setSearchKeyword, handleChangeSearch,
    houseHoldCount, setHoveredId, setFlyCoordinate
}) => {
    console.log("Household count", houseHoldCount)
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
                        <img src='/house1.jpg' alt="house" height={100} style={{ borderRadius: '20px', objectFit: 'contain' }} />
                        <div style={{ margin: '0 20px' }} >
                            <span><strong>{`${item.properties.name}'s Residency`}</strong></span>
                            <div>
                                <span style={{ fontWeight: '100', fontSize: '14px', opacity: '0.67' }} >{item.properties.address}</span>
                                <span style={{ marginLeft: '5px', fontWeight: '100', fontSize: '14px', opacity: '0.67' }} >{`House No. ${item.properties.houseNumber}`}</span>
                            </div>
                            <div>
                                <span><strong>Storey:</strong>{item.properties.storey}</span>
                                <span style={{ marginLeft: '5px' }}><strong>on Rent:</strong>{item.properties.rentInfo.length}</span>
                            </div>

                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default SearchAndListDetails