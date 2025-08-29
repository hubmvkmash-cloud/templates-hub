import SmartButton from '../ui/Button/SmartButton';
import heroVideoWebm from '../../assets/video/heroVideo.webm';
import heroVideoMp4 from '../../assets/video/heroVideo.mp4';
import poster from '../../assets/images/poster.webp';

const Hero = () => {
  return (
    <section className="w-full relative lg:-mt-23 pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="flex justify-between gap-5.5 flex-col items-start 1xl:items-center 1xl:justify-center-safe max-h-full h-full">
        <div
          className="relative -mt-17 1xl:-mt-10.5 3xl:-mt-18 4xl:-mt-17 w-full h-screen overflow-hidden bg-[linear-gradient(to_top,_#080808_0%,_#080808_5%,_rgba(8,8,8,0.5)_100%)]"
          style={{
            backgroundImage:
              'url(https://cdn.builder.io/o/assets%2F72ae2a4d99034a3aa7809f652e4e761b%2F7f7cea3382cc4c2e8b7b35cc81cf3de5?alt=media&token=709b6b3b-1846-45e7-88db-17353e7cc803&apiKey=72ae2a4d99034a3aa7809f652e4e761b)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
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
