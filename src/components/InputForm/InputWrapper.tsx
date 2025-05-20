"use client";
import { Formik, Form } from "formik";
import { ItemCheckBox } from "./Item_checkBox";
import { initialValues, validationSchema } from "./helper";
import { ItemInput } from "./Item_input";
import { useState } from "react";
import dynamic from "next/dynamic";
const PhoneInput = dynamic(() => import("./PhoneInput"), { ssr: false });
import Image from "next/image";
import Loader from "../../../public/image/Loader_white.svg";
import checkResponse from "../../../public/checkResponse.svg";
export const InputForm = () => {
  const [popup, setPopup] = useState(false);
  const [errorFetch, setErrorFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const postData = async (data: {
    name: string;
    company: string;
    number: string;
    message: string;
    check: boolean;
  }) => {
    setErrorFetch(false);
    setLoading(true);
    try {
      const response = await fetch("https://back.personal-website.ru/v2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setErrorFetch(true);
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        setPopup(true);
      }

      const result = await response.json();
      console.log("Success:", result);
      return result;
    } catch (error) {
      setErrorFetch(true);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className=" md:px-[48px] p-[20px] py-[88px] max-md:py-[20px] ">
        <div className="  md:p-[40px] p-[20px]  bg-gradient-to-t from-[#5F01D6] from-34% to-[#a245f9] to-94% rounded-[32px] max-sm:rounded-[20px] relative">
          {errorFetch && (
            <div className="absolute top-[-40px] left-0 w-full flex items-center justify-center">
              <div className=" bg-red-600 text-white py-[6px] px-[10px] rounded-[8px]">
                Ошибка отправки запроса.
              </div>
            </div>
          )}
          {!popup ? (
            <div className="flex lg:flex-row flex-col gap-[24px]">
              <div className="text-[#FFFFFF] w-[366px] max-sm:w-full shrink-0  flex  flex-col gap-[12px]">
                <div className="text-[32px] leading-[40px] font-semibold tracking-[3px] max-sm:text-[22px] max-sm:leading-[24px]  max-sm:tracking-[0px]">
                  Не можете выбрать курс?
                </div>
                <div className="text-[16px] leading-[24px]">
                  Напишите нам — мы поможем определиться
                </div>
              </div>
              <div className="w-full   flex flex-col gap-[12px] relative">
                {loading && (
                  <div className="absolute inset-0 bg-black/50 z-50 rounded-[12px] flex flex-col items-center justify-center gap-[20px]">
                    <Image
                      src={Loader}
                      className="animate-spin "
                      width={40}
                      alt=""
                    />
                    <div className="text-white">Загрузка</div>
                  </div>
                )}

                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={async (values, { setSubmitting }) => {
                    try {
                      await postData(values);
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                >
                  {({ values, handleChange, handleBlur }) => (
                    <Form>
                      <div className="flex flex-col gap-[12px]">
                        <ItemInput
                          name={"name"}
                          placeholder={"Имя"}
                          shadowy={false}
                        />
                        <div className="flex max-lg:flex-col  gap-[12px] ">
                          <ItemInput
                            name={"company"}
                            placeholder={"Компания"}
                            shadowy={true}
                          />
                          <PhoneInput name="number" placeholder="Телефон" />
                        </div>
                        <ItemInput
                          name={"message"}
                          placeholder={"Ваше сообщение"}
                          shadowy={false}
                        />
                        <ItemCheckBox
                          name={"check"}
                          value={values.check}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                        />
                        <button
                          type="submit"
                          className="text-[#0D0628] max-md:w-full bg-[#ecff30] h-[56px] rounded-[12px] px-[28px] py-[12px] w-[200px] hover:bg-[#ffffff] duration-300"
                        >
                          Отправить заявку
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center text-white/80 max-sm:h-[597px] gap-[16px] px-[36px] py-[24px]">
              <Image src={checkResponse} className="" width={40} alt="" />
              <div className="flex flex-col  gap-[8px]">
                <div className="text-white text-[22px] leading-[28px]">
                  Заявка принята
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div className="underline" onClick={() => setPopup(false)}>
                Заполнить форму повторно
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
