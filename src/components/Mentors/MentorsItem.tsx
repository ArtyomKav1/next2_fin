"use client";
import { useState } from "react";
import pic from "../../../public/image/mentors/1.png";
import ram from "../../../public/ram.svg";
import X from "../../../public/X.svg";
import Image from "next/image";
import { mentorsDataType } from "./Mentors";
type propsType = {
  item: mentorsDataType;
};
function MentorsItem(props: propsType) {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <div className="relative">
        <div
          className=" md:h-[260px] h-[200px]   rounded-[12px] overflow-hidden relative     "
          onClick={() => setPopup(true)}
        >
          <Image
            className="w-full h-full object-cover inset-0"
            src={pic}
            alt=""
          />
          <div className="absolute bottom-0  h-full w-full bg-gradient-to-b from-transparent from-60% to-[#0D0628] "></div>
          <div className="absolute top-[20px] right-[15px] h-[34px] w-[34px] bg-[#FFFFFF] rounded-full flex items-center justify-center duration-300 hover:scale-110">
            <Image src={ram} alt="" />
          </div>
          <div className="absolute bottom-[12px] w-full h-[48px] flex flex-col gap-[4px] items-start justify-center px-[20px]">
            <div className="text-[#FFFFFF] text-[16px] max-sm:text-[12px] max-md:text-[14px] leading-[20px]">
              {props.item.name}
            </div>
            <div className="text-[#FFFFFF]/80 text-[14px] max-md:text-[12px] leading-[20px]">
              {props.item.description}
            </div>
          </div>
        </div>

        {popup && (
          <div
            className="fixed inset-0 z-50 bg-black/50 overflow-y-auto"
            onClick={() => setPopup(false)}
          >
            <div className="min-h-full flex items-center justify-center p-[16px]">
              <div
                className="relative bg-white rounded-[40px] p-[16px] md:p-[32px] w-full max-w-[1024px] flex flex-col md:flex-row gap-[32px] mx-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="absolute right-[5%] top-[5%] max-sm:right-[8%] max-md:top-[3%] z-50 cursor-pointer max-md:bg-white p-[10px] rounded-full"
                  onClick={() => setPopup(false)}
                >
                  <Image className="w-[24px] h-[24px]" src={X} alt="close" />
                </div>

                <div className="lg:w-[240px] lg:h-[320px] w-full md:w-[30%] relative">
                  <Image
                    className="w-full h-full object-cover rounded-[20px]"
                    src={pic}
                    alt=""
                  />
                  <div className="absolute bottom-0 h-full w-full bg-gradient-to-b from-transparent from-60% to-[#0D0628] rounded-[20px]" />
                </div>

                <div className="md:w-[600px] flex flex-col gap-[12px]">
                  <div className="flex flex-col gap-[4px]">
                    <div className="text-[26px] font-semibold text-[#0D0628]">
                      {props.item.name}
                    </div>
                    <div className="text-[14px] text-[#0D0628]">
                      {props.item.description}
                    </div>
                  </div>
                  <div>
                    <div
                      className="[&>*]:mb-[16px] [&>h4]:font-semibold [&>p]:text-gray-600"
                      dangerouslySetInnerHTML={{
                        __html: props.item.fullDescription,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MentorsItem;
