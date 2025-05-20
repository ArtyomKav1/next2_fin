"use client";
import { useEffect, useState } from "react";
import MentorsItem from "./MentorsItem";
import Image from "next/image";
import Loader from "../../../public/image/Loader_black.svg";

export type mentorsDataType = {
  description: string;
  fullDescription: string;
  id: string;
  image: string;
  name: string;
};

function Mentors() {
  const [mentorsData, setMentorsData] = useState<mentorsDataType[]>([]);
  const [errorFetch, setErrorFetch] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const postData = async () => {
      try {
        setErrorFetch(false);
        setLoading(true);
        // const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
        const response = await fetch(
          "https://back.personal-website.ru/academy/tutors",
          {
            method: "get",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        if (!response.ok) {
          setErrorFetch(true);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setMentorsData(result);
        return result;
      } catch (error) {
        setErrorFetch(true);
        throw error;
      } finally {
        setLoading(false);
      }
    };
    postData();
  }, []);

  // if (localStorage.getItem("event")) {
  //   const eventId = JSON.parse(localStorage.getItem("event")).id
  //   console.log(eventId)
  // }

  return (
    <>
      <div
        id="Mentors"
        className="bg-[#FFFFFF]  w-full h-full md:px-[48px] max-sm:px-[0px] px-[24px] py-[44px] flex flex-col items-center justify-center gap-[48px] rounded-[40px]"
      >
        <div className="text-[32px] font-semibold text-center">
          Преподаватели Академии (ПравоТех)
        </div>
        <div className="flex flex-wrap md:gap-[24px]  gap-[12px] justify-center ">
          {loading ? (
            <div className="flex flex-col items-center justify-center gap-[20px]">
              <Image src={Loader} className="animate-spin " width={40} alt="" />
              <div>Загрузка</div>
            </div>
          ) : !errorFetch ? (
            mentorsData.map((u) => (
              <div key={u.id}>
                <MentorsItem item={u} />
              </div>
            ))
          ) : (
            <div className=" flex items-center justify-center w-[240px] shrink-0 bg-red-600 text-white py-[6px] px-[10px] rounded-[8px]">
              Ошибка запроса преподавателей.
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Mentors;
