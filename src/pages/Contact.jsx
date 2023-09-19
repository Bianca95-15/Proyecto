import React from 'react'

const Contact = () => {
  return (
    <div>
    <form id="contact" action=''>
        Full Name: <input type="text" name="name"></input><br></br>
        Email: <input type="email" name="mail"></input><br></br>
        Message subject: <input type="text" name="subject"></input><br></br>
        Message <input type="text" name="massage"></input><br></br>
        <input type="button" value="Send" ></input>
    </form>
    </div>
  )
}

export default Contact