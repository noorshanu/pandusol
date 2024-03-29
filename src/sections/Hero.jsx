function Hero() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#8af031] h-auto sm:h-[80vh] ">
      <div className="container-wrapper flex flex-col sm:flex-row  justify-between items-center  lg:drop-shadow-[0_0_10rem_white] mt-4 sm:mt-[8rem] ">
      

   
        <div className="  mt-4 sm:mt-8 w-full">
         
          <h1 className=" text-[#000000] font-bold text-2xl sm:text-3xl lg:text-4xl font-dream uppercase pb-2  max-w-4xl ">
            {" "}
            Welcome  BabyPanda:  The cutest  BabyPanda on Solana! 
{" "}
          </h1>
          <p className=" max-w-3xl  text-[#000000] text-xl ">
          BabyPanda is the coolest gang on Solana! It is all about energy, style, and fun in the crypto jungle. Get ready for wild adventures with our NFTs, gaming, and daily dose of cute memes!
          
          </p>
          <a href="https://solscan.io/token/EKvoMQ3pEEBrYWU34NqU2cFbcBJ6tMWhmRmSM2FcNrd1" target="_BLANK" className="max-w-3xl  text-[#000000] font-medium text-base  sm:text-xl mx-auto my-2">
            Contract : HRYoknjrwqB7HBCGoMC7CJnMWvYPadsMFQk7i5HBTzNW
          </a>
          <div className=" hidden   sm:flex  justify-center items-center gap-6 mt-7 sm:mt-8">
            <div className=" relative">
              <a
                href="https://raydium.io/"
                target="_blank"
                className="  btn-main  font-bold text-sm sm:text-xl rounded-full px-12 py-2"
              >
                Trade
              </a>
            </div>

      
          </div>

     
        </div>

        <div className=" relative z-20 w-full">
          <img
            src="images/star2.png"
            alt=""
            className="floating  absolute top-[20%] sm:top-[46%] left-3 sm:left-[10%] w-auto h-[80px] "
          />
          <img
            src="images/bam.png"
            alt=""
            className="floating  absolute top-4 sm:top-[46%] right-[10%] w-auto h-[130px] "
          />

          <img
            src="/images/hero.png"
            className="w-full lg:w-[70%] lg:h-full   mx-auto "
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
