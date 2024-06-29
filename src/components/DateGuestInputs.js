import PropTypes from "prop-types";

const DateGuestInputs = ({ className = "", label }) => {
  return (
    <div
      className={`flex-1 rounded bg-white box-border flex flex-row items-center justify-between py-[15px] px-3 min-w-[93px] gap-[20px] text-left text-sm text-gray-200 font-roboto border-[1px] border-solid border-gainsboro ${className}`}
    >
      <div className="relative leading-[22px] inline-block mix-blend-normal min-w-[54px]">
        {label}
      </div>
      <div className="flex flex-row items-start justify-start">
        <img
          className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
          alt=""
          src="/calendartodayfilled.svg"
        />
      </div>
    </div>
  );
};

DateGuestInputs.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};

export default DateGuestInputs;
