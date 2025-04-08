

import Link from "next/link"
const Header = () => {
  return (
    <header className=" w-[85%] flex justify-between py-5 mx-auto bg-white px-5 rounded-md mt-5">
       <section>
        {/* <Image src="https://via.placeholder.com/150" alt="logo" /> */}
        <h1>Logo</h1>

       </section>
       <section className=" space-x-10">

        <Link href="/" className="text-[16px] text-[#184782] font-normal">Home</Link>
        <Link href="/about" className="text-[16px] text-[#184782] font-normal" >About</Link>
        <Link href="/services" className="text-[16px] text-[#184782] font-normal">Services</Link>
        <Link href="/News and Events" className="text-[16px] text-[#184782] font-normal">News and Events</Link>
        <Link href="/resoures" className="text-[16px] text-[#184782] font-normal">Resources</Link>
        <button className="bg-[#1384B7] text-white px-5 py-1 rounded-md font-semibold text-[16px]">
            <Link href="/contact">Contact Us</Link>
        </button>

       </section>


        
    </header>
  )
}

export default Header