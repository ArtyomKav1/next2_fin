"use client";
import { Field, ErrorMessage as Error, useField } from "formik";
import Image from "next/image";
type ItemInputProps = {
  name: string;
  placeholder: string;
  shadowy: boolean;
};
export const ItemInput = (props: ItemInputProps) => {
  const [field, meta] = useField(props.name);

  return (
    <>
      <div
        className={`w-full h-[56px]  rounded-[12px] relative px-[20px] z-0   overflow-hidden ${!props.shadowy ? "bg-[#B879F2]" : "bg-[#9F43F1]"}`}
      >
        <Field
          className="block absolute  bottom-[5px] text-[#FFFFFF] w-[88%] appearance-none focus:outline-none focus:ring-0 peer rounded-[5px] border-black pt-[10px] bg-transparent"
          type="text"
          name={props.name}
          id={props.name}
          placeholder=" "
          autoComplete="off"
          onBlur={field.onBlur}
        />
        <div
          className=" text-[#FFFFFF]/40 absolute pointer-events-none  duration-300 transform                                       
                                    -translate-y-4 scale-75 top-4 -z-10 
                                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                                    peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          {props.placeholder}
        </div>
        {meta.touched && !meta.error && (
          <div className="group">
            <Image
              src="/check.png"
              width={20}
              height={20}
              className="absolute right-[10px] 2xl:top-[10px] top-[20px] 2xl:w-[40px] w-[20px] 2xl:h-[40px] h-[20px]"
              alt=""
            />
            <span
              className="absolute right-[60px] pointer-events-none top-[12px] transition-all duration-300 bg-green-500 
                px-[10px] rounded-[8px] py-[5px] text-white opacity-0 invisible group-hover:opacity-80  group-hover:visible"
            >
              OK
            </span>
          </div>
        )}
        <Error name={props.name}>
          {(error) => (
            <div className="group ">
              <Image
                src="/warning.png"
                width={20}
                height={20}
                className="absolute right-[10px] 2xl:top-[10px] top-[20px] 2xl:w-[40px] w-[20px] 2xl:h-[40px] h-[20px]"
                alt=""
              />
              <span
                className=" absolute right-[60px] top-[12px] transition-all pointer-events-none
                      duration-300 bg-red-500 px-[15px] rounded-[8px] py-[5px] text-white opacity-0 group-hover:opacity-80"
              >
                {error}
              </span>
            </div>
          )}
        </Error>
      </div>
    </>
  );
};
