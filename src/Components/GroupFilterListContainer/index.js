import React from 'react';
import { useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import './styles.scss';
const InfoBox = (props) => {
    const ref = useRef(null);
    const { onClickOutside, setClickedButton, clickedButton } = props;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside && onClickOutside();
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [onClickOutside]);

    if (!props.show)
        return null;

    return (
        <div ref={ref} className='container' >
            <div style={{ margin: '10px' }} >
                <Form.Check
                    type='radio'
                    id='Overall'
                    label='Overall'
                    name='clickedButton'
                    value={1}
                    defaultChecked={clickedButton === 1 ? true : false}
                    onClick={() => {
                        onClickOutside()
                        setClickedButton(1)
                    }}

                />
                <Form.Check
                    name='clickedButton'
                    type='radio'
                    id='Population'
                    label='Population'
                    value={2}
                    defaultChecked={clickedButton === 2 ? true : false}
                    onClick={() => {
                        onClickOutside()
                        setClickedButton(2)
                    }}
                />
                <Form.Check
                    name='clickedButton'
                    type='radio'
                    id='Health'
                    label='Health'
                    value={3}
                    defaultChecked={clickedButton === 3 ? true : false}
                    onClick={() => {
                        onClickOutside()
                        setClickedButton(3)
                    }}
                />
                <Form.Check
                    name='clickedButton'
                    type='radio'
                    id='Education'
                    label='Education'
                    value={4}
                    defaultChecked={clickedButton === 4 ? true : false}
                    onClick={() => {
                        onClickOutside()
                        setClickedButton(4)
                    }}
                />
                <Form.Check
                    name='clickedButton'
                    type='radio'
                    id='Banking'
                    label='Financial Institution'
                    value={5}
                    defaultChecked={clickedButton === 5 ? true : false}
                    onClick={() => {
                        onClickOutside()
                        setClickedButton(5)
                    }}
                />
                <Form.Check
                    name='clickedButton'
                    type='radio'
                    id='Communication'
                    label='Communication'
                    value={6}
                    defaultChecked={clickedButton === 6 ? true : false}
                    onClick={() => {
                        onClickOutside()
                        setClickedButton(6)
                    }}
                />
                <Form.Check
                    name='clickedButton'
                    type='radio'
                    id='Governance'
                    label='Government Institutions'
                    value={7}
                    defaultChecked={clickedButton === 7 ? true : false}
                    onClick={() => {
                        onClickOutside()
                        setClickedButton(7)
                    }}
                />
                <Form.Check
                    name='clickedButton'
                    type='radio'
                    id='Hotels'
                    label='Hotel/Restaurant'
                    value={8}
                    defaultChecked={clickedButton === 8 ? true : false}
                    onClick={() => {
                        onClickOutside()
                        setClickedButton(8)
                    }}
                />
                <Form.Check
                    name='clickedButton'
                    type='radio'
                    id='Culture'
                    label='Culture'
                    value={9}
                    defaultChecked={clickedButton === 9 ? true : false}
                    onClick={() => {
                        onClickOutside()
                        setClickedButton(9)
                    }}
                />
                <Form.Check
                    name='clickedButton'
                    type='radio'
                    id='Industries'
                    label='Industries'
                    value={10}
                    defaultChecked={clickedButton === 10 ? true : false}
                    onClick={() => {
                        onClickOutside()
                        setClickedButton(10)
                    }}
                />

            </div>
        </div>);
}

export default InfoBox;
