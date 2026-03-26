import React from 'react'

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact</h2>
      <form action="">
        <h3>Get in touch</h3>
        <div>
          <div>
            <label htmlFor="firstName">First name:</label>
            <input type="text" name="firstName" id="firstName" />
            <span>Enter your first name.</span>
          </div>
          <div>
            <label htmlFor="lastName">Last name:</label>
            <input type="text" name="lastName" id="lastName" />
            <span>Enter your first name.</span>
          </div>
        </div>
        <label htmlFor="email">Email address:</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message"></textarea>
        <button type="submit">Send message</button>
      </form>
    </section>
  )
}

export default Contact