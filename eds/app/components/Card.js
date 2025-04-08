 
import Image from "next/image";
import Link from "next/link";

const Card = ({ title, description, image, slug }) => {
  return (
    <section className="pt-14">
      <div>
        <Image src={image} alt={title} width={352} height={255} />
      </div>
      <div className="bg-[#11255A] w-[352px] h-[256px] p-4 space-y-3">
        <h1 className="text-[24px] font-medium text-white">{title}</h1>
        <h2 className="text-[15px] text-white font-normal">{description}</h2>
        <Link href={`/services/${slug}`}>
          <button className="text-[16px] font-normal text-white flex gap-32 items-center pt-11">
            LEARN MORE
            <span>
              <Image src="/Arrow.png" alt="arrow" width={40} height={0} />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Card;
