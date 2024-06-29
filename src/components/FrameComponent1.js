import StayCard from "./StayCard";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-[50px] box-border max-w-full text-left text-5xl text-dark font-archivo mq750:pl-[25px] mq750:pr-[25px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <h3 className="m-0 relative text-inherit tracking-[0.02em] font-semibold font-inherit mq450:text-lgi">
            Similar stays
          </h3>
          <a className="[text-decoration:none] relative text-base tracking-[0.46px] leading-[26px] font-semibold text-accent text-center inline-block min-w-[60px]">
            View all
          </a>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full text-xs text-accent">
          <StayCard
            brightwoodsEstate="Missisuaga Aistream"
            bridlepathOntarioCanada="Missisauga, Ontario, Canada"
          />
          <StayCard
            brightwoodsEstate="Urban Loft"
            bridlepathOntarioCanada="Urban Loft"
          />
          <StayCard
            brightwoodsEstate="Forestville Cottages"
            bridlepathOntarioCanada="Simcoe, Ontario Canada"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
