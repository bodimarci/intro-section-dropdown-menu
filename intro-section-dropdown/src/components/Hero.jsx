import React from "react";
import heroDesktop from "../assets/image-hero-desktop.png";
import heroMobile from "../assets/image-hero-mobile.png";
import audiophile from "../assets/client-audiophile.svg";
import databiz from "../assets/client-databiz.svg";
import maker from "../assets/client-maker.svg";
import meet from "../assets/client-meet.svg";

const Hero = () => {
  return (
    <main className='min-h-[90vh] sm:grid sm:grid-cols-1 sm:items-center sm:justify-center'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 sm:px-2'>
        <section className='order-last max-w-2xl sm:order-first'>
          <div className='lg:mt-36'>
            <h1 className='mt-8 text-center text-3xl font-[800] sm:mt-0 sm:text-left md:text-6xl lg:text-7xl'>
              Make <br className='hidden sm:block' />
              remote work
            </h1>
            <p className='my-4 mx-4 text-center text-medium-grey sm:mx-0 sm:py-10 sm:text-left'>
              Get your team in sync, no matter your location.{" "}
              <br className='hidden sm:block' /> Streamline processes, create
              team rituals, and <br className='hidden sm:block' /> watch
              productivity soar.
            </p>
            <div className="flex justify-center sm:justify-start sm:mt-0 mt-6">
                <button className=' rounded-xl border border-almost-black bg-almost-black px-4 py-2 text-almost-white duration-200 hover:bg-almost-white hover:text-almost-black'>
              Learn more
            </button>
            </div>
            
          </div>
          <div className='mt-12 max-w-[30rem] lg:mt-24'>
            <ul className='flex justify-between sm:mx-0'>
              <li>
                <img src={databiz} alt='' className='sm:scale-100 scale-75' />
              </li>
              <li>
                <img src={audiophile} alt='' className='sm:scale-100 scale-75' />
              </li>
              <li>
                <img src={meet} alt='' className='sm:scale-100 scale-75' />
              </li>
              <li>
                <img src={maker} alt='' className='sm:scale-100 scale-75' />
              </li>
            </ul>
          </div>
        </section>
        <section className='max-w-2xl md:px-8 lg:px-16'>
          <img src={heroDesktop} alt='' className='hidden sm:block lg:mt-4 ' />
          <img src={heroMobile} alt='' className='block sm:hidden' />
        </section>
      </div>
    </main>
  );
};

export default Hero;
