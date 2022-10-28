import React, { useState } from 'react';

import Icon from "../../assets/button.png";
import './common.css';

const InputField = ({ label, type, placeHolder, message }) => {
    const [show, setShow] = useState(false);
    const showPass = () => setShow(!show);

    return (
        <section className='custom_input'>
            <label>{label}</label>
            <section className='input_section'>
                <input type={show ? "text" : type} placeholder={placeHolder} />
                <img className='icon' src={Icon} alt="icon" onClick={showPass} />
            </section>
            <p className='message'>{message}? <a href='##'>Reset</a></p>
        </section>
    )
}

export default InputField;