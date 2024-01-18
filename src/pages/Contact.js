// import "./Contact.css"



import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section>
      <h2 className="page_title">
        Contact <span className="Ref">Reflections</span>
      </h2>
      <div className="contact">
        <h6>Questions? Comments? Feedback? We want to hear from you!</h6>
        <p>
          <strong>Email us at</strong>: support@reflections.com
          <br />
          <strong>Call us at</strong>: 555-555-555
          <br />
          <strong>Contact Form</strong>:{" "}
          <button onClick={openModal}>Click Here</button>
        </p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {/* Add your contact form JSX here */}
            <h3>Contact Form</h3>
            {/* ... */}
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;


