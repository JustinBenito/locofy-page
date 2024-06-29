import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-base text-dark font-archivo ${className}`}
    >
      <div className="self-stretch bg-light-bg box-border flex flex-row flex-wrap items-start justify-center pt-[38px] px-20 pb-10 max-w-full border-t-[1px] border-solid border-light-grey-border mq750:pl-10 mq750:pr-10 mq750:box-border">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start max-w-[1280px] mq1275:max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start gap-[10px] max-w-full mq1275:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[14px] min-w-[315px] max-w-full">
              <div className="relative text-xl font-semibold inline-block min-w-[75px] mq450:text-base">
                Support
              </div>
              <div className="relative inline-block min-w-[85px]">
                Help Centre
              </div>
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[63px]">
                AirCover
              </a>
              <div className="relative">Combating discrimination</div>
              <div className="relative">
                Supporting people with disabilities
              </div>
              <div className="relative">Cencellation options</div>
              <div className="relative">Report neighbourhood concern</div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[14px] min-w-[315px] max-w-full">
              <div className="relative text-xl font-semibold inline-block min-w-[73px] mq450:text-base">
                Hosting
              </div>
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[83px]">
                Local home
              </a>
              <div className="relative inline-block min-w-[107px]">
                Cover for hosts
              </div>
              <div className="relative">Hosting resources</div>
              <div className="relative inline-block min-w-[128px]">
                Community forum
              </div>
              <div className="relative">Hosting responsibly</div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[14px] min-w-[315px] max-w-full">
              <div className="relative text-xl font-semibold inline-block min-w-[92px] mq450:text-base">
                Localhost
              </div>
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[78px]">
                Newsroom
              </a>
              <div className="relative inline-block min-w-[99px]">
                New Features
              </div>
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[57px]">
                Careers
              </a>
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[66px]">
                Investres
              </a>
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[69px]">
                Gift cards
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch box-border flex flex-col items-center justify-start pt-2.5 px-20 pb-3 max-w-full text-sm text-black border-t-[1px] border-solid border-light-grey-border mq750:pl-10 mq750:pr-10 mq750:box-border">
        <div className="w-full flex flex-row items-start justify-center max-w-[1280px] mq1275:max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-[1280px] gap-[20px] mq750:flex-wrap mq1275:max-w-full">
            <div className="relative leading-[17px] font-light">
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className="flex flex-row items-start justify-start gap-[20px] mq450:flex-wrap">
              <div className="relative leading-[17px] font-light inline-block min-w-[85px]">
                Privacy Policy
              </div>
              <div className="relative leading-[17px] font-light inline-block min-w-[120px]">{`Terms & Conditions`}</div>
              <div className="relative leading-[17px] font-light inline-block min-w-[67px]">
                Contact us
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
