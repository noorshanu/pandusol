import React from "react";

function Meme() {
  return (
    <div className=" container-wrapper py-4 px-4 mx-auto">
      <h2 className=" text-3xl  font-ninja text-center py-4">
        Our Product
      </h2>

      <div className=" flex items-center gap-4 justify-between flex-col sm:flex-row">
        <div className=" rounded-xl border border-[#a1ff3c] w-[370px] h-full  text-center p-4">
          <div>
            <p className="font-ninja text-xl">Cute Warrior Panda Meme</p>
          </div>

          <div className="w-[270px] mx-auto py-2  border-none rounded-2xl overflow-hidden">
            <img src="images/meme1.jpeg" alt="" className="" />
          </div>

          <div className="ml-2 flex justify-center items-center">
            <p className="capitalize">
            At the heart of Samurai Panda's universe lies its viral cute warrior panda meme – a symbol of strength, resilience, and community. Our memes spread joy and camaraderie across the Solana ecosystem.
            </p>
          </div>
        </div>

        <div className=" rounded-xl border border-[#a1ff3c] w-[370px] h-full  text-center p-4">
          <div>
            <p className="font-ninja text-xl">Trading Bot</p>
          </div>

          <div className="w-[270px] py-2 mx-auto border-none rounded-2xl overflow-hidden">
            <img src="images/meme2.jpeg" alt="" className="" />
          </div>

          <div className="ml-2 flex justify-center items-center">
            <p className="capitalize">
            Navigate the crypto trading world with Samurai Panda's cutting-edge trading bot. Powered by AI and expert market knowledge, it maximizes profits while minimizing risks for traders of all levels.
              
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-[#a1ff3c] w-[370px] h-full  text-center p-4">
          <div>
            <p className=" font-ninja text-xl">High Staking Rewards</p>
          </div>

          <div className="w-[270px] py-2 mx-auto border-none rounded-2xl overflow-hidden">
            <img src="images/meme3.jpeg" alt="" className="" />
          </div>

          <div className="ml-2 flex justify-center items-center">
            <p className="capitalize">
            Join us on an adventure and earn generous staking rewards as Samurai Panda gives back to its loyal community. Stake your tokens and secure the future of our ecosystem.
            </p>
          </div>
        </div>

        {/* <div className="flex flex-col flex-wrap justify-center items-center overflow-hidden rounded-xl border border-[#a1ff3c] w-[270px]">
          <div>
            <p className=" font-ninja">Ninja Meme madness!</p>
          </div>

          <div className="w-[250px] mb-10 border-none rounded-2xl overflow-hidden">
            <img src="images/meme4.jpeg" alt="" className="" />
          </div>

          <div className="ml-2 flex justify-center items-center">
            <p className="capitalize">
              Battle and Panda Ninja's memes will go viral! Prepare for a
              whirlwind of laughter, chaos, and pure meme magic. Our meme
              madness knows no bounds – join the fun and let the memes take you
              on a wild ride!
            </p>
          </div>
        </div> */}
        {/*         
        <img
          src="images/meme2.jpeg"
          alt=""
          className=" rounded-xl border border-[#fed403] h-[350px]"
        />
        <img
          src="images/meme3.jpeg"
          alt=""
          className=" rounded-xl border border-[#fed403] h-[350px]"
        /> */}
      </div>
    </div>
  );
}

export default Meme;
