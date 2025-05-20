// "use client"
// import { Formik } from "formik"
// import cn from 'classnames'
// import errorImg from '../../public/warning.png'
// import okImg from '../../public/check.png'
// import { useState } from "react"
// import Image from 'next/image'
// import dynamic from "next/dynamic"
// import InputMask from "react-input-mask-next";

// type initialValuesProps = {
//     name?: string
//     company?: string
//     phone?: string
//     message?: string
//     agree?: string
// }

// export function InputForm() {
//     const [check, setCheck] = useState(false)

//     return (
//         <div id="InputForm">
//             <Formik
//                 enableReinitialize
//                 initialValues={{ nam: '', company: '', phone: '', message: '' }}
//                 onSubmit={(values, { setSubmitting }) => {

//                     console.log(values)

//                     setSubmitting(false);

//                 }}
//                 validate={values => {
//                     const errors: initialValuesProps = {};
//                     if (!values.nam) errors.name = "Required";
//                     if (!values.phone) errors.phone = "Required";
//                     if (!values.company) errors.company = "Required";
//                     if (!check) errors.agree = "Required"

//                     return errors;
//                 }}

//             >
//                 {({
//                     resetForm,
//                     errors,
//                     touched,
//                     values,
//                     handleChange,
//                     handleBlur,
//                     handleSubmit,
//                     isSubmitting,
//                 }) => (
//                     <form onSubmit={handleSubmit}>

//                         <div className="w-full h-full md:px-[48px] p-[20px] py-[88px] ">
//                             <div className="w-full h-full md:p-[40px] p-[20px]  flex lg:flex-row flex-col gap-[24px] bg-gradient-to-r from-[#BE50FF] from-0% to-[#5F01D6] to-84% rounded-[32px]">

//                                 <div className="text-[#FFFFFF] w-full h-full flex flex-col gap-[12px]">
//                                     <div className="text-[32px]">Не можете выбрать курс?</div>
//                                     <div className="text-[16px]">Напишите нам — мы поможем определиться</div>
//                                 </div>

//                                 <div className="w-full h-full flex flex-col gap-[12px]">

//                                     <div className="w-full h-[56px] bg-[#B273EA] rounded-[12px] relative px-[20px] z-0 group  overflow-hidden ">

//                                         <input className="block absolute  bottom-[5px] text-[#FFFFFF] w-[88%]  bg-transparent appearance-none focus:outline-none focus:ring-0 peer rounded-[5px]"
//                                             type="text"
//                                             name="nam"
//                                             // id="name"
//                                             value={values.nam}
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             placeholder=" "
//                                             autoComplete="off"

//                                         />
//                                         <div
//                                             // htmlFor="name"
//                                             className=" text-[#FFFFFF]/40
//                                             absolute
//                                             duration-300 transform
//                                             -translate-y-4 scale-75 top-4 -z-10
//                                             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
//                                             peer-focus:scale-75 peer-focus:-translate-y-4"
//                                         >
//                                             Имя
//                                         </div>

//                                         {touched.nam && <div className={cn("absolute right-[10px] top-[25%] h-[25px] w-[25px] rounded-full group   text-white",)}>

//                                             {!errors.nam
//                                                 ? <div>

//                                                     <Image
//                                                         src={okImg}
//                                                         alt="" />
//                                                 </div>
//                                                 :
//                                                 <div>
//                                                     <Image
//                                                         src={errorImg}
//                                                         alt="" />
//                                                     <div className="hidden group-hover:block absolute right-[30px] top-[-3px]   bg-red-600 p-[6px] rounded-[5px]">Required</div>
//                                                 </div>}
//                                         </div>}
//                                     </div>

//                                     <div className="flex lg:flex-row flex-col gap-[12px]">
//                                         <div className="w-[100%] lg:w-[50%] h-[56px] bg-[#B273EA] rounded-[12px] relative px-[20px] z-0 group  overflow-hidden">

//                                             <input className="block absolute  bottom-[5px] text-[#FFFFFF] lg:w-[75%]  w-[88%] bg-transparent appearance-none focus:outline-none focus:ring-0 peer rounded-[5px]"
//                                                 type="text"
//                                                 name="company"
//                                                 id="company"
//                                                 value={values.company}
//                                                 onChange={handleChange}
//                                                 onBlur={handleBlur}
//                                                 placeholder=" "
//                                                 autoComplete="off"
//                                             />
//                                             <div
//                                                 // htmlFor="company"
//                                                 className=" text-[#FFFFFF]/40
//                                             absolute
//                                             duration-300 transform
//                                             -translate-y-4 scale-75 top-4 -z-10
//                                             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
//                                             peer-focus:scale-75 peer-focus:-translate-y-4"
//                                             >
//                                                 Компания
//                                             </div>

//                                             {touched.company && <div className={cn("absolute right-[10px] top-[25%] h-[25px] w-[25px] rounded-full group text-white ",)}>

//                                                 {!errors.company
//                                                     ? <div>
//                                                         <Image
//                                                             src={okImg}
//                                                             alt="" />
//                                                     </div>
//                                                     :
//                                                     <div>
//                                                         <Image
//                                                             src={errorImg}
//                                                             alt="" />
//                                                         <div className="hidden group-hover:block absolute right-[30px] top-[-3px]   bg-red-600 p-[3px] rounded-[5px]">Required</div>
//                                                     </div>}
//                                             </div>}
//                                         </div>

//                                         <div className="w-[100%] lg:w-[50%] h-[56px] bg-[#B273EA] rounded-[12px] relative px-[20px] z-0 group  overflow-hidden">

//                                             {/* <input className="block absolute  bottom-[5px] text-[#FFFFFF] w-full lg:w-[75%]  w-[88%] bg-transparent appearance-none focus:outline-none focus:ring-0 peer w-[75%] rounded-[5px]"
//                                                 type="tel"
//                                                 name="phone"
//                                                 id="phone"
//                                                 value={values.phone}
//                                                 onChange={handleChange}
//                                                 onBlur={handleBlur}
//                                                 placeholder=" "
//                                                 autoComplete="off"

//                                             /> */}
//                                             {/* <InputMask mask="99/99/9999" onChange={() => { }} value={'1'} /> */}

//                                             <div
//                                                 // htmlFor="phone"
//                                                 className=" text-[#FFFFFF]/40
//                                                 absolute
//                                                 duration-300 transform
//                                                 -translate-y-4 scale-75 top-4 -z-10
//                                                 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
//                                                 peer-focus:scale-75 peer-focus:-translate-y-4"
//                                             >
//                                                 Телефон
//                                             </div>

//                                             {touched.phone && <div className={cn("absolute right-[10px] top-[25%] h-[25px] w-[25px] rounded-full group  text-white ",)}>

//                                                 {!errors.phone
//                                                     ? <div>
//                                                         <Image
//                                                             src={okImg}
//                                                             alt="" />
//                                                     </div>
//                                                     :
//                                                     <div>
//                                                         <Image
//                                                             src={errorImg}
//                                                             alt="" />
//                                                         <div className="hidden group-hover:block absolute right-[30px] top-[-3px]  bg-red-600 p-[3px] rounded-[5px]">Required</div>
//                                                     </div>}
//                                             </div>}
//                                         </div>

//                                     </div>

//                                     <div className="w-full h-[96px] bg-[#B273EA] rounded-[12px] relative px-[20px] z-0 group  overflow-hidden">

//                                         <textarea className="block absolute   top-[25px] text-[#FFFFFF] w-[88%] bg-transparent appearance-none focus:outline-none focus:ring-0 peer scroll"

//                                             name="message"
//                                             id="message"
//                                             value={values.message}
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             placeholder=" "
//                                             autoComplete="off"
//                                         />
//                                         <div
//                                             // htmlFor="message"
//                                             className=" text-[#FFFFFF]/40
//                                             absolute
//                                             duration-300 transform
//                                             -translate-y-4 scale-75 top-4 -z-10
//                                             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
//                                             peer-focus:scale-75 peer-focus:-translate-y-4"
//                                         >Ваще сообщение
//                                         </div>

//                                         {touched.message && <div className={cn("absolute right-[10px] top-[35%] h-[25px] w-[25px] rounded-full group  text-white ",)}>

//                                             {!errors.message
//                                                 ? <div>
//                                                     <Image
//                                                         src={okImg}
//                                                         alt="" />
//                                                 </div>
//                                                 :
//                                                 <div>
//                                                     <Image
//                                                         src={errorImg}
//                                                         alt="" />
//                                                     <div className="hidden group-hover:block absolute right-[30px] top-[-3px]  bg-red-600 p-[3px] rounded-[5px]">Required</div>
//                                                 </div>}
//                                         </div>}
//                                     </div>

//                                     <div className="inline-flex items-center relative">

//                                         <div className="w-[24px] h-[24px] rounded-[6px] bg-[#FEFEFE]/10 flex items-center justify-center" onClick={() => setCheck(!check)} >
//                                             {check && <div className="w-[14px] h-[14px] rounded-full bg-white/50"></div>}
//                                         </div>

//                                         <div className="cursor-pointer ml-2 text-white text-[14px]">
//                                             <p> Я принимаю <a href="#" className="text-[#EEFF2D] underline ">Политику конфиденциальности</a> </p>
//                                         </div>

//                                         {
//                                             // @ts-ignore
//                                             errors.agree && <div className={cn("absolute right-[10px] top-[25%] h-[25px] w-[25px] rounded-full group text-white ",)}>

//                                                 {
//                                                     // @ts-ignore
//                                                     !errors.agree
//                                                         ? <div>
//                                                             <Image
//                                                                 src={okImg}
//                                                                 alt="" />
//                                                         </div>
//                                                         :
//                                                         <div>
//                                                             <Image
//                                                                 src={errorImg}
//                                                                 alt="" />
//                                                             <div className="hidden group-hover:block absolute right-[30px] top-[-3px]   bg-red-600 p-[3px] rounded-[5px]">Required</div>
//                                                         </div>
//                                                 }
//                                             </div>
//                                         }
//                                     </div>

//                                     <button className=" lg:w-[194px] h-[56px] px-[23px] py-[12px] rounded-[12px] bg-[#EEFF2D] text-[16px] text-[#0D0628] font-semibold tracking-[-4%] leading-[120%]" >Отправить заявку</button>
//                                 </div>

//                             </div>
//                         </div>

//                     </form >
//                 )}
//             </Formik >

//         </div >
//     )
// }
// export default dynamic(() => Promise.resolve(InputForm), {
//     ssr: false
// })
