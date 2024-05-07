import Montserratt from "@/services/FontPremier";
import Image from "next/image";
import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { TfiFacebook } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className="footer max-w-[1250px] container mx-auto p-10 bg-[#014389] text-white  ">
      <aside>
        <div className="mb-6 flex gap-6">
          <Image src="/logo-only.svg" alt="logo" width={60} height={60} />
          <div>
            <h5
              className={`text-2xl font-semibold text-[#A4D7F4] ${Montserratt.className}`}
            >
              Follow RE/MAX
            </h5>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.instagram.com/remaxindonesia/"
                target="_blank"
                className=" cursor-pointer hover:scale-90 transition-all"
              >
                <FaInstagram className="text-3xl text-white hover:text-blue-soft" />
              </a>
              <a
                href="https://www.facebook.com/remaxindo/?locale=id_ID"
                target="_blank"
                className=" cursor-pointer hover:scale-90 transition-all"
              >
                <TfiFacebook className="text-3xl text-white hover:text-blue-soft" />
              </a>
              <a
                href="https://www.youtube.com/@remaxindonesia6333"
                target="_blank"
                className=" cursor-pointer hover:scale-90 transition-all"
              >
                <FaYoutube className="text-3xl text-white hover:text-blue-soft" />
              </a>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63460.31813942342!2d106.7751501557899!3d-6.228105302634137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f401bd9df853%3A0x16687cf5c1c642c!2sRE%2FMAX%20Indonesia!5e0!3m2!1sen!2sid!4v1715075456450!5m2!1sen!2sid"
          width="300"
          height="150"
          className="rounded-xl"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </aside>

      <nav className="opacity-70">
        <p>remaxsupport@gmail.com</p>
        <p className="mb-6">(021) 000-000</p>
        <p className="max-w-[18rem] ">
          Equity Tower 17th Floor Jln Jendral Sudirman Kav 52-53 (SCBD) Jakarta,
          Indonesia 12190
        </p>
        <p className="font-thin mt-8">© 2020 RE/MAX. All rights reserved.</p>
      </nav>
      <nav className="opacity-70">
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Why RE/MAX</a>
        <a className="link link-hover">Contact</a>
      </nav>
    </footer>
  );
};

export default Footer;
