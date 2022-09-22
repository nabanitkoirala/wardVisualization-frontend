import React, { useState } from 'react';
import GroupFilterListContainer from '../../GroupFilterListContainer';
import male from '../../../Resources/icons/male.svg';
import female from '../../../Resources/icons/female.svg';
import others from '../../../Resources/icons/other.svg';
import closeButton from '../../../Resources/icons/close.svg';
import './styles.scss';
const PopulationDistributionCount = ({ houseHoldData, overallData, setClickedButton, clickedButton, displayName,
    finalTotalMaleCount, finalTotalFemaleCount, finalTotalOtherCount, totalPeopleOnHouse, totalPeopleOnRent
}) => {
    const [showInfo1, setShowInfo1] = useState(false);
    return (
        <div style={{ borderBottom: '1px solid gainsboro', padding: '20px 0' }} >
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }} >
                <div style={{ display: 'flex', alignItems: 'center' }} >
                    <h5 style={{ marginBottom: '0px', marginRight: '5px' }} >{displayName}</h5>{clickedButton !== 1 && <img className='closeButton' onClick={() => setClickedButton(1)} src={closeButton} alt="close" height={20} />}
                </div>

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
                    <span>{totalPeopleOnHouse}</span>
                    <div style={{ borderRadius: '20px', marginBottom: '5px' }} >People with house</div>
                </div>
                <div style={{ width: '50%' }}>
                    <span>{totalPeopleOnRent}</span>
                    <div style={{ borderRadius: '20px', marginBottom: '5px' }}>People on rent</div>
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
                        <span>{finalTotalMaleCount}</span>
                    </div>
                    <div style={{ width: '33%', textAlign: 'center' }}>
                        <div style={{
                            height: '120px', borderRadius: '20px'
                            , margin: '0 10px', backgroundColor: '#E2EAFC',
                            display: 'flex', flexDirection: 'column',
                            justifyContent: 'center', alignItems: 'center', marginBottom: '5px'
                        }}><img height={40} src={female} alt="male" /> Female</div>
                        <span>{finalTotalFemaleCount}</span>
                    </div>
                    <div style={{ width: '33%', textAlign: 'center' }}>
                        <div style={{
                            height: '120px', borderRadius: '20px',
                            marginBottom: '5px', marginLeft: '10px', backgroundColor: '#E2EAFC',
                            display: 'flex', flexDirection: 'column',
                            justifyContent: 'center', alignItems: 'center'
                        }}><img height={40} src={others} alt="male" /> Others</div>
                        <span>{finalTotalOtherCount}</span>
                    </div>

                </div>
                : ''
            }




        </div>
    )
}

export default PopulationDistributionCount;