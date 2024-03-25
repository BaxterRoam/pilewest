"use client";

import Link from "next/link";
import { useState } from "react";

import { PhoneIcon, EnvelopeIcon, MapPinIcon, SpinnerIcon } from "@/icons";

import "./styles.scss";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState("send message");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus("sending message");

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        // Form submission was successful, you can show a success message or redirect the user.
        setSubmissionStatus("message sent");
        console.log("Form submitted successfully");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        // Handle error if form submission fails.
        setSubmissionStatus("error sending message");
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }
  };

  const getButtonClass = () => {
    switch (submissionStatus) {
      case "sending message":
        return "button--status-sending";
      case "message sent":
        return "button--status-success";
      case "error sending message":
        return "button--status-error";
      default:
        return "button--status-default";
    }
  };

  return (
    <main className="contact-page">
      <section className="section">
        <div className="section-container">
          <header>
            <h1>Contact Us</h1>
          </header>
          <div className="grid-2">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
              </div>
              {submissionStatus == "sending message" ? (
                <button type="submit" className={`button ${getButtonClass()}`}>{<SpinnerIcon />}{submissionStatus}</button>
              ) : (
                <button type="submit" className={`button ${getButtonClass()}`}>{submissionStatus}</button>
              )}
            </form>
            <div className="contact-information">
              <div className="contact-entry">
                <h3>Phone</h3>
                <div className="contact-label">
                  <PhoneIcon />
                  <Link href="tel:+61 892 484 950">+61 892 484 950</Link>
                </div>
              </div>
              <div className="contact-entry">
                <h3>Email</h3>
                <div className="contact-label">
                  <EnvelopeIcon />
                  <Link href="mailto:admin@pilewest.com.au">admin@pilewest.com.au</Link>
                </div>
              </div>
              <div className="contact-entry">
                <h3>Address</h3>
                <div className="contact-label">
                  <MapPinIcon />
                  <Link href="https://goo.gl/maps/2Prtr5Dwv4KC4fzs5">437 Victoria Road, Malaga, WA 6090</Link>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13554.662594825724!2d115.906749!3d-31.8613124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32b1a95dce20bd%3A0xc886f389d25a8a12!2sPilewest!5e0!3m2!1sen!2sau!4v1705639145002!5m2!1sen!2sau"
                loading="lazy"
              ></iframe>
              <div className="contact-entry">
                <h3>Business Hours</h3>
                <div className="contact-label">
                  <div className="flex">
                    <p>Monday - Friday:</p>
                    <p>8:30am - 5:00pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
