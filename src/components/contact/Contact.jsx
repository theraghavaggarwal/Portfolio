import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import ContactSvg from "./ContactSvg";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const ref = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const userData = {
      user_username: form.current.user_username.value,
      user_email: form.current.user_email.value,
      user_message: form.current.user_message.value,
    };

    const serviceID = "service_123"; // replace with your actual service ID
    const templateToMeID = "template_jbwisc5"; // replace with your actual template for admin
    const templateThankYouID = "template_jbwisc5"; // replace with your actual thank-you template
    const publicKey = "iHmdUoAQYMkFRbMue"; // replace with your actual public key

    // Send to yourself
    emailjs
      .sendForm(serviceID, templateToMeID, form.current, {
        publicKey: publicKey,
      })
      .then(() => {
        // Send thank-you to user
        emailjs
          .send(serviceID, templateThankYouID, userData, {
            publicKey: publicKey,
          })
          .then(() => {
            setSuccess(true);
            setError(false);
          })
          .catch((err) => {
            console.error("Thank you email failed:", err);
            setError(true);
            setSuccess(false);
          });
      })
      .catch((err) => {
        console.error("Send to admin failed:", err);
        setError(true);
        setSuccess(false);
      });
  };

  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="contact" ref={ref}>
      <div className="cSection">
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
        >
          <motion.h1 variants={listVariant} className="cTitle">
            Let's keep in touch
          </motion.h1>
          <motion.div variants={listVariant} className="formItem">
            <label>Name</label>
            <input type="text" name="user_username" required />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>Email</label>
            <input type="email" name="user_email" required />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>Message</label>
            <textarea
              rows={10}
              name="user_message"
              placeholder="Write your message..."
              required
            ></textarea>
          </motion.div>
          <motion.button variants={listVariant} className="formButton" type="submit">
            Send
          </motion.button>
          {success && <span className="successMsg">Your message has been sent!</span>}
          {error && <span className="errorMsg">Something went wrong!</span>}
        </motion.form>
      </div>
      <div className="cSection">
        <ContactSvg />
      </div>
    </div>
  );
};

export default Contact;
