import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const SearchFlightsButton = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <button
      className={`cursor-pointer [border:none] py-4 px-5 bg-accent self-stretch rounded-md overflow-hidden flex flex-row items-start justify-center whitespace-nowrap hover:bg-mediumaquamarine ${className}`}
      onClick={onSearchFlightsButtonClick}
    >
      <div className="relative text-base tracking-[0.46px] leading-[26px] font-semibold font-archivo text-white text-center inline-block min-w-[121px]">
        Book this home
      </div>
    </button>
  );
};

SearchFlightsButton.propTypes = {
  className: PropTypes.string,
};

export default SearchFlightsButton;
