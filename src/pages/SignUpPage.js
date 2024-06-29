import { useCallback } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const onIAlreadyHaveClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] hover:[background:linear-gradient(#fff,_#fff),_#87550a]">
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection={false}
      />
      <main className="self-stretch flex flex-row items-start justify-center pt-[170.1px] px-5 pb-[170.2px] box-border bg-[url('/public/login-sections@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-7xl text-dark font-archivo mq750:gap-[28px] mq750:pt-[72px] mq750:pb-[72px] mq750:box-border mq1100:pt-[111px] mq1100:pb-[111px] mq1100:box-border">
        <div className="w-[589px] rounded-lg overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full">
          <div className="flex-1 bg-white flex flex-col items-start justify-start py-10 px-12 box-border gap-[37.7px] max-w-full mq750:gap-[19px] mq750:py-[26px] mq750:px-6 mq750:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
              <h2 className="m-0 self-stretch relative text-inherit tracking-[0.02em] font-bold font-inherit mq450:text-2xl">
                Create Account
              </h2>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[13.7px] box-border max-w-full">
                <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[26.7px] max-w-full">
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
                    <div className="self-stretch rounded bg-white box-border overflow-hidden flex flex-row items-center justify-start py-3.5 px-[18px] gap-[9.4px] max-w-full border-[1px] border-solid border-gainsboro">
                      <input
                        className="w-[calc(100%_-_56px)] [border:none] [outline:none] font-archivo text-base bg-[transparent] h-[17px] flex-1 relative tracking-[0.24px] text-light-text text-left flex items-center min-w-[150px] max-w-[calc(100%_-_29px)] p-0"
                        placeholder="Confirm password"
                        type="text"
                      />
                      <img
                        className="h-5 w-5 relative min-h-[20px]"
                        alt=""
                        src="/iconpassword.svg"
                      />
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-[13px] px-[50px] bg-accent rounded-md overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-lightseagreen-100">
                    <div className="relative text-base tracking-[0.46px] leading-[26px] font-semibold font-archivo text-white text-center inline-block min-w-[59px]">
                      Sign up
                    </div>
                  </button>
                </form>
              </div>
              <div className="self-stretch h-[13.7px] flex flex-row items-start justify-start pt-0 px-0 pb-[12.1px] box-border max-w-full">
                <div className="self-stretch flex-1 relative box-border max-w-full border-t-[1.6px] border-solid border-whitesmoke-200" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-base">
                <div className="self-stretch relative tracking-[0.02em] leading-[26px]">
                  Or sign up with
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-1 pl-0 gap-[14px_12px] text-center text-light-text">
                  <div className="flex-1 rounded-lg bg-whitesmoke-100 flex flex-col items-center justify-start py-[25px] px-[13px] box-border gap-[18px] min-w-[125px]">
                    <img
                      className="w-10 h-[40.5px] relative object-contain"
                      loading="lazy"
                      alt=""
                      src="/google-icon@2x.png"
                    />
                    <a className="[text-decoration:none] self-stretch relative tracking-[0.24px] text-[inherit]">
                      Google
                    </a>
                  </div>
                  <div className="flex-[0.5659] rounded-lg bg-whitesmoke-100 flex flex-col items-center justify-start py-[25px] px-[41px] box-border gap-[18px] min-w-[125px]">
                    <img
                      className="w-10 h-[40.5px] relative object-contain"
                      loading="lazy"
                      alt=""
                      src="/facebook-icon@2x.png"
                    />
                    <a className="[text-decoration:none] relative tracking-[0.24px] text-[inherit] inline-block min-w-[73px]">
                      Facebook
                    </a>
                  </div>
                  <div className="flex-1 rounded-lg bg-whitesmoke-100 flex flex-col items-center justify-start py-[25px] px-[13px] box-border gap-[18px] min-w-[125px]">
                    <img
                      className="w-10 h-[40.5px] relative object-contain"
                      loading="lazy"
                      alt=""
                      src="/apple-icon@2x.png"
                    />
                    <div className="self-stretch relative tracking-[0.24px]">
                      Apple
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="self-stretch relative text-base tracking-[0.02em] leading-[26px] text-center cursor-pointer"
              onClick={onIAlreadyHaveClick}
            >
              <span>{`I already have an account. `}</span>
              <span className="text-accent">Login</span>
            </div>
          </div>
        </div>
      </main>
      <footer className="self-stretch box-border flex flex-col items-center justify-start pt-2.5 px-20 pb-3 max-w-full text-left text-sm text-black font-archivo border-t-[1px] border-solid border-light-grey-border mq750:pl-10 mq750:pr-10 mq750:box-border">
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
      </footer>
    </div>
  );
};

export default SignUpPage;
