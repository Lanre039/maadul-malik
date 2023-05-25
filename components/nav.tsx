"use client";
import { createRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Menu from "@/public/mobile.svg";
import Logo from "@/public/logo.jpeg";

export default function Navbar() {
  return (
    <nav className="nav  ">
      <div className="px-4 py-6 max-w-full md:max-w-[1300px] mx-auto  flex justify-between items-center text-white ">
        <Link href="/" className="text-[15px]" ref={createRef()}>
          <Image
            src={Logo}
            alt="logo"
            className=" rounded-full border border-gray-100 shadow-sm w-[30px] h-[30px] object-center"
          />
        </Link>
        <div
          // id="menu"
          // className="flex w-full  md:items-center md:w-auto px-4 max-w-full md:max-w-[1300px] mx-auto  text-white "
          className="hidden md:flex  justify-between items-center"
        >
          <ul className="flex justify-between pt-0">
            <li>
              <Link href="#about" className="text-[15px]" ref={createRef()}>
                About
              </Link>
            </li>
            <li>
              <Link
                href="#programmes"
                className="text-[15px] my-10 md:mx-6"
                ref={createRef()}
              >
                Programmes
              </Link>
            </li>
            <li>
              <Link href="#classes" className="text-[15px]" ref={createRef()}>
                Classes
              </Link>
            </li>
          </ul>
        </div>
        <div
          id="menu-btn"
          className="md:hidden  block cursor-pointer"
          ref={createRef()}
          onClick={() => {
            const menu = document.querySelector("#menu");
            menu?.classList.toggle("hidden");
          }}
        >
          <Image src={Menu} alt="menu icon" />
        </div>
      </div>
      <div
        id="menu"
        className="hidden w-full bg-[#2C5364]  md:items-center md:w-auto px-4 max-w-full md:max-w-[1300px] mx-auto  text-white p-5"
      >
        <ul className="md:flex md:justify-between md:pt-0">
          <li>
            <Link href="#about" className="text-[15px]" ref={createRef()}>
              About
            </Link>
          </li>
          <li className="my-3">
            <Link
              href="#programmes"
              className="text-[15px]  md:mx-5"
              ref={createRef()}
            >
              Programmes
            </Link>
          </li>
          <li>
            <Link href="#classes" className="text-[15px]" ref={createRef()}>
              Classes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
