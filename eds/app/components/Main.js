
import Image from "next/image"
import Link from "next/link";
const Card = () => {
  return (
    <main>
      {/* firs section */}
      <section className=" bg-gray-200">
        <section className="w-[85%] mx-auto py-10 px-5 mt-5 flex justify-between ">
          <div>
            <h1 className="text-[#474747] text-[18px] font-bold pb-2 ">
              Connect With Your Roots
            </h1>
            <p className="text-[14px] text-[#474747] font-medium w-[70%] ">
              Learn how we’re building bridges between Ethiopia and its global
              community.
            </p>
          </div>
          <div>
            <h1 className="text-[#474747] text-[18px] font-bold pb-2  ">
              Connect With Your Roots
            </h1>
            <p className="text-[14px] text-[#474747] font-medium w-[70%] ">
              Learn how we’re building bridges between Ethiopia and its global
              community.
            </p>
          </div>
          <div>
            <h1 className="text-[#474747] text-[18px] font-bold pb-2 ">
              Connect With Your Roots
            </h1>
            <p className="text-[14px] text-[#474747] font-medium w-[70%] ">
              Learn how we’re building bridges between Ethiopia and its global
              community.
            </p>
          </div>
          <div>
            <h1 className="text-[#474747] text-[18px] font-bold pb-2 ">
              Connect With Your Roots
            </h1>
            <p className="text-[14px] text-[#474747] font-medium w-[70%] ">
              Learn how we’re building bridges between Ethiopia and its global
              community.
            </p>
          </div>
        </section>
      </section>

      {/* second section */}

      <section className="flex w-[75%] m-auto">
        <div className="pt-[58px]">
          <div>
            <h1 className="font-bold text-[16px] text-[#1E407B] pb-6">
              WHO WE ARE
            </h1>
          </div>
          <h1 className="text-[32px] font-medium text-[#1384B7] w-[70%] leading-tight pb-6">
            Fostering Global Unity for a Prosperous Ethiopia
          </h1>
          <p className="text-[16px] font-normal w-[80%]">
            Ethiopian Diaspora Services (EDS) is a dedicated institution
            bridging Ethiopia with its global Diaspora. Our mission is to
            empower Ethiopians abroad to contribute to the nation's development
            while nurturing cultural ties and fostering unity. EDS embodies the
            shared responsibility of building a united and prosperous Ethiopia
          </p>
        </div>
        <div className="pt-[58px]">
          <Image
            src="/flag.webp"
            alt="logo"
            width={793}
            height={622}
            layout="intrinsic"
            className="w-[1693px] h-[1422px] m-auto"
          />
        </div>
      </section>

      {/* Third section */}

      <section className="pt-[88px] w-[75%] m-auto ">
        <div>
          <h1 className="text-[16px] font-bold text-[#1E407B] text-center">
            OUR APPROACH
          </h1>
          <h1 className="text-[32px] font-medium text-center text-[#1384B7] pb-9">
            Building Bridges, Driving Progress
          </h1>
        </div>

        <div className="">
          <div className="flex gap-4 pb-6">
            <div className="relative">
              <Image
                src="/culture.webp"
                alt="Gallery Image 1"
                width={437}
                height={255}
                className=""
              />

              <div className="absolute top-0 left-0 text-white pt-[140px] pl-7">
                <h1 className="text-[32px] font-medium">Engagement</h1>
                <p className="text-[16px] font-medium w-[85%]">
                  Creating connections through cultural programs and transparent
                  communication.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/city.webp"
                alt="Gallery Image 2"
                width={624}
                height={255}
                className=""
              />

              <div className="absolute top-0 left-0 text-white pt-[140px] pl-7">
                <h1 className="text-[32px] font-medium">Empowerment</h1>
                <p className="text-[16px] font-medium w-[85%]">
                  Equipping Ethiopians abroad to actively shape Ethiopia's
                  future.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="relative">
              <Image
                src="/children.webp"
                alt="Gallery Image 3"
                width={624}
                height={255}
                className=""
              />

              <div className="absolute top-0 left-0 text-white pt-[140px] pl-7 ">
                <h1 className="text-[32px] font-medium ">Integration</h1>
                <p className="text-[16px] font-medium w-[60%]">
                  Fostering unity among generations and addressing global
                  realities.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/hand.webp"
                alt="Gallery Image 4"
                width={437}
                height={255}
                className=""
              />

              <div className="absolute top-0 left-0 text-white pt-[140px] pl-7">
                <h1 className="text-[32px] font-medium">Collaboration</h1>
                <p className="text-[16px] font-medium w-[85%]">
                  Working with local and international partners for sustained
                  progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section */}

      <section className="pt-[40px] w-[75%] m-auto">
        <div className="pb-[30px]">
          <h1 className="text-[16px] font-bold text-[#1E407B] text-center pb-[50px]">
            Diaspora Development Participation
          </h1>
          <h1 className="text-[32px] font-medium text-[#1384B7] mx-auto w-[50%] leading-tight">
            Impacting Ethiopia's Development Through the Power of the Diaspora
          </h1>
        </div>
        <div className="flex gap-44">
          <div>
            <h2 className="text-[52px] text-[#1E407B] font-bold pb-1">
              587.8M <span className="text-[18px] font-bold -ml-2 ">ETB</span>
            </h2>
            <p className="text-[18px] leading-5 font-medium text-[#514F6E] ">
              COVID-19 Prevention <br />
              <span className="pl-[40px]">Funding</span>
            </p>
          </div>
          <div>
            <h2 className="text-[52px] text-[#1E407B] font-bold pb-1">
              587.8M <span className="text-[18px] font-bold -ml-2 ">ETB</span>
            </h2>
            <p className="text-[18px] leading-5 font-medium text-[#514F6E] ">
              COVID-19 Prevention <br />
              <span className="pl-[40px]">Funding</span>
            </p>
          </div>
          <div>
            <h2 className="text-[52px] text-[#1E407B] font-bold pb-1">
              587.8M <span className="text-[18px] font-bold -ml-2 ">ETB</span>
            </h2>
            <p className="text-[18px] leading-5 font-medium text-[#514F6E] ">
              COVID-19 Prevention <br />
              <span className="pl-[40px]">Funding</span>
            </p>
          </div>
        </div>
        <div className="flex pt-10">
          <div className="m-auto ">
            <h2 className="text-[52px] text-[#1E407B] font-bold pb-1">
              587.8M <span className="text-[18px] font-bold -ml-2 ">ETB</span>
            </h2>
            <p className="text-[18px] leading-5 font-medium text-[#514F6E] ">
              COVID-19 Prevention <br />
              <span className="pl-[40px]">Funding</span>
            </p>
          </div>
          <div className="m-auto">
            <h2 className="text-[52px] text-[#1E407B] font-bold pb-1">
              587.8M <span className="text-[18px] font-bold -ml-2 ">ETB</span>
            </h2>
            <p className="text-[18px] leading-5 font-medium text-[#514F6E] ">
              COVID-19 Prevention <br />
              <span className="pl-[40px]">Funding</span>
            </p>
          </div>
        </div>
      </section>

      {/* six section  */}
      <section className="flex mt-24">
        <div className="bg-gradient-to-t from-[#184782] to-[#1384B7] w-[50%] ">
          <div className="text-white space-y-4 p-20  ">
            <h1 className="text-[16px] font-bold ">
              Diaspora Participation Opportunities
            </h1>
            <h1 className="text-[32px] font-medium">
              Your Journey, Your Impact
            </h1>
            <h1 className="text-[16px] font-normal pb-6">
              Be part of Ethiopia’s journey to a brighter future
            </h1>
            <div className="space-y-5">
              <div className="text-white border border-white  p-6 rounded-sm w-[95%] ">
                <h1 className="text-[24px] font-medium ">
                  Cultural Exchange Programs
                </h1>
                <h1 className="text-[16px]  font-normal">
                  Deepen your connection to Ethiopian heritage.
                </h1>
              </div>
              <div className="text-white border border-white  p-6 rounded-sm w-[95%]">
                <h1 className="text-[24px] font-medium ">
                  Tourism & Investment Projects
                </h1>
                <h1 className="text-[16px]  font-normal">
                  Explore opportunities to contribute to Ethiopia’s development.
                </h1>
              </div>
              <div className="text-white border border-white p-6 rounded-sm w-[95%]">
                <h1 className="text-[24px] font-medium ">Knowledge Transfer</h1>
                <h1 className="text-[16px]  font-normal">
                  Share expertise to modernize institutions and systems back
                  home.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <Image
            src="/coffee.webp"
            alt="coffee image"
            width={1440}
            height={720}
          />
        </div>
      </section>

      {/* section seven */}
      <section className=" pt-24 ">
        <div>
          <h1 className="text-[16px] font-bold text-[#1E407B] text-center">
            Community Highlights
          </h1>
          <h1 className="text-[32px] text-[#1384B7] font-medium text-center pb-10">
            Inspiring Stories, Shared Success
          </h1>
        </div>
        <div className="flex w-[75%] m-auto gap-11">
          <div className="">
            <div>
              <div>
                <Image
                  src="/women.webp"
                  alt="women image"
                  width={323}
                  height={237}
                  className="rounded-sm"
                />
              </div>
              <div className="bg-gradient-to-t from-[#184782] to-[#1384B7] w-[100%] rounded-sm text-white p-4 space-y-3">
                <h1 className="text-[24px] font-semibold leading-6">
                  Youth & Women Empowerment
                </h1>
                <p className="text-[16px] font-normal w-full">
                  Promoting leadership and engagement among future changemakers
                </p>
                <p className="text-[16px] font-normal pb-2.5">April 2024</p>
                <button className="bg-white text-[#1E407B] text-[20px] text-center mx-auto block px-[90px] py-2 rounded-b-md  font-bold">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <div>
                <Image
                  src="/women.webp"
                  alt="women image"
                  width={323}
                  height={237}
                  className="rounded-sm"
                />
              </div>
              <div className="bg-gradient-to-t from-[#184782] to-[#1384B7] w-[100%] rounded-sm text-white p-4 space-y-3">
                <h1 className="text-[24px] font-semibold leading-6">
                  Youth & Women Empowerment
                </h1>
                <p className="text-[16px] font-normal w-full">
                  Promoting leadership and engagement among future changemakers
                </p>
                <p className="text-[16px] font-normal pb-2.5">April 2024</p>
                <button className="bg-white text-[#1E407B] text-[20px] text-center mx-auto block px-[90px] py-2 rounded-b-md  font-bold">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <div>
                <Image
                  src="/women.webp"
                  alt="women image"
                  width={323}
                  height={237}
                  className="rounded-sm"
                />
              </div>
              <div className="bg-gradient-to-t from-[#184782] to-[#1384B7] w-[100%] rounded-sm text-white p-4 space-y-3">
                <h1 className="text-[24px] font-semibold leading-6">
                  Youth & Women Empowerment
                </h1>
                <p className="text-[16px] font-normal w-full">
                  Promoting leadership and engagement among future changemakers
                </p>
                <p className="text-[16px] font-normal pb-2.5">April 2024</p>
                <button className="bg-white text-[#1E407B] text-[20px] text-center mx-auto block px-[90px] py-2 rounded-b-md  font-bold">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-[18px] text-white  w-[20%] text-center mt-10 rounded-sm font-medium  bg-[#1384B7] p-5 m-auto">
          Explore Success Stories
        </h1>
      </section>
      {/* section eight */}
      <section className="bg-gradient-to-t from-[#11255A] to-[#184782] text-white">
        <div className="flex justify-center mt-20 pt-5">
          <h1 className="text-[16px] font-bold flex gap-5 text-center">
            <span className="">
              <Image src="/icon-3.png" width={71} height={18} />
            </span>{" "}
            Join the Movement
          </h1>
        </div>
        <h2 className="text-[32px] font-medium text-center py-8">
          Join a Global Network of Ethiopian Changemakers
        </h2>
        <p className="text-[18px] font-semibold text-center w-[40%] m-auto leading-5">
          Over 3 million Ethiopians across more than 80 countries are shaping
          Ethiopia’s future. Be part of this transformative journey.
        </p>
        <div>
          <div>
            <Image src="/map.webp" width={900} height={424}/>
          </div>
          <div></div>
        </div>
      </section>
      {/* section nine */}
      <section className="w-[85%] m-auto mt-20">
        <div className="pb-16 ">
          <h1 className="text-[16px] font-[bold] text-[#184782]">
            Testimonials
          </h1>
          <h1 className="text-[32px] font-medium text-[#1384B7] pb-3">
            Voices of connection & impact
          </h1>
          <h1 className="text-[18px] font-semibold">
            Hear from Ethiopian WorldWide who are building bridges and making a
            difference
          </h1>
        </div>

        <div className="flex gap-3">
          {/* first row of testimonial */}
          <div className="space-y-4">
            <div className=" w-[297px] h-[202px] bg-gradient-to-b from-[#1384B7] via-[#0E5F84] to-[#083A51] rounded-sm">
              <div>
                <p className="text-white p-5">
                  EDS gave me the tools to reconnect with my roots. It's
                  incredible to feel this close to home again
                </p>
                <div className="flex gap-20 ">
                  <div className="flex px-4  gap-4">
                    <Image
                      src="/person1.webp"
                      alt="person image"
                      width={32}
                      height={32}
                    />
                    <h1 className="text-white leading-4">
                      Amanuel G. <br /> Sweden
                    </h1>
                  </div>
                  <div className="">
                    <Image src="/SE.webp" width={27} height={27} />
                  </div>
                </div>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>

            {/* second testimonial */}
            <div className=" w-[297px] h-[261px] bg-gradient-to-b from-[#1384B7] via-[#0E5F84] to-[#083A51] rounded-sm">
              <div className="">
                <p className="text-white p-4">
                  Our Diaspora association worked with EDS to launch a clean
                  water project in our hometown. The partnership was seamless,
                  and now over 1,000 families have access to safe drinking
                  water. It’s truly life-changing.
                </p>
                <div className="flex gap-20 ">
                  <div className="flex px-4  gap-4">
                    <Image
                      src="/person1.webp"
                      alt="person image"
                      width={32}
                      height={32}
                    />
                    <h1 className="text-white leading-4">
                      Amanuel G. <br /> Sweden
                    </h1>
                  </div>
                  <div className="">
                    <Image src="/SE.webp" width={27} height={27} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* second row testimonial */}
          <div className="my-auto">
            <div className=" w-[297px] h-[381px] bg-gradient-to-b from-[#1384B7] via-[#0E5F84] to-[#083A51] rounded-sm ">
              <div>
                <p className="text-white text-[15px] font-normal p-5">
                  Being part of the Cultural Exchange Program was the most
                  enriching experience of my life. I visited Ethiopia for the
                  first time in 15 years and had the chance to share my skills
                  as an engineer with young professionals in Bahir Dar. Not only
                  did I contribute to a meaningful project, but I also
                  rediscovered my heritage in a way that’s hard to put into
                  words. This program has deepened my pride in being Ethiopian.
                </p>
                <div className="flex gap-20 ">
                  <div className="flex gap-4 px-4">
                    <Image
                      src="/person1.webp"
                      alt="person image"
                      width={32}
                      height={32}
                    />
                    <h1 className="text-white leading-4 text-[14px] font-normal">
                      Amanuel G. <br /> Sweden
                    </h1>
                  </div>
                  <div className="">
                    <Image src="/SE.webp" width={27} height={27} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* third row testimonial */}
          <div className="space-y-4">
            <div className=" w-[297px] h-[202px] bg-gradient-to-b from-[#1384B7] via-[#0E5F84] to-[#083A51] rounded-sm">
              <div>
                <p className="text-white p-5">
                  EDS gave me the tools to reconnect with my roots. It's
                  incredible to feel this close to home again
                </p>
                <div className="flex gap-20 ">
                  <div className="flex px-4  gap-4">
                    <Image
                      src="/person1.webp"
                      alt="person image"
                      width={32}
                      height={32}
                    />
                    <h1 className="text-white leading-4">
                      Amanuel G. <br /> Sweden
                    </h1>
                  </div>
                  <div className="">
                    <Image src="/SE.webp" width={27} height={27} />
                  </div>
                </div>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>

            {/* second testimonial */}
            <div className=" w-[297px] h-[261px] bg-gradient-to-b from-[#1384B7] via-[#0E5F84] to-[#083A51] rounded-sm">
              <div className="">
                <p className="text-white p-4">
                  Our Diaspora association worked with EDS to launch a clean
                  water project in our hometown. The partnership was seamless,
                  and now over 1,000 families have access to safe drinking
                  water. It’s truly life-changing.
                </p>
                <div className="flex gap-20 ">
                  <div className="flex px-4  gap-4">
                    <Image
                      src="/person1.webp"
                      alt="person image"
                      width={32}
                      height={32}
                    />
                    <h1 className="text-white leading-4">
                      Amanuel G. <br /> Sweden
                    </h1>
                  </div>
                  <div className="">
                    <Image src="/SE.webp" width={27} height={27} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* fourth row testimonial */}
          <div className="my-auto">
            <div className=" w-[297px] h-[381px] bg-gradient-to-b from-[#1384B7] via-[#0E5F84] to-[#083A51] rounded-sm ">
              <div>
                <p className="text-white text-[15px] font-normal p-5">
                  Being part of the Cultural Exchange Program was the most
                  enriching experience of my life. I visited Ethiopia for the
                  first time in 15 years and had the chance to share my skills
                  as an engineer with young professionals in Bahir Dar. Not only
                  did I contribute to a meaningful project, but I also
                  rediscovered my heritage in a way that’s hard to put into
                  words. This program has deepened my pride in being Ethiopian.
                </p>
                <div className="flex gap-20 ">
                  <div className="flex gap-4 px-4">
                    <Image
                      src="/person1.webp"
                      alt="person image"
                      width={32}
                      height={32}
                    />
                    <h1 className="text-white leading-4 text-[14px] font-normal">
                      Amanuel G. <br /> Sweden
                    </h1>
                  </div>
                  <div className="">
                    <Image src="/SE.webp" width={27} height={27} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" pt-24 ">
        <div className="w-[85%] m-auto">
          <h1 className="text-[16px] font-bold text-[#184782] ">News</h1>
          <h1 className="text-[32px] text-[#1384B7] font-medium">
            Stay Updated With EDS
          </h1>
          <h1 className="text-[18px] font-semibold pt-3 ">
            Your trusted source for news, events, and stories connecting
            Ethiopia and its global community.
          </h1>
        </div>
        <div className="flex w-[85%] m-auto gap-5 mt-10 ">
          <div>
            <div>
              <Image
                src="/women.webp"
                alt="women image"
                width={287}
                height={237}
                className="rounded-sm"
              />
            </div>
            <div className="bg-gradient-to-t from-[#184782] to-[#1384B7] p-4 rounded-sm text-white space-y-3 w-[287px] h-[267px]">
              <h1 className="text-[24px] font-semibold leading-6">
                Youth & Women Empowerment
              </h1>
              <p className="text-[16px] font-normal w-full">
                Promoting leadership and engagement among future changemakers
              </p>
              <p className="text-[16px] font-normal pb-2.5">April 2024</p>
              <button className="bg-white text-[#1E407B] text-[20px] text-center block mx-auto w-[260px] py-2  rounded-b-md  font-bold">
                Read More
              </button>
            </div>
          </div>

          <div>
            <div>
              <Image
                src="/women.webp"
                alt="women image"
                width={287}
                height={237}
                className="rounded-sm"
              />
            </div>
            <div className="bg-gradient-to-t from-[#184782] to-[#1384B7] p-4 rounded-sm text-white space-y-3 w-[287px] h-[267px]">
              <h1 className="text-[24px] font-semibold leading-6">
                Youth & Women Empowerment
              </h1>
              <p className="text-[16px] font-normal w-full">
                Promoting leadership and engagement among future changemakers
              </p>
              <p className="text-[16px] font-normal pb-2.5">April 2024</p>
              <button className="bg-white text-[#1E407B] text-[20px] text-center block mx-auto w-[260px] py-2  rounded-b-md  font-bold">
                Read More
              </button>
            </div>
          </div>

          <div>
            <div>
              <Image
                src="/women.webp"
                alt="women image"
                width={287}
                height={237}
                className="rounded-sm"
              />
            </div>
            <div className="bg-gradient-to-t from-[#184782] to-[#1384B7] p-4 rounded-sm text-white space-y-3 w-[287px] h-[267px]">
              <h1 className="text-[24px] font-semibold leading-6">
                Youth & Women Empowerment
              </h1>
              <p className="text-[16px] font-normal w-full">
                Promoting leadership and engagement among future changemakers
              </p>
              <p className="text-[16px] font-normal pb-2.5">April 2024</p>
              <button className="bg-white text-[#1E407B] text-[20px] text-center block mx-auto w-[260px] py-2  rounded-b-md  font-bold">
                Read More
              </button>
            </div>
          </div>

          <div>
            <div>
              <Image
                src="/women.webp"
                alt="women image"
                width={287}
                height={237}
                className="rounded-sm"
              />
            </div>
            <div className="bg-gradient-to-t from-[#184782] to-[#1384B7] p-4 rounded-sm text-white space-y-3 w-[287px] h-[267px]">
              <h1 className="text-[24px] font-semibold leading-6">
                Youth & Women Empowerment
              </h1>
              <p className="text-[16px] font-normal w-full">
                Promoting leadership and engagement among future changemakers
              </p>
              <p className="text-[16px] font-normal pb-2.5">April 2024</p>
              <button className="bg-white text-[#1E407B] text-[20px] text-center block mx-auto w-[260px] py-2  rounded-b-md  font-bold">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

 
export default Card