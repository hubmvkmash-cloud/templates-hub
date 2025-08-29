import SmartButton from '../ui/Button/SmartButton';

const Hero = () => {
  return (
    <section className="w-full relative lg:-mt-23 pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="flex justify-between gap-5.5 flex-col items-start 1xl:items-center 1xl:justify-center-safe max-h-full h-full">
        <div className="relative -mt-17 1xl:-mt-10.5 3xl:-mt-18 4xl:-mt-17 w-full h-screen overflow-hidden bg-    [linear-gradient(to_top,_#080808_0%,_#080808_5%,_rgba(8,8,8,0.5)_100%)]">
                    <div className="flex flex-col relative mt-5 w-full min-h-[20px] min-w-[20px]">
              <div className="relative">
                <div className="w-full pt-[70.04048582995948%] pointer-events-none text-[0]" />
                <video
                  className="absolute top-0 left-0 z-[-1] w-full h-full object-cover"
                  poster="https://cdn.builder.io/api/v1/image/assets%2F72ae2a4d99034a3aa7809f652e4e761b%2Fd3c5231fe73a4327aa058cc3507b8b7c"
                  autoPlay
                  muted
                  playsInline
                  loop
                >
                  <source
                    type="video/mp4"
                    src="https://cdn.builder.io/o/assets%2F72ae2a4d99034a3aa7809f652e4e761b%2F40b5eefcf3da4fda9afa0d6a2da75cfe%2Fcompressed?apiKey=72ae2a4d99034a3aa7809f652e4e761b&token=40b5eefcf3da4fda9afa0d6a2da75cfe&alt=media&optimized=true"
                />
                Ваш браузер не підтримує тег video.
                </video>
              </div>
            </div>

          {/* Контент поверх відео */}

          <div className="section flex flex-col justify-around lg:justify-center lg:items-center h-full">
            {/* <HiroTitle className="lg:flex flex-col items-center lg:mb-12 4xl:mb-8.5" /> */}
            <div className="lg:flex flex-col items-center lg:mb-12 4xl:mb-8.5">
              <h1 className="mt-25 1xl:mt-0 font-second text-[34px]/[1] mb-5.5 1xl:mb-3.5  1xl:text-[64px]/[1] 3xl:text-[82px]/[1] 4xl:text-[94px]/[1] font-medium text-gallery-white">
                <span className="text-tangerine">Smart</span> Locker HUB
              </h1>
              <p className="text-base/[137%] xs:text-[18px]/[122%] 4xl:text-[22px] font-normal text-alto-white max-w-69 lg:max-w-125 text-left lg:text-center">
                Реалізація комплекса послуг та задоволення потреб населення в
                одному рішенні
              </p>
            </div>

            <SmartButton
              label="Рішення для бізнесу"
              icon="/images/svg/icons.svg#icon-arrow-up-right"
              iconClassName="w-4.5 h-4.5 ml-16"
              iconStroke="currentColor"
              iconPosition="right"
              href="#provides"
              className="lg:inline-flex ml-auto lg:ml-0 4xl:text-[20px]/[1]"
            />

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
