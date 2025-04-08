import Image from "next/image";

const Footer = () => {
  return (
    <section className="bg-gradient-to-b from-[#1384B7] to-[#184782] mt-24">
      <div className="w-[90%] m-auto flex gap-16 pt-20">
        <div className="w-[45%]">
          <div className="flex">
            <Image src="/logo (2).webp" width={405} height={93} />
          </div>
          <p className="text-[18px] font-normal text-white w-[100%] pt-2">
            Connecting Ethiopia’s global community to foster unity, cultural
            pride, and national progress.
          </p>
        </div>
        <div className="w-[60%] ">
          <h1 className="text-[18px] font-semibold text-white pb-2">
            Quick Links
          </h1>
          <hr className="text-white w-[700px] pb-6" />
          <div>
            <ul className="flex gap-12 text-white">
              <li className="text-[16px] font-normal">Home</li>
              <li className="text-[16px] font-normal">About Us</li>
              <li className="text-[16px] font-normal">Our Services</li>
              <li className="text-[16px] font-normal">News & Events</li>
              <li className="text-[16px] font-normal">Resources</li>
              <li className="text-[16px] font-normal">Contact Us</li>
            </ul>

            <div className="text-white flex  pt-10 gap-8">
              <div className="w-[30%]  ">
                <h1 className="text-[18px] font-semibold pb-2">Contact</h1>
                <hr className="w-[700px]" />
                <h1 className="text-[16px] font-normal pt-3">
                  011 554 4600 diaspora.service@mfa.gov.et
                </h1>
              </div>
              <div className="w-[30%]">
                <h1 className="text-[18px] font-semibold pb-2">Address</h1>
                <hr className="" />
                <h1 className="text-[16px] font-normal  pt-3">
                  Bloom Tower 5th & 6th floor. Kazanchis, Addis Ababa,
                </h1>
              </div>
              <div className="w-[25%]  ">
                <h1 className="text-[18px] font-semibold pb-2">
                  Working Hours
                </h1>
                <hr />
                <h1 className="text-[16px] font-normal pt-3">
                  Monday - Friday, 9:00 AM - 5:00 PM (EAT){" "}
                </h1>
              </div>
            </div>

            <div className="pb-12">
              <h1 className="text-[18px] font-semibold text-white pb-2 pt-14">
                Social Media
              </h1>
              <hr className="text-white w-[700px] pb-6" />
              <ul className="flex gap-12 text-white">
                <li className="text-[16px] font-normal">Facebook</li>
                <li className="text-[16px] font-normal">Twitter</li>
                <li className="text-[16px] font-normal">LinkedIn</li>
                <li className="text-[16px] font-normal">Instagram</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer