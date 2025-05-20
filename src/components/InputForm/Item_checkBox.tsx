"use client";
import { Field } from "formik";
import type { ChangeEvent, FocusEvent } from "react";

type ItemCheckBoxProps = {
  name: string;
  value: boolean;
  handleChange: {
    (e: ChangeEvent<any>): void;
    <T = string | ChangeEvent<any>>(
      field: T,
    ): T extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
  handleBlur: {
    (e: FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
};

export const ItemCheckBox = (props: ItemCheckBoxProps) => {
  return (
    <>
      <div className="inline-flex items-center relative w-[88%]">
        <Field
          className="block absolute   text-[#FFFFFF]  w-[30px] h-[30px]  appearance-none focus:outline-none focus:ring-0 peer rounded-[5px] border-black pt-[10px] bg-transparent"
          type="checkbox"
          name={props.name}
          checked={props.value}
          onChange={props.handleChange}
        />
        <div className="w-[24px] h-[24px] shrink-0 rounded-[6px] bg-[#FEFEFE]/10 flex items-center justify-center">
          {props.value && (
            <div className="w-[14px] h-[14px] rounded-full bg-white/50" />
          )}
        </div>
        <div className="cursor-pointer ml-2 text-white text-[14px]">
          <p>
            Я согласен c{" "}
            <a href="#" className="text-[#EEFF2D] underline ">
              условиями обработки персональных данных
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
