import React from 'react';
import Button from '../common/Button';
import InputField from '../common/InputField';

import './LoginForm.css';

const LoginForm = () => {
    const formSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className='login_form' onSubmit={formSubmit}>
            <main className='form_body'>
                <header className='form_header'>
                    <img src='http://projects.websetters.in/digg-seos/digg/wp-content/themes/twentytwenty-child-theme/img/demo-prof.jpg' alt='profile' />
                    <span>Personal Account</span>
                    <p>Mohamed Mufasil Mufeeth</p>
                    <div className='back_btn'>Back</div>
                </header>
                <InputField label="password" type="password" placeHolder="Enter a password" message="Forgot password" />
                <section className='btn_group'>
                    <div>
                        <input className='check_box' type={"checkbox"} /> <span>Stay signed in</span>
                    </div>
                    <Button type="sumbit" name="Sign in" />
                </section>
            </main>
            <footer className='form_footer'>
                <p>This site is protected by reCAPTCHA and the Google</p>
                <p><a href='##'>Privacy Policy</a> and <a href='##'>Terms of Service</a> apply </p>
            </footer>
        </form>
    )
}

export default LoginForm;