import { useMemo } from "react";
import PropTypes from "prop-types";

const AmenitiesSection = ({
  className = "",
  mdilake,
  lakeside,
  tablertoolsKitchen2,
  kitchen,
  materialSymbolsnestCamIqO,
  securityCamerasOnProperty,
  ionwifi,
  wifi,
  propFlex,
}) => {
  const amenitiesSection1Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start py-0 pr-[22px] pl-0 box-border gap-[14px] min-w-[195px] text-left text-base text-dark font-archivo ${className}`}
      style={amenitiesSection1Style}
    >
      <div className="flex flex-row items-center justify-start gap-[10px]">
        <img
          className="h-[21px] w-5 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={mdilake}
        />
        <div className="relative inline-block min-w-[64px]">{lakeside}</div>
      </div>
      <div className="w-24 flex flex-row items-center justify-start gap-[10px]">
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
          alt=""
          src={tablertoolsKitchen2}
        />
        <div className="flex-1 relative">{kitchen}</div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
          loading="lazy"
          alt=""
          src={materialSymbolsnestCamIqO}
        />
        <div className="relative">{securityCamerasOnProperty}</div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[10px]">
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
          loading="lazy"
          alt=""
          src={ionwifi}
        />
        <div className="relative inline-block min-w-[27px]">{wifi}</div>
      </div>
    </div>
  );
};

AmenitiesSection.propTypes = {
  className: PropTypes.string,
  mdilake: PropTypes.string,
  lakeside: PropTypes.string,
  tablertoolsKitchen2: PropTypes.string,
  kitchen: PropTypes.string,
  materialSymbolsnestCamIqO: PropTypes.string,
  securityCamerasOnProperty: PropTypes.string,
  ionwifi: PropTypes.string,
  wifi: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
};

export default AmenitiesSection;
