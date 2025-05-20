import React from "react";
import { day } from "../data";
import { EventsType } from "./Nums";

type NumPropsType = {
  NumDate: Date;
  events: EventsType[];
  day: number;
};

export const Num = React.memo(function Num(props: NumPropsType) {
  const isSameDay = (a: string, b: Date) => {
    const dateA = new Date(a);
    dateA.setDate(dateA.getDate() + 1);
    return (
      dateA.getFullYear() === b.getFullYear() &&
      dateA.getMonth() === b.getMonth() &&
      dateA.getDate() === b.getDate()
    );
  };

  const hasEvents = props.events.some((ev) =>
    isSameDay(ev.startAt, props.NumDate),
  );
  const weekDay: number = props.NumDate.getDay() + 1;

  return (
    <div
      className={`w-[25px] cursor-pointer flex flex-col items-center ${hasEvents ? "opacity-100 font-semibold cursor-pointer " : "opacity-50"}`}
    >
      <div className={weekDay === 6 || weekDay === 7 ? "text-red-600" : ""}>
        {day[weekDay]}
      </div>
      <div className={hasEvents ? "font-bold" : ""}>{props.day}</div>
    </div>
  );
});
