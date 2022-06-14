import React, { useState } from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    // sync the internal state of the component formState with the user input from the DOM
    // onChange event listener will ensure that the handleChange function fires when keystroke is typed into input field
    function handleChange(e) {
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
                    <input type="text" defaultValue={name} name="name" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue = {email} name="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue = {message} onChange={handleChange} rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm