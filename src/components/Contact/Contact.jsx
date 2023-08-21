import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
// import dotenv from 'dotenv'

// dotenv.config()

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_EMAILJS_PRIVATE_KEY;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;

console.log(publicKey);
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        Swal.fire({
          text: "Mensaje eviado",
          icon: "success",
        });
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f] flex justify-center items-center pt-10"
    >
      <form
        ref={form}
        className="flex flex-col justify-between h-full max-w-[1000px] w-full gap-y-10"
        onSubmit={sendEmail}
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#dea89f] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-8">
            You can get in touch with me through the following form or by
            sending me an email.
          </p>
        </div>
        <div className="flex flex-col">
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="user_name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="user_email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="6"
            placeholder="Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
