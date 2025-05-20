"use client";
import vk from "../../../public/image/vk.svg";
import youtube from "../../../public/image/youtube.svg";
import tg from "../../../public/image/tg.svg";
import Image from "next/image";
import logo from "../../../public/Logo.svg";
import logoWhite from "../../../public/white_logo.svg";
import { redirect } from "next/navigation";
import { useState } from "react";

function Menu() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="w-full h-[88px] px-[48px] flex justify-start items-center lg:gap-[64px] relative">
        <div className={`z-20 lg:hidden ${menu && "fixed "} `}>
          <button
            className="w-[40px] h-[40px] relative mr-[20px] [&>*]:h-[3px] [&>*]:w-[20px] [&>*]:bg-black [&>*]:block [&>*]:absolute [&>*]:transition-all"
            onClick={() => setMenu(!menu)}
          >
            <span
              className={`top-[12px] right-[10px]  duration-400 ease-in-out  ${menu && "rotate-[45deg] top-[20px] bg-white"}`}
            ></span>
            <span
              className={`ease-in-out right-[10px] ${menu && "opacity-0"}`}
            ></span>
            <span
              className={`bottom-[10px] right-[10px] duration-400 ease-in-out ', ${menu && "rotate-[-45deg] top-[20px] bg-white"}`}
            ></span>
          </button>
        </div>
        <div
          onClick={() => redirect("/")}
          className={`flex ${menu && "ml-[60px]"}`}
        >
          <Image src={logo} alt="" />
        </div>
        <div
          className={`opacity-0 transition-all duration-400 ${menu && "opacity-100 fixed top-0 left-0   w-screen h-screen bg-[#8C26EA] z-10"}`}
        >
          {menu && (
            <div className="text-white  left-[60px] top-[32px] flex flex-col gap-[24px] fixed">
              <div>
                <div onClick={() => redirect("/")} className="flex ml-[48px]">
                  <Image src={logoWhite} alt="" />
                  <div
                    className={`text-[#8C26EA] text-[16px] font-semibold ml-[8px] ${menu && "text-[#FFFFFF]/60"}`}
                  >
                    Academy
                  </div>
                </div>
                <div className="flex flex-col gap-[24px] mt-[20px]">
                  <div onClick={() => setMenu(!menu)}>
                    {" "}
                    <a href="#Calendar">Программа курсов</a>
                  </div>
                  <div onClick={() => setMenu(!menu)}>
                    <a href="#Mentors">Преподаватели</a>
                  </div>
                  <div onClick={() => setMenu(!menu)}>
                    <a href="#InputForm">Помощь</a>
                  </div>
                </div>
              </div>
              <div className="text-[#FFFFFF]/60 flex flex-col gap-[32px] py-[40px]">
                <div className="flex flex-col gap-[20px]">
                  <div>Документы</div>
                  <div>Политика конфиденциальности</div>
                  <div>Стандарт гарантийной поддержки системы</div>
                  <div className="text-[14px]">8 800 700-02-01</div>
                  <div className="text-[14px]">info@pravo.tech</div>
                </div>
                <div className="w-[144px] h-[40px] flex gap-[12px] [&>*]:h-[40px] [&>*]:w-[40px] [&>*]:rounded-[10px] [&>*]:bg-[#993cec] [&>*]:flex [&>*]:items-center [&>*]:justify-center">
                  <div>
                    <Image src={tg} alt="" className="" />
                  </div>
                  <div>
                    <Image src={vk} alt="" />
                  </div>
                  <div>
                    {" "}
                    <Image src={youtube} alt="" />
                  </div>
                </div>
                <div>
                  <div>г. Москва, ул. Большая Полянка, 2/10с1</div>
                  <div>©2024 ПравоТех</div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="lg:flex hidden gap-[40px] text-[15px] font-medium ">
          <div>
            <a href="#Calendar">Программа курсов</a>
          </div>
          <div>
            <a href="#Mentors">Преподаватели</a>
          </div>
          <div>
            <a href="#InputForm">Помощь</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Menu;
