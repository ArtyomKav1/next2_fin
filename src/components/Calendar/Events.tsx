import { redirect } from "next/navigation";
import Image from "next/image";
import man from "../../../public/сurses/man.svg";
import Time from "../../../public/сurses/Time.svg";
import { CursesType } from "./Calendar";
export type propsEventsType = {
  curs: CursesType;
};

function Events(props: propsEventsType) {
  const redirectFromHeader = () => {
    localStorage.setItem("event", JSON.stringify(props.curs));
    redirect("/cd");
  };

  return (
    <>
      <div className="h-[520px] flex flex-col justify-between   px-[24px] pt-[28px] pb-[24px] rounded-[16px] bg-[#FFFFFF]  ">
        <div className="flex flex-col gap-[12px] ">
          <div className="text-[##0D0628]/40 text-[14px]  ">
            {props.curs.tags}
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="text-[##0D0628] text-[24px] leading-[28px] font-semibold">
              {props.curs.name}
            </div>
            <div className="text-black/60 line-clamp-4">
              {props.curs.description}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[28px]">
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-center gap-[10px] leading-[20px]">
              <div className="shrink-0">
                <Image width={24} height={24} src={Time} alt="" />
              </div>
              <div>{props.curs.duration}</div>
            </div>
            <div className="flex items-center gap-[10px]  leading-[20px]">
              <div className="shrink-0">
                <Image width={24} height={24} src={man} alt="" />
              </div>
              <div>
                <div>{props.curs.interested}</div>
              </div>
            </div>
          </div>

          <button
            onClick={() => redirectFromHeader()}
            className="w-[100%] h-[56px] px-[28px] py-[12] mt-[20px] rounded-[12px]  text-white  text-[16px] bg-gradient-to-r from-[#BE50FF] from-0% to-[#5F01D6] to-84%"
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
    </>
  );
}
export default Events;
