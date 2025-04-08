
import Image from "next/image";
import Card from "../components/Card";
import servicesData from "./servicesData";
// import Faq from "../components/Faq";
export default function  page  () {
  return (
    <section className="bg-[#F7F7F7]">
      {/* // section one */}
      <section className="w-[80%] m-auto mt-28 flex">
        <div className="w-[50%]">
          <h1 className="text-[16px] font-bold text-[#1E407B] pb-5 flex gap-3 items-center">
            <span>
              <Image src="/icon.png" alt="icon" width={71} height={18} />
            </span>
            Our Services
          </h1>
          <h2 className="text-[32px] font-medium text-[#11255A] leading-9 pb-4 w-[70%]">
            Empowering Connections: Tailored Services for the Ethiopian Diaspora
          </h2>
          <p className="text-[18px] font-normal text-[#11255A] w-[85%] leading-5">
            The Ethiopian Diaspora Service offers a range of tailored services
            to empower the Ethiopian diaspora and foster their connection with
            their homeland. Below is an overview of the services provided,
            including requirements and processes for access.
          </p>
        </div>
        <div className="w-[50%]">
          <Image src="/services.webp" alt="image" width={584} height={438} />
        </div>
      </section>
      {/* section two */}
      <section className="w-[80%] m-auto pt-28">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3">
          {servicesData.map((service) => (
            <Card
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              slug={service.slug}
            />
          ))}
        </div>
      </section>

      {/* section-three */}
      {/* <Faq /> */}
    </section>
  );
}
