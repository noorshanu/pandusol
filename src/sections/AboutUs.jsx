import React from "react";
// import { FaTelegram } from "react-icons/fa";

function AboutUs() {
  return (
    <div className=" container-wrapper  px-4 ">
   

      <div className="flex flex-col justify-center  big-info__inner items-center px-4 border-[#a1ff3c] border ">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className=" max-w-xl text-4xl font-medium text-center font-ninja text-[#a1ff3c] p-4">
            Join our community
          </h1>
          <p className="text-lg font-medium text-[white] text-center p-2">
              By Buying  Samuria Panda , you become a part of the community. You're not just a fan, <br />you're a support
              , a patron, apart of the creator's journey. we're more than just a coin – we're a movement!
            </p>
        </div>
            {/* <a target="_blank" href="https://t.me/kingpepeso mb-5">
                        <FaTelegram fontSize="34px" fill="#a1ff3c" />
                      </a> */}
        <div className="mt-5 mb-10">
          <a
            href="https://t.me/sumaripanda"
            className="mb-5 text-base py-2 uppercase font-ninja px-10 rounded-full bg-gradient-to-b from-[#a1ff3c] to-[#C9A900] shadow-lg shadow-black/40 text-black  font-bold border border-yellow"
          >
            join telegram
          </a>
        </div>

        {/* <div>
          <img src="images/about.png" alt="" className=" h-[350px]" />
        </div> */}
      </div>
    </div>
  );
}

export default AboutUs;
