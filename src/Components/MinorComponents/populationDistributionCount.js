import React, { useState } from 'react';
import GroupFilterListContainer from '../GroupFilterListContainer';
import male from '../../Resources/icons/male.svg';
import female from '../../Resources/icons/female.svg';
import others from '../../Resources/icons/other.svg';
const PopulationDistributionCount = ({ houseHoldData, overallData, setClickedButton, clickedButton }) => {
    const [showInfo1, setShowInfo1] = useState(false);
    return (
        <div style={{ borderBottom: '1px solid gainsboro', padding: '20px 0' }} >
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }} >
                <h5>Overall</h5>
                <div style={{ position: 'relative' }} >
                    <button type='button' onClick={() => setShowInfo1(true)} >Filter</button>

                    <GroupFilterListContainer
                        show={showInfo1} onClickOutside={() => {
                            setShowInfo1(false)
                        }}
                        setClickedButton={setClickedButton}
                        clickedButton={clickedButton}
                    />
                </div>
            </div>
            {houseHoldData ? <div style={{ display: 'flex', margin: '20px 0', justifyContent: 'space-between' }} >
                <div style={{ width: '50%' }} >
                    <span>1,2345</span>
                    <div style={{ borderRadius: '20px', marginBottom: '5px' }} >People with house</div>
                </div>
                <div style={{ width: '50%' }}>
                    <span>12345</span>
                    <div style={{ borderRadius: '20px', marginBottom: '5px' }}>Others</div>
                </div>

            </div> : ""}
            {overallData ?
                <div style={{ display: 'flex', margin: '20px 0', justifyContent: 'space-between' }} >
                    <div style={{ width: '33%', textAlign: 'center' }} >
                        <div style={{
                            height: '120px', borderRadius: '20px', marginBottom: '5px', marginRight: '10px', backgroundColor: '#E2EAFC',
                            display: 'flex', flexDirection: 'column',
                            justifyContent: 'center', alignItems: 'center'
                        }} ><img height={40} src={male} alt="male" /> Male</div>
                        <span>1,2345</span>
                    </div>
                    <div style={{ width: '33%', textAlign: 'center' }}>
                        <div style={{
                            height: '120px', borderRadius: '20px'
                            , margin: '0 10px', backgroundColor: '#E2EAFC',
                            display: 'flex', flexDirection: 'column',
                            justifyContent: 'center', alignItems: 'center', marginBottom: '5px'
                        }}><img height={40} src={female} alt="male" /> Female</div>
                        <span>12354,5</span>
                    </div>
                    <div style={{ width: '33%', textAlign: 'center' }}>
                        <div style={{
                            height: '120px', borderRadius: '20px',
                            marginBottom: '5px', marginLeft: '10px', backgroundColor: '#E2EAFC',
                            display: 'flex', flexDirection: 'column',
                            justifyContent: 'center', alignItems: 'center'
                        }}><img height={40} src={others} alt="male" /> Others</div>
                        <span>12345</span>
                    </div>

                </div>
                : ''
            }




        </div>
    )
}

export default PopulationDistributionCount;