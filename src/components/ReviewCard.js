import PropTypes from "prop-types";

const ReviewCard = ({
  className = "",
  reviewerAvatar,
  johnnyCash,
  june2023,
  reviewContent,
  michellesPlaceWasSoGreatA,
}) => {
  return (
    <div
      className={`flex-1 rounded-lg box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-[12px] min-w-[350px] max-w-full text-left text-base text-dark font-archivo border-[1px] border-solid border-light-grey-border mq750:min-w-full ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <img
            className="h-16 w-16 relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src={reviewerAvatar}
          />
          <div className="flex flex-col items-start justify-start gap-[3px]">
            <div className="relative tracking-[0.02em] leading-[150%] font-semibold inline-block min-w-[101px]">
              {johnnyCash}
            </div>
            <div className="relative text-sm tracking-[0.02em] text-gray-300 inline-block min-w-[69px]">
              {june2023}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start py-5 px-0 gap-[3px]">
          <div className="h-[11px] relative tracking-[0.02em] font-semibold flex items-center min-w-[25px]">
            {reviewContent}
          </div>
          <img className="h-4 w-4 relative" alt="" src="/vector-1.svg" />
        </div>
      </div>
      <div className="self-stretch relative tracking-[0.02em] leading-[160%]">
        {michellesPlaceWasSoGreatA}
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  className: PropTypes.string,
  reviewerAvatar: PropTypes.string,
  johnnyCash: PropTypes.string,
  june2023: PropTypes.string,
  reviewContent: PropTypes.string,
  michellesPlaceWasSoGreatA: PropTypes.string,
};

export default ReviewCard;
