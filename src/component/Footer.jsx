import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="mt-10 lg:mt-10">
      <ul className="flex justify-center gap-4 ">
        <li>
          <a href="https://www.instagram.com/tamil006_?utm_source=qr&igsh=cGJ5MjU3cGhsaTRz">
            <FaInstagram className="size-5 " />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/tamilarasan-karthik?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FaLinkedin className="size-5" />
          </a>
        </li>
        <li>
          <a href=" https://wa.me/qr/QMK2Z72JXLPCD1">
            <FaWhatsapp className="size-5" />
          </a>
        </li>
        <li>
          <a href="mailto:tamilarasank006@gmail.com">
            <SiGmail className="size-5" />
          </a>
        </li>
      </ul>

      <footer className="text-center p-4">
        <p>© {year} Tamilarasan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
