
import Image from "next/image"
const Card = () => {
  return (
    <main>
         <section  className=" bg-gray-200">
        <section className="w-[85%] mx-auto py-10 px-5 mt-5 flex justify-between ">
        <div>
            <h1 className="text-[#474747] text-[18px] font-bold pb-2 " >Connect With Your Roots</h1>
            <p className="text-[14px] text-[#474747] font-medium w-[70%] ">Learn how we’re building bridges between Ethiopia and its global community.</p>
        </div>
        <div> 
            <h1 className="text-[#474747] text-[18px] font-bold pb-2  ">Connect With Your Roots</h1>
            <p className="text-[14px] text-[#474747] font-medium w-[70%] ">Learn how we’re building bridges between Ethiopia and its global community.</p></div>
        <div> 
            <h1 className="text-[#474747] text-[18px] font-bold pb-2 ">Connect With Your Roots</h1>
            <p className="text-[14px] text-[#474747] font-medium w-[70%] ">Learn how we’re building bridges between Ethiopia and its global community.</p></div>
        <div> 
            <h1 className="text-[#474747] text-[18px] font-bold pb-2 ">Connect With Your Roots</h1>
            <p className="text-[14px] text-[#474747] font-medium w-[70%] ">Learn how we’re building bridges between Ethiopia and its global community.</p></div>

        </section>
        


    </section>

    <section className="flex  w-[90%] mx-auto mt-10 bg-white py-10 px-5 justify-between">
        <div>
            <div>
                <h1 className="font-bold text-[16px] text-[#1E407B]">WHO WE ARE</h1>
            </div>
            <h1 className="w-[40%] text-[32px] text-[#1384B7] font-medium ">Fostering Global Unity for a Prosperous Ethiopia</h1>
            <p className="w-[40%] text-[16px] font-normal">Ethiopian Diaspora Services (EDS) is a dedicated institution bridging Ethiopia with its global Diaspora. Our mission is to empower Ethiopians abroad to contribute to the nation's development while nurturing cultural ties and fostering unity. EDS embodies the shared responsibility of building a united and prosperous Ethiopia</p>

        </div>
        <div>
           <Image src="/flag.webp" alt="logo" width={900} height={900} /> 
            
            </div>
    </section>

    </main>
   

   
  )
}

export default Card