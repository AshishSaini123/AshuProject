import React from "react";

const Contact = () => {
  return (
    <div className="cont_comp">
      <h3>
        Do contact us for any query regarding the products,we will definately
        try to help you out
      </h3>

      <div className="contact">
        <strong>Address:</strong>
        <span>
          Shree Trader's ,Behror Road ,near kadia wala Mandir,Narnaul
          123001,Haryana,India
        </span>
        <strong>Mobile:</strong>
        <span>9817319477</span>
        <strong>Email:</strong>
        <span>aashucsengi@gmail.com</span>
      </div>
      <h4>Hours of operation</h4>
      <div className="oper">
        <strong>Monday-Friday</strong>
        <span>9AM-5pm</span>
        <strong>Saturday</strong>
        <span>10AM-3pm</span>
        <strong>Sunday</strong>
        <span>On demand</span>
      </div>

      <h4>Google map Location</h4>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d725.5201138466351!2d76.11651671475725!3d28.034975869154465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912b5c7051eca45%3A0x8ab1fd51cc5b7da!2sRJ%20SH%2014%2C%20Mohalla%20Mali%20Tibba%2C%20Balaha%20Kalan%2C%20Haryana%20123001!5e0!3m2!1sen!2sin!4v1682324960775!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contact;
