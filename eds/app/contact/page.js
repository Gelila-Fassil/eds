
import Image from "next/image";
const page = () => {
  return (
    <section className="w-[85%] m-auto mt-28">
      <section className="bg-white flex  p-2">
        <div className="bg-gradient-to-b from-[#1E407B] to-[#11255A] w-[40%] p-11 text-white rounded-lg ">
          <h1 className="text-[32px] font-semibold">Contact Information</h1>
          <h1 className="text-[18px] font-normal pb-10">
            Stay Connected, We're Here to Help.
          </h1>
          <div className="space-y-12">
            <h1 className="items-center gap-7 text-[16ox] font-normal flex">
              <span>
                <Image src="/phone.png" width={17.81} height={17.81} />
              </span>
              011 554 4600
            </h1>
            <h1 className="items-center gap-7 text-[16ox] font-normal flex">
              <span>
                <Image src="/email.png" width={20} height={16} />
              </span>
              diaspora.service@mfa.gov.et
            </h1>
            <h1 className="items-center gap-7 text-[16px] font-normal flex w-[85%]">
              <span>
                <Image src="/location.png" width={56.5} height={31} />
              </span>
              Addis Ababa, Kazanchis. Between Intercontinental and Jupiter
              International Hotels. Located in Bloom Tower @5th & 6th floor,
              Addis Ababa, Ethiopia
            </h1>
          </div>
          <div className=" flex justify-end h-[250px] overflow-hidden -mt-3">
            <Image
              src="/logo-2.png"
              width={258}
              height={150}
              className="mt-5"
            />
          </div>
        </div>
        <div className="w-[60%]">
          <form className="p-7 pt-14">
            <div className="flex gap-8">
              {/* First Name */}
              <div className="flex flex-col w-1/2">
                <label
                  htmlFor="firstName"
                  className="mb-1 text-sm text-gray-700 text-[16px] font-medium"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  className="border-b border-gray-400 focus:outline-none focus:border-black bg-transparent py-1"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col w-1/2">
                <label
                  htmlFor="lastName"
                  className="mb-1 text-sm text-gray-700 text-[16px] font-medium"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  className="border-b border-gray-400 focus:outline-none focus:border-black bg-transparent py-1"
                  required
                />
              </div>
            </div>
            <div className="flex gap-8 mt-11">
              {/* email */}
              <div className="flex flex-col w-1/2">
                <label
                  htmlFor="email"
                  className="mb-1 text-sm text-gray-700 text-[16px] font-medium"
                >
                  Email
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  className="border-b border-gray-400 focus:outline-none focus:border-black bg-transparent py-1"
                  required
                />
              </div>

              {/*Phone Number */}
              <div className="flex flex-col w-1/2">
                <label
                  htmlFor="lastName"
                  className="mb-1 text-sm text-gray-700 text-[16px] font-medium"
                >
                  Phone Number
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  className="border-b border-gray-400 focus:outline-none focus:border-black bg-transparent py-1"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col mt-14">
              <label className=" text-sm text-gray-700 text-[16px] font-medium">
                Subject
              </label>
              <textarea
                name="subject"
                placeholder=""
                className="border-b border-gray-400 focus:outline-none focus:border-black bg-transparent "
                required
              ></textarea>
            </div>
            <div className="flex flex-col mt-14">
              <label className=" text-sm text-gray-700 text-[16px] font-medium">
                Message
              </label>
              <textarea
                name="subject"
                placeholder=""
                className="border-b border-gray-400 focus:outline-none focus:border-black bg-transparent "
                required
              ></textarea>
            </div>

            <div className="flex justify-end mt-7">
              <button
                type="submit"
                className="bg-[#184782] text-white px-7 py-2 rounded"
              >
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
}

export default page