import Navbar from "./components/Navbar";
import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";
import Meme from "./sections/Meme";
import { FaTwitter, FaTelegram } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";

function AppLayout() {
  return (
    <>
      <Navbar />
      <main className=" pt-2 bg-main">
        <Hero />
      </main>
      <div className=" h-[70px] border-t-2 border-b-2 py-4 border-[#751717] mb-2 ">
        <a
          href="https://dexscreener.com/solana/8sbxpgx32jsm4prxwpvcxzmaxfthuc6xjtb8jq7o6d8j"
          target="_blank"
          className="my-2 flex justify-center text-base text-center text-white  sm:text-xl"
        >
          {" "}
          Contract : 8sbxpgx32jsm4prxwpvcxzmaxfthuc6xjtb8jq7o6d8j
        </a>
      </div>
      <div>
        <Meme />
        <div className=" mt-4">
          <AboutUs />
        </div>

        {/* <div className="container-wrapper mt-8">
          <div className=" flex items-center justify-center gap-2">
            <img
              src="/images/logo.png"
              className="max-w-[7rem] w-full rounded-full"
              alt=""
            />

            <p className=" text-2xl font-medium">KingPepe</p>
          </div>
        </div> */}
      </div>
      <footer className=" w-full pb-8 font-ninja">
        <div className="container-wrapper mt-8 ">
          <div className="flex justify-between">
            <div className="mt-8 flex items-center justify-center gap-2">
              <img
                src="/images/logo.png"
                className="max-w-[4rem] w-full rounded-full"
                alt=""
              />

              <p className=" text-2xl font-ninja"> Samuria Panda </p>
              <div className="ml-10 flex justify-center items-center ">
                <ul className="flex gap-4">
                  <li>Home</li>
                  <li>Products</li>
                  <li>FAQS</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-xl [&_a:hover]:opacity-70">
              <a target="_blank" href="https://twitter.com/samurai9_">
              <FaTwitter />
            </a>
            <a target="_blank" href="https://t.me/sumaripanda">
              <FaTelegram />
            </a>
              </div>

              <button className="text-2xl lg:hidden">
                <IoMenu />
              </button>
            </div>
          </div>

          <div className="border-b border-[grey] my-5" />
        </div>
      </footer>
    </>
  );
}

export default AppLayout;
