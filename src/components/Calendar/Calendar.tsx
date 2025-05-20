"use client";

import Events, { propsEventsType } from "./Events";
import { Nums } from "./Nums/Nums";
import cn from "classnames";
import { useEffect, useState } from "react";
import Loader from "../../../public/image/Loader_black.svg";
import Image from "next/image";

export type CursesType = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  contains?: string[];
  blockContains?: blockContainsType[];
  interested: string;
  duration: string;
  tags: string[];
};

type blockContainsType = {
  type: string;
  text: string;
};

function Calendar() {
  const [long, setLong] = useState(false);
  const [filters, setFilter] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);
  const [errorFetch, setErrorFetch] = useState(false);
  const [curses, setCurses] = useState<CursesType[]>([]);

  const [filtersDate, setFilterDate] = useState<string[]>([]);

  useEffect(() => {
    const fetchCurses = async () => {
      setErrorFetch(false);
      setLoading(true);
      try {
        const response = await fetch(
          "https://back.personal-website.ru/academy/courses",
        );
        if (!response.ok) {
          setErrorFetch(true);
          throw new Error(`HTTP fetchCurses error! Status: ${response.status}`);
        }
        const result = await response.json();
        // console.log('Success:', result)
        setCurses(result);
        return result;
      } catch (error) {
        setErrorFetch(true);
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchCurses();
  }, []);

  let finCurses = curses.filter((evet) => {
    if (filters.length < 1) return true;
    let a = false;
    evet.tags.map((en) => {
      if (filters.includes(en)) {
        a = true;
      }
    });
    return a;
  });
  const ChangeFilters = (filterName: string) => {
    if (filters.includes(filterName)) {
      let newFilter = filters.filter((u) => u !== filterName);
      setFilter(newFilter);
    } else {
      let newFilter = filters.filter(() => true);
      newFilter.push(filterName);
      setFilter(newFilter);
    }
  };
  const clearFilters = () => {
    setFilter([]);
  };
  let finCursesMaping: Array<CursesType> = finCurses.slice(0, 6);
  if (long) {
    finCursesMaping = [...finCurses];
  }

  return (
    <>
      <div
        id="Calendar"
        className="w-full h-full px-[48px] max-md:px-[20px] py-[88px] flex flex-col justify-center items-center gap-[48px]"
      >
        <div className="font-semibold text-[32px] text-center max-md:text-[24px]">
          Выберите подходящий курс Академии (ПравоТех)
        </div>
        <div className=" w-full  flex justify-center">
          <Nums
            ChangeFilters={ChangeFilters}
            clearFilters={clearFilters}
            filters={filters}
          />
        </div>
        {errorFetch && (
          <div className="bg-red-500 text-white py-[10px] px-[100px] rounded-lg">
            Ошибка загрузки курсов
          </div>
        )}
        <div
          className={cn(
            "lg:w-[1032px]  overflow-hidden  flex flex-wrap lg:gap-[24px]  gap-[12px]",
          )}
        >
          {loading ? (
            <div className="w-full flex flex-col items-center justify-center gap-[20px]">
              <Image src={Loader} className="animate-spin " width={40} alt="" />
              <div className="text-black">Загрузка</div>
            </div>
          ) : (
            <>
              {finCursesMaping.map((curs) => (
                <div key={curs.id} className="lg:w-[328px] md:w-[49%]">
                  <Events curs={curs} />
                </div>
              ))}
              {finCurses.length > 6 && !long && (
                <div
                  onClick={() => setLong(!long)}
                  className="h-[56px] w-full bg-[#FFFFFF] px-[2px] py-[12px] text-[16px] trxt-[#0D0628] rounded-[12px] flex items-center justify-center"
                >
                  <span>Загрузить ещё</span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Calendar;
