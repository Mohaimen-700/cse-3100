import React from "react";

export default function ContactUs() {
  return (
    <section className="text-center mt-4">
      <h2>Contact us</h2>
      <p className="mb-4">
        Please fill out the required fields below.
      </p>
      <form
        className="contact-form mx-auto"
        style={{
          maxWidth: "400px",
          background: "#f9f9f9",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter your name"
            style={{ borderRadius: "4px" }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="form-control"
            placeholder="Enter your phone number"
            style={{ borderRadius: "4px" }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            style={{ borderRadius: "4px" }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ padding: "8px 16px", fontWeight: "bold" }}
        >
          Submit
        </button>
      </form>
    </section>
  );
}
