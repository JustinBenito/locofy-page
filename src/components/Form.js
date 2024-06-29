import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Form = ({ className = "" }) => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <div
      className={`flex-1 bg-white flex flex-col items-start justify-start py-10 px-12 box-border gap-[37.2px] max-w-full text-left text-base text-dark font-archivo mq750:gap-[19px] mq750:py-[26px] mq750:px-6 mq750:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full shrink-0 text-7xl">
        <h2 className="m-0 self-stretch relative text-inherit tracking-[0.02em] font-bold font-inherit mq450:text-2xl">
          Sign in
        </h2>
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[26.7px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[15.7px] max-w-full">
              <div className="self-stretch rounded bg-white box-border overflow-hidden flex flex-row items-center justify-start py-3.5 px-[18px] gap-[9.4px] max-w-full border-[1px] border-solid border-gainsboro">
                <input
                  className="w-[calc(100%_-_56px)] [border:none] [outline:none] font-archivo text-base bg-[transparent] h-[17px] flex-1 relative tracking-[0.24px] text-light-text text-left flex items-center min-w-[150px] max-w-[calc(100%_-_29px)] p-0"
                  placeholder="Email address"
                  type="text"
                />
                <img
                  className="h-5 w-5 relative min-h-[20px]"
                  alt=""
                  src="/iconaccount.svg"
                />
              </div>
              <div className="self-stretch rounded bg-white box-border overflow-hidden flex flex-row items-center justify-start py-3.5 px-[18px] gap-[9.4px] max-w-full border-[1px] border-solid border-gainsboro">
                <input
                  className="w-[calc(100%_-_56px)] [border:none] [outline:none] font-archivo text-base bg-[transparent] h-[17px] flex-1 relative tracking-[0.24px] text-light-text text-left flex items-center min-w-[150px] max-w-[calc(100%_-_29px)] p-0"
                  placeholder="Password"
                  type="text"
                />
                <img
                  className="h-5 w-5 relative min-h-[20px]"
                  alt=""
                  src="/iconpassword.svg"
                />
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[13px] px-[52px] bg-accent rounded-md overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-lightseagreen-100">
              <div className="relative text-base tracking-[0.46px] leading-[26px] font-semibold font-archivo text-white text-center inline-block min-w-[54px]">
                Sign in
              </div>
            </button>
          </form>
        </div>
      </div>
      <div className="self-stretch h-0.5 relative box-border border-t-[1.6px] border-solid border-whitesmoke-200" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px] shrink-0">
        <div className="self-stretch relative tracking-[0.02em] leading-[26px]">
          Or sign in with
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-1 pl-0 gap-[14px_12px] text-center text-light-text">
          <div className="flex-1 rounded-lg bg-whitesmoke-100 flex flex-col items-center justify-start py-[25px] px-[13px] box-border gap-[18px] min-w-[125px]">
            <img
              className="w-10 h-[40.5px] relative object-contain"
              loading="lazy"
              alt=""
              src="/google-icon1@2x.png"
            />
            <div className="self-stretch relative tracking-[0.24px]">
              Google
            </div>
          </div>
          <div className="flex-[0.5659] rounded-lg bg-whitesmoke-100 flex flex-col items-center justify-start py-[25px] px-[41px] box-border gap-[18px] min-w-[125px]">
            <img
              className="w-10 h-[40.5px] relative object-contain"
              loading="lazy"
              alt=""
              src="/facebook-icon1@2x.png"
            />
            <div className="relative tracking-[0.24px] inline-block min-w-[73px]">
              Facebook
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-whitesmoke-100 flex flex-col items-center justify-start py-[25px] px-[13px] box-border gap-[18px] min-w-[125px]">
            <img
              className="w-10 h-[40.5px] relative object-contain"
              loading="lazy"
              alt=""
              src="/apple-icon1@2x.png"
            />
            <div className="self-stretch relative tracking-[0.24px]">Apple</div>
          </div>
        </div>
      </div>
      <div
        className="self-stretch relative tracking-[0.02em] leading-[26px] text-center cursor-pointer"
        onClick={onDontHaveAnClick}
      >
        <span>{`Don’t have an account yet? `}</span>
        <span className="text-accent">Sign up</span>
      </div>
    </div>
  );
};

Form.propTypes = {
  className: PropTypes.string,
};

export default Form;
