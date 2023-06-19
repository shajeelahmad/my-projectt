import React from "react";

const Footer = () => {
  return (
    <>
      <section className="bg-[#222]">
        <div className="w-[90%] m-auto">
          <div className="md:flex pt-20">
            <div className="w-[25%] mr-3">
              <img src="/img/logo_footer.png" className="m-auto " alt="" />
            </div>
            <div className="md:w-[75%] pt-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-[20px] pl-2 lg:pl-5 w-[60%] md:w-[70%] border border-gray-300  focus:outline-none  "
              />
              <button className="bg-[#151515]  md:w-[30%]  place-self-center text-white text-lg font-semibold pb-[21px] pt-[19px] px-[3px] ">
                SUBSCRIBE
              </button>
            </div>
          </div>
          <div className="md:flex pb-10 lg:pb-20 pt-5 md:pt-10">
            <div className="lg:w-[25%] mr-3">
              <h3 className="text-xl md:text-lg lg:text-xl font-semibold pt-2 text-white">
                USEFUL LINK
              </h3>
              <ul className="text-white">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>testimonial</li>
                <li>Blog</li>
                <li>Contect</li>
              </ul>
            </div>
            <div className="md:w-[25%] mr-3">
              <h3 className="text-xl md:text-lg lg:text-xl font-semibold pt-2 text-white">NEWS</h3>
              <ul className=" text-white">
                <li>Account</li>
                <li>Chekout</li>
                <li>Login</li>
                <li>Register</li>
                <li>Shopping</li>
                <li>Widget</li>
              </ul>
            </div>
            <div className="md:w-[25%] mr-3">
              <h3 className="text-xl md:text-lg lg:text-xl font-semibold pt-2 text-white">COMPANY</h3>
              <ul className=" text-white">
                <li>Account</li>
                <li>Chekout</li>
                <li>Login</li>
                <li>Register</li>
                <li>Shopping</li>
                <li>Widget</li>
              </ul>
            </div>
            <div className="md:w-[25%]">
              <h3 className="text-xl md:text-lg font-semibold pt-2 text-white">
                CONTACT US
              </h3>
              <p className="pr-5 pb-2 text-white">
                <strong>ADDRESS:</strong> 28 White tower, Street Name New York
                City, USA
              </p>
              <p className="pr-5 pb-2 text-white">
                <strong>TELEPHONE:</strong> +91 987 654 3210
              </p>
              <p className="pr-5 pb-2 text-white">
                <strong>EMAIL:</strong> yourmain@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
