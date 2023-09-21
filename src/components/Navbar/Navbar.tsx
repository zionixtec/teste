"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";

import Logo from "@/assets/logo.png";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 20) {
        setColor("#070b0d");
      } else {
        setColor("transparent");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="px-[24px] sm:px-[72px] xl:px-[72px] fixed top-0 left-0 w-full z-10 ease-in duration-300 border-b-[1px] border-primary-white/50"
    >
      <div className="flex justify-between items-center text-primary-white">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logomarca da empresa MoveMentor"
            className=" w-[11.875rem] sm:w-[16rem] py-3"
          />
        </Link>

        <ul className="hidden lg:flex gap-14 font-semibold">
          <li>
            <Link
              href="/#saiba_mais"
              className="hover:text-primary-blue transition-all duration-300"
            >
              Saiba mais
            </Link>
          </li>
          <li>
            <Link
              href="/#planos"
              className="hover:text-primary-blue transition-all duration-300"
            >
              Planos
            </Link>
          </li>
          <li>
            <Link
              href="/#contatos"
              className="hover:text-primary-blue transition-all duration-300"
            >
              Contatos
            </Link>
          </li>
        </ul>
        <div className="hidden lg:flex">
          <Button buttonType="primary" isSmall>
            Entrar
          </Button>
        </div>

        {/* Moblie Button */}
        <div onClick={handleNav} className="block lg:hidden z-10">
          {nav ? <AiOutlineClose size={32} /> : <AiOutlineMenu size={32} />}
        </div>
        {/* Menu Moblie */}
        <div
          className={
            nav
              ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <div className="flex flex-col items-center gap-4">
            <ul className="font-semibold">
              <li className="p-4">
                <Link
                  href="/#saiba_mais"
                  className="text-lg hover:text-primary-blue transition-all duration-300"
                >
                  Saiba mais
                </Link>
              </li>
              <li className="p-4">
                <Link
                  href="/#planos"
                  className="text-lg hover:text-primary-blue transition-all duration-300"
                >
                  Planos
                </Link>
              </li>
              <li className="p-4">
                <Link
                  href="/#contatos"
                  className="text-lg hover:text-primary-blue transition-all duration-300"
                >
                  Contatos
                </Link>
              </li>
            </ul>
            <Button buttonType="primary" isSmall>
              Entrar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
