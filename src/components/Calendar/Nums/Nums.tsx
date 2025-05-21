"use client";
import { useEffect, useRef, useState } from "react";
import arrow from "../../../../public/right-arrow.png";
import Image from "next/image";
import { constFilters, day, generateMonthData, months } from "../data";
import { Num } from "./Num";

export type DayData = [number, number, number];
export type MonthData = DayData[];
export type NumsProps = {
  ChangeFilters: (filterName: string) => void;
  clearFilters: () => void;
  filters: string[];
};
export type EventsType = {
  course: string;
  weekdays: string;
  time: string;
  tutor: string;
  startAt: string;
};

export function Nums(props: NumsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const rightNodeRef = useRef<HTMLDivElement>(null);
  const leftNodeRef = useRef<HTMLDivElement>(null);

  const [monthsData, setMonthsData] = useState<MonthData[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isAddingMonth, setIsAddingMonth] = useState(false);
  const [events, setEvents] = useState<EventsType[]>([]);
  const today = new Date();
  const [isScrolling, setIsScrolling] = useState(false);

  //хапрос ивентов
  const fetchEvents = async () => {
    try {
      const response = await fetch(
        "https://back.personal-website.ru/academy/events",
      );
      if (!response.ok)
        throw new Error(`HTTP error! fetchEvents Status: ${response.status}`);
      const result = await response.json();
      setEvents(result);
    } catch (err) {
      console.error("Failed to fetch events:", err);
    }
  };
  //ширина контейнера
  const getMonthWidth = () =>
    scrollContainerRef.current?.querySelector<HTMLElement>(".month-container")
      ?.clientWidth || 900;

  useEffect(() => {
    fetchEvents();
  }, []);

  // вычисления центрального месяца
  // useEffect(() => {
  //   const scrollContainer = scrollContainerRef.current;
  //   if (!scrollContainer) return;

  //   const handleScroll = () => {
  //     const scrollLeft = scrollContainer.scrollLeft;
  //     const monthWidth = getMonthWidth();
  //     const visibleIndex = Math.round(scrollLeft / (monthWidth + 20));
  //     setCenterMonthIndex(visibleIndex);
  //   };

  //   scrollContainer.addEventListener("scroll", handleScroll);
  //   return () => scrollContainer.removeEventListener("scroll", handleScroll);
  // }, [monthsData]);

  // Начальная генерация месяцев
  useEffect(() => {
    const initialMonths: MonthData[] = [];
    for (let i = -1; i < 4; i++) {
      initialMonths.push(
        generateMonthData(today.getFullYear(), today.getMonth() + i),
      );
    }
    setMonthsData(initialMonths);

    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const timer = setTimeout(() => {
      const monthElement =
        scrollContainer.querySelector<HTMLElement>(".month-container");
      if (!monthElement) return;
      scrollContainer.scrollTo({
        left: monthElement.clientWidth * 1.5,
        behavior: "smooth",
      });
      setTimeout(() => setIsInitialized(true), 500);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  //общий скрол left right
  const scrollByOffset = (offset: number) => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || isScrolling) return;
    setIsScrolling(true);
    scrollContainer.scrollBy({ left: offset, behavior: "smooth" });
    setTimeout(() => {
      setIsScrolling(false);
    }, 400);
  };
  const scrollLeft = () => scrollByOffset(-getMonthWidth() / 2 - 20);
  const scrollRight = () => scrollByOffset(getMonthWidth() / 2 + 20);
  //основная фича создание новых месяцев
  const monthCreate = (type: "LEFT" | "RIGHT") => {
    if (isAddingMonth) return;
    setIsAddingMonth(true);

    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const currentScroll = scrollContainer.scrollLeft;
    const monthWidth = getMonthWidth();
    const updatedMonths = [...monthsData];

    if (type === "LEFT") {
      const firstDate = new Date(
        monthsData[0][0][0],
        monthsData[0][0][1] - 1,
        monthsData[0][0][2],
      );
      updatedMonths.pop();
      updatedMonths.unshift(
        generateMonthData(firstDate.getFullYear(), firstDate.getMonth()),
      );
    } else {
      const lastDate = new Date(
        monthsData[monthsData.length - 1][0][0],
        monthsData[monthsData.length - 1][0][1] + 1,
        1,
      );
      updatedMonths.shift();
      updatedMonths.push(
        generateMonthData(lastDate.getFullYear(), lastDate.getMonth()),
      );
    }

    setMonthsData(updatedMonths);
    requestAnimationFrame(() => {
      scrollContainer.scrollLeft =
        currentScroll + (type === "LEFT" ? monthWidth : -monthWidth);
      setIsAddingMonth(false);
    });
  };

  //тригер для создания новых месяцев
  useEffect(() => {
    if (!isInitialized) return;

    const leftObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAddingMonth) {
          monthCreate("LEFT");
        }
      },
      { threshold: 0.1 },
    );

    const rightObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAddingMonth) {
          monthCreate("RIGHT");
        }
      },
      { threshold: 0.1 },
    );

    if (leftNodeRef.current) leftObserver.observe(leftNodeRef.current);
    if (rightNodeRef.current) rightObserver.observe(rightNodeRef.current);

    return () => {
      leftObserver.disconnect();
      rightObserver.disconnect();
    };
  }, [monthsData, isInitialized, isAddingMonth]);
  return (
    <div className="flex flex-col gap-[24px] overflow-x-auto">
      <div className="h-[60px] flex items-center justify-center relative">
        <div
          className="w-[30px] h-[50px] rotate-180 flex items-center justify-center flex-shrink-0 pr-[5px] max-sm:hidden"
          onClick={scrollLeft}
        >
          <Image width={15} height={15} src={arrow} alt="" />
        </div>
        <div
          ref={scrollContainerRef}
          className="overflow-y-hidden flex w-[90%] max-sm:w-screen scrollbar-hide "
        >
          <div className="w-full flex gap-[20px] items-center">
            {monthsData.map((month, index) => (
              <div key={`month-${month[0][0]}-${month[0][1]}`} className="flex">
                {index === monthsData.length - 1 && (
                  <div
                    ref={rightNodeRef}
                    className="w-[45px] h-[40px] bg-slate-400 flex-shrink-0"
                  />
                )}
                <div className="sticky left-[-20px] z-50 bg-[#f4f4f4] w-[60px] h-[25px] border-b-[2px] border-black rotate-[270deg] flex items-center justify-center mt-[10px]">
                  {months[month[0][1]]}
                </div>
                <div className="flex gap-[10px] month-container">
                  {month.map((d) => {
                    const NumDate = new Date(month[0][0], month[0][1], d[2]);
                    return (
                      <Num
                        key={`day-${d[0]}-${d[1]}-${d[2]}`}
                        NumDate={NumDate}
                        events={events}
                        day={d[2]}
                      />
                    );
                  })}
                </div>
                {index === 1 && (
                  <div
                    ref={leftNodeRef}
                    className="w-[55px] h-[40px] bg-slate-400 flex-shrink-0"
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          className="w-[30px] h-[50px] flex items-center justify-center flex-shrink-0 pl-[5px] max-sm:hidden"
          onClick={scrollRight}
        >
          <Image width={15} height={15} src={arrow} alt="" />
        </div>
      </div>

      <div className="flex gap-[8px] items-center flex-wrap justify-center">
        {constFilters.map((u) => (
          <div
            key={u}
            onClick={() => props.ChangeFilters(u)}
            className={`px-[10px] py-[8px] rounded-[40px] bg-[#FFFFFF] border border-[#5F5B70]/50 cursor-pointer pointer-events-none ${props.filters.includes(u) ? "border-blue-500" : ""}`}
          >
            {u}
          </div>
        ))}
        {!!props.filters.length && (
          <div
            onClick={props.clearFilters}
            className="ml-[10px] underline p-[10px]"
          >
            Сбросить фильтры
          </div>
        )}
      </div>
    </div>
  );
}
