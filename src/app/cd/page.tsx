"use client";
import Image from "next/image";
import ment from "../../../public/image/mentors/1.png";
import Calendar, { CursesType } from "@/components/Calendar/Calendar";
import { useEffect, useState } from "react";
function Cd() {
  // const currentEvent: CursesType = JSON.parse(localStorage.getItem("event"))

  const [currentEvent, setCurrentEvent] = useState<CursesType | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const eventData = localStorage.getItem("event");
      if (eventData) {
        try {
          setCurrentEvent(JSON.parse(eventData));
        } catch (error) {
          console.error("Error parsing event data:", error);
        }
      }
    }
  }, []);

  if (!currentEvent) {
    return <div className="h-[871px]">Loading...</div>;
  }

  return (
    <>
      <div className="  px-[48px] pt-[48px] max-md:pt-[20px] max-md:px-[20px] flex flex-col gap-[48px]">
        <div className="text-[38px] font-semibold text-[#0D0628] max-md:text-[24px] max-md:text-center">
          Проверка контрагентов в Casebook
        </div>
        <div className="  flex flex-col gap-[24px]">
          <div className=" flex max-lg:flex-col gap-[24px] ">
            <div className=" p-[24px] rounded-[20px] bg-[#FFFFFF] flex flex-col gap-[16px]">
              <div className="text-[12px] text-[#0D0628] uppercase 	tracking-widest">
                Программа курса
              </div>
              <div className="text-[16px]">{currentEvent.description}</div>
              <ul className="flex flex-col gap-[12px]">
                {currentEvent.contains &&
                  currentEvent.contains.length > 0 &&
                  currentEvent.contains.map((u: string) => {
                    return (
                      <li key={u} className="flex items-start gap-[10px] ">
                        <span className="block w-[6px] mt-[10px] h-[6px] rounded-full bg-[#8C26EA] shrink-0"></span>
                        {u}
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className=" flex flex-col gap-[24px] ">
              <div className=" rounded-[20px] bg-[#0D0628] p-[24px] text-white flex flex-col gap-[16px] text-[16px] justify-center">
                <div>{currentEvent.interested}</div>
                <div>Каждый понедельник, вторник, среду и четверг</div>
                <div>Длительность: {currentEvent.duration}</div>
                <div>Выдается сертификат</div>
              </div>
              <div className="p-[24px] pb-[28px] flex flex-col gap-[16px] rounded-[20px] bg-[#FFFFFF]">
                <div className="text-[12px] text-[#0D0628] uppercase 	tracking-widest">
                  Преподаватели курса
                </div>
                <div className="flex max-md:flex-col gap-[16px]">
                  <div className="shrink-0 ">
                    <Image
                      className="rounded-[8px]"
                      src={ment}
                      width={60}
                      height={60}
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="font-semibold">Ирина Приль</div>
                    <div>
                      Практикующий юрист. Опыт работы в юридической сфере более
                      5 лет. Специализируется на банкротстве юридических и
                      физических лиц.
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Calendar />
    </>
  );
}

export default Cd;
