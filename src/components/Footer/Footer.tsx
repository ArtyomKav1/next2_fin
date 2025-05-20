import vk from "../../../public/image/vk.svg";
import youtube from "../../../public/image/youtube.svg";
import tg from "../../../public/image/tg.svg";
import logo_yellow from "../../../public/logo_yellow.svg";
import Image from "next/image";
function Footer() {
  return (
    <>
      <div className="w-screen bg-[#0D0628] ">
        <div className=" max-w-[1128px] py-[56px] mx-auto">
          <div className="px-[48px] flex flex-col text-[#FFFFFF]/40 gap-[40px]">
            <div className="max-w-[1032px] flex justify-between md:flex-row flex-col">
              <div className="flex flex-col gap-[32px]">
                <Image src={logo_yellow} width={120} height={24} alt="" />
                <div className="flex flex-col gap-[8px] text-[14px]  [&>*]:duration-300 cursor-pointer">
                  <div className="hover:text-[#FFFFFF]">8 800 700-02-01</div>
                  <div className="hover:text-[#FFFFFF]">info@pravo.tech</div>
                  <div className="hover:text-[#FFFFFF]">
                    г. Москва, ул. Большая Полянка, 2/10с1
                  </div>
                </div>
              </div>
              <div className="flex gap-[12px] flex-col  lg:flex-row lg:gap-[72px]">
                <div className="flex flex-col gap-[12px] cursor-pointer [&>*]:duration-300">
                  <div className="hover:text-[#FFFFFF] ">Партнерам</div>
                  <div className="hover:text-[#FFFFFF]">Casebook</div>
                  <div className="hover:text-[#FFFFFF]">Caselook</div>
                  <div className="hover:text-[#FFFFFF]">Управляй делами</div>
                </div>
                <div className="flex flex-col gap-[12px] cursor-pointer [&>*]:duration-300">
                  <div className="hover:text-[#FFFFFF]">Документы</div>
                  <div className="hover:text-[#FFFFFF]">
                    Политика конфиденциальности
                  </div>
                  <div className="hover:text-[#FFFFFF]">
                    Стандарт гарантийной поддержки системы
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[144px] h-[40px] flex gap-[12px] cursor-pointer [&>*]:duration-300 [&>*]:rounded-[10px] [&>*]:bg-[#261f3e] 
                        [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:h-[40px] [&>*]:w-[40px]"
            >
              <div className="hover:scale-110">
                <Image src={tg} alt="" />
              </div>
              <div className="hover:scale-110">
                {" "}
                <Image src={vk} alt="" />
              </div>
              <div className="hover:scale-110">
                <Image src={youtube} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
