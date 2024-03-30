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
            <p className="font-ninja text-xl">Telegram Games on  Samuria Panda</p>
          </div>

          <div className="w-[270px] mx-auto py-2  border-none rounded-2xl overflow-hidden">
            <img src="images/meme1.jpeg" alt="" className="" />
          </div>

          <div className="ml-2 flex justify-center items-center">
            <p className="capitalize">
              Where memes meet mayhem! Join our Telegram community for epic
              gaming adventures, challenges, and rewards that'll have you
              hopping with excitement!
            </p>
          </div>
        </div>

        <div className=" rounded-xl border border-[#a1ff3c] w-[370px] h-full  text-center p-4">
          <div>
            <p className="font-ninja text-xl">NFT Wonderland</p>
          </div>

          <div className="w-[270px] py-2 mx-auto border-none rounded-2xl overflow-hidden">
            <img src="images/meme2.jpeg" alt="" className="" />
          </div>

          <div className="ml-2 flex justify-center items-center">
            <p className="capitalize">
              Dive into the depths of meme mastery with  Samuria Panda epic NFT
              collection! Explore a wonderland of rare and hilarious NFTs
              
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-[#a1ff3c] w-[370px] h-full  text-center p-4">
          <div>
            <p className=" font-ninja text-xl">The Culture Coin of Solana</p>
          </div>

          <div className="w-[270px] py-2 mx-auto border-none rounded-2xl overflow-hidden">
            <img src="images/meme3.jpeg" alt="" className="" />
          </div>

          <div className="ml-2 flex justify-center items-center">
            <p className="capitalize">
                Samuria Panda  vibes are legendary, just like his memes! Become part
              of the Solana culture with  Samuria Panda by your side. From memes to
              community events.
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
              Battle and Frog Ninja's memes will go viral! Prepare for a
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
