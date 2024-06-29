import ReviewCard from "./ReviewCard";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-[50px] box-border max-w-full text-left text-5xl text-dark font-archivo mq750:pl-[25px] mq750:pr-[25px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <h3 className="m-0 relative text-inherit tracking-[0.02em] font-semibold font-inherit inline-block min-w-[98px] mq450:text-lgi">
            Reviews
          </h3>
          <a className="[text-decoration:none] relative text-base tracking-[0.46px] leading-[26px] font-semibold text-accent text-center inline-block min-w-[60px]">
            View all
          </a>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full text-base">
          <ReviewCard
            reviewerAvatar="/ellipse-12@2x.png"
            johnnyCash="Johnny Cash"
            june2023="June 2023"
            reviewContent="5.0"
            michellesPlaceWasSoGreatA="Michelle’s place was so great and definitely the perfect place for our long weekend. The lake is amazing!"
          />
          <ReviewCard
            reviewerAvatar="/ellipse-12-1@2x.png"
            johnnyCash="Yuta Watanabe"
            june2023="May 2023"
            reviewContent="4.5"
            michellesPlaceWasSoGreatA="The location is perfect. I love the lake so much!!! This is one of the best stays we had for a while. Definitely recommended."
          />
          <ReviewCard
            reviewerAvatar="/ellipse-12-2@2x.png"
            johnnyCash="Shane Willis"
            june2023="December 2022"
            reviewContent="4.8"
            michellesPlaceWasSoGreatA="A great place overall. One of the nicest place in town for sure. I will come back in the next few months with my family :)"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
