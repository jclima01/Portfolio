import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full pt-24 bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
        className="flex flex-col justify-between h-full max-w-[600px] w-full gap-y-10"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#dea89f] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email -
            vutukuri.kumar192st.niituniversity.in
          </p>
        </div>
        <div className="flex flex-col">
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="6"
            placeholder="Message"
          ></textarea>
        </div>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
