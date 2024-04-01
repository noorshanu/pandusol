function Hero() {
  return (
    <section className=" py-6">
      <div className="container-wrapper">
        <div className="relative z-50">
          <h4 className="mt-4 text-2xl text-center font-ninja text-[#a1ff3c]">
            Samuria Panda : The Legendary Solana Sensation!
          </h4>

          <div className=" flex justify-between flex-col sm:flex-row items-center ">
            <div className=" w-full">
              <h1 className=" font-ninja text-5xl my-4"> Samuria Panda </h1>

              <p className=" text-base sm:text-xl">
                Welcome to the whimsical world of Samurai Panda, where cuteness
                meets warrior spirit, and memes collide with trading prowess.
                Join us as a lovable panda leads a community on a mission to
                revolutionize the Solana meme world.
              </p>
              <p className=" text-base sm:text-xl py-2">
              Samurai Panda Power combines Meme with Profit! With lightning speed, unbeatable strength,
                boundless energy, and a charm that'll make even the toughest
                whales swoon, Samuria Panda is here to take the Solana community
                to the moon and beyond!
              </p>
              <div className="relative z-40 flex items-center justify-start my-4 max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
                <a
                  href="#"
                  target="_blank"
                  className="py-2 text-base uppercase font-ninja px-10 rounded-full bg-gradient-to-b from-[#000000] to-[#2B0000] shadow-lg shadow-black/40 text-white  font-bold border border-white"
                >
                DexTools
                </a>
                <a
                  href="https://t.me/sumaripanda"
                  className="text-base py-2 uppercase font-ninja px-10 rounded-full bg-gradient-to-b from-[#a1ff3c] to-[#C9A900] shadow-lg shadow-black/40 text-black  font-bold border border-yellow"
                >
                  Join telegram
                </a>
              </div>
            </div>

            <div className=" w-full">
              <div>
                <img src="images/hero.png" alt="" className=" mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
