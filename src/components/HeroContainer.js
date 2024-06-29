import DateGuestInputs from "./DateGuestInputs";
import PropTypes from "prop-types";

const HeroContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-21xl-4 text-black font-archivo ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start pt-[50px] px-20 pb-[30px] box-border bg-[url('/public/frame-38@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:pl-10 mq750:pr-10 mq750:box-border">
        <div className="w-full flex flex-col items-start justify-start gap-[24px] max-w-[1280px] mq1275:max-w-full">
          <div className="flex flex-col items-start justify-start gap-[8px] max-w-full">
            <b className="relative leading-[110%] inline-block max-w-full mq750:text-13xl mq750:leading-[36px] mq450:text-5xl mq450:leading-[27px]">
              <span>{`Find a `}</span>
              <span className="text-accent">host</span>
              <span> for every journey</span>
            </b>
            <h3 className="m-0 relative text-xl leading-[120%] font-light font-inherit mq450:text-base mq450:leading-[19px]">
              Discover the best local rental properties that fits your every
              travel needs
            </h3>
          </div>
          <div className="self-stretch shadow-[0px_6px_12px_rgba(0,_0,_0,_0.02)] rounded-3xs bg-white box-border flex flex-row items-center justify-start py-[9px] px-[11px] gap-[14px] max-w-full text-sm text-gray-200 font-roboto border-[0.7px] border-solid border-light-grey-border mq1275:flex-wrap">
            <div className="flex-[0.9558] rounded bg-white box-border flex flex-row items-center justify-start py-[15px] px-[11px] gap-[10px] min-w-[353px] max-w-full border-[1px] border-solid border-gainsboro mq750:min-w-full mq1275:flex-1">
              <input
                className="w-[calc(100%_-_47px)] [border:none] [outline:none] font-roboto text-sm bg-[transparent] h-[22px] flex-1 relative leading-[22px] text-black text-left flex items-center mix-blend-normal min-w-[150px] max-w-[calc(100%_-_35px)] p-0"
                placeholder="Accommodation"
                type="text"
              />
              <img
                className="h-[25px] w-[25px] relative overflow-hidden shrink-0 min-h-[25px]"
                alt=""
                src="/iconhome.svg"
              />
            </div>
            <div className="flex-1 flex flex-row items-center justify-start gap-[14px] min-w-[353px] max-w-full mq750:flex-wrap mq750:min-w-full mq1275:flex-1">
              <DateGuestInputs label="Check-in" />
              <DateGuestInputs label="Check-out" />
              <div className="flex-1 rounded bg-white box-border flex flex-row items-center justify-between py-[15px] px-3 min-w-[62px] gap-[20px] border-[1px] border-solid border-gainsboro">
                <input
                  className="w-[37px] [border:none] [outline:none] font-roboto text-sm bg-[transparent] h-[22px] relative leading-[22px] text-gray-200 text-left flex items-center mix-blend-normal p-0"
                  placeholder="Guest"
                  type="text"
                />
                <img
                  className="h-[25px] w-[25px] relative overflow-hidden shrink-0 min-h-[25px]"
                  alt=""
                  src="/iconuser.svg"
                />
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[15px] px-[30px] bg-accent rounded overflow-hidden flex flex-row items-center justify-center gap-[8px] hover:bg-lightseagreen-100">
              <img
                className="h-[19px] w-[19px] relative overflow-hidden shrink-0"
                alt=""
                src="/iconsearch.svg"
              />
              <div className="relative text-base tracking-[0.46px] leading-[26px] font-medium font-archivo text-white text-center inline-block min-w-[55px]">
                Search
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroContainer.propTypes = {
  className: PropTypes.string,
};

export default HeroContainer;
