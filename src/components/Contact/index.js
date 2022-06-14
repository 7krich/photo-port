import React, { useState } from 'react';
// import validate email function
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    // sync the internal state of the component formState with the user input from the DOM
    // onChange event listener will ensure that the handleChange function fires when keystroke is typed into input field
    function handleChange(e) {
        // validate e-mail
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                // if valid, err msg is empty string
                setErrorMessage('');
            }
        } else {
            // if message or name element values are blank
            if(!e.target.value.length) {
                // send err msg
                setErrorMessage(`${e.target.name} is required.`);
                // if not empty, err msg is empty string
            } else {
                setErrorMessage('');
            }

            if (!errorMessage) {
                setFormState({ ...formState, [e.target.name]: e.target.value });
            }
        }
        
        // dynamically obtain keystrokes from each given form element
        // e.target.name -> name refers to the name attribute for the form elements (name, email, message)
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    // handle submission of the form
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return(
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} name="name" onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue = {email} name="email" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue = {message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm