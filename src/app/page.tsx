import Image from "next/image";
import pic from "../../public/pic.svg";
import Calendar from "@/components/Calendar/Calendar";
import Mentors from "@/components/Mentors/Mentors";
function Header() {
  return (
    <>
      <div className="h-full px-[48px] max-md:px-[20px] md:py-[88px]">
        <div>
          <div className=" h-full flex  relative md:flex-row-reverse flex-col">
            <div className=" pointer-events-none ">
              <Image src={pic} alt="" />
            </div>
            <div className=" ">
              <div className="mb-[16px] text-[38px] font-semibold">
                Академия (ПравоТех)
              </div>
              <div className="mb-[40px]">
                Образовательная правотех-платформа для юристов, руководителей и
                предпринимателей. Специалисты нового тысячелетия учатся здесь.
              </div>
              <button className="md:w-[164px] w-full h-[56px] px-[28px] py-[12] rounded-[12px]  text-white   bg-gradient-to-r from-[#BE50FF] from-0% to-[#5F01D6] to-84%">
                <a href="#Calendar">Выбрать курс</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Calendar />
      <Mentors />
    </>
  );
}

export default Header;
