import PropTypes from "prop-types";

const DetailsCard = ({
  className = "",
  frame65,
  dedicatedWorkspace,
  aPrivateRoomEquippedWithW,
}) => {
  return (
    <div
      className={`flex flex-row items-center justify-start gap-[20px] text-left text-lg text-dark font-archivo mq450:flex-wrap ${className}`}
    >
      <img
        className="h-[60px] w-[60px] relative rounded-lg overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={frame65}
      />
      <div className="flex flex-col items-start justify-start gap-[2px]">
        <div className="relative tracking-[0.02em] leading-[150%] font-semibold">
          {dedicatedWorkspace}
        </div>
        <div className="relative text-base tracking-[0.02em] text-gray-300">
          {aPrivateRoomEquippedWithW}
        </div>
      </div>
    </div>
  );
};

DetailsCard.propTypes = {
  className: PropTypes.string,
  frame65: PropTypes.string,
  dedicatedWorkspace: PropTypes.string,
  aPrivateRoomEquippedWithW: PropTypes.string,
};

export default DetailsCard;
