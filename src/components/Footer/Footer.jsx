import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-200 text-center text-white dark:bg-neutral-600">
      <div className="flex flex-row  justify-center py-2 gap-5  text-4xl">
        <a href="#!" className=" text-neutral-800 dark:text-neutral-200">
          <FaGithub />
        </a>
        <a href="#!" className="text-neutral-800 dark:text-neutral-200">
          <FaLinkedin />
        </a>
      </div>

      <div className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        © 2023 Copyright: jclc.
      </div>
    </footer>
  );
};

export default Footer;
