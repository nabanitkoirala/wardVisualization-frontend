import React from 'react';


const InfrastructureGraph = ({ data }) => {
    const maxValue = data.map(itm => itm.value).reduce((a, b) => Math.max(a, b), -Infinity)
    const barPercentageCalculation = (value) => {
        const percentage = (value / maxValue) * 100;
        return `${percentage}%`
    }
    return (

        data.map((item) => (
            <div style={{ margin: '10px 0' }} key={item.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                    <span>{item.name}</span>
                    <span>{item.value}</span>
                </div>
                <div style={{ height: '20px', backgroundColor: `${item.color}`, width: barPercentageCalculation(item.value), borderRadius: '5px' }} ></div>
            </div>
        ))

    )
}

export default InfrastructureGraph;