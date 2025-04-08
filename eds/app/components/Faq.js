// "use client"
// import Image from "next/image";
// import faqData from '../components/data/faqdata'
//  import { useState } from "react";
// import { Plus, Minus } from "lucide-react";s:

// const Faq = () => {
//      const [openIndex, setOpenIndex] = useState(null);

//     const toggleAnswer = () =>{
//        setOpenIndex(openIndex === index ? null : index);
//     }


//   return (
//     <section className="w-[75%] m-auto mt-28 flex">
//       <div className="w-[50%] space-y-3">
//         <h1 className="flex items-center text-[16px] font-normal text-[#2E4057] gap-3 pb-5">
//           <span>
//             <Image src="/icon-2.png" alt="icon" width={14.97} height={15} />
//           </span>
//           FAQ
//         </h1>
//         <h2 className="text-[32px] font-semibold text-[#184782] w-[70%] leading-9 pb-3">
//           Frequently Asked Questions (FAQ)
//         </h2>
//         <p className="text-[16px] font-light text-[#2E4057] w-[60%]">
//           Have questions about our services? We’ve compiled answers to the most
//           common inquiries to help you navigate the Ethiopian Diaspora Service
//           with ease.
//         </p>
//       </div>
//       <div className="w-[50%] space-y-4">
//         {faqData.map((faq, index) => (
//           <div
//             key={index}
//             className="border border-gray-300 rounded-md bg-white p-5 shadow-sm"
//           >
//             <div
//               className="flex justify-between items-center cursor-pointer"
//               onClick={() => toggleAnswer(index)}
//             >
//               <h3 className="text-[#1E407B] font-medium">{faq.question}</h3>
//               {openIndex === index ? (
//                 <MinusIcon className="w-5 h-5 text-[#1E407B]" />
//               ) : (
//                 <PlusIcon className="w-5 h-5 text-[#1E407B]" />
//               )}
//             </div>
//             {openIndex === index && (
//               <p className="mt-3 text-[#2E4057] text-sm">{faq.answer}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Faq