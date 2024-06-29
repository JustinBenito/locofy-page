import Header from "../components/Header";
import Form from "../components/Form";

const SignInPage = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] hover:[background:linear-gradient(#fff,_#fff),_#87550a]">
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection={false}
      />
      <main className="self-stretch flex flex-row items-start justify-center py-[203.5px] px-5 box-border bg-[url('/public/login-sections@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:gap-[28px] mq750:pt-[86px] mq750:pb-[86px] mq750:box-border mq1100:pt-[132px] mq1100:pb-[132px] mq1100:box-border">
        <div className="w-[589px] rounded-lg overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full">
          <Form />
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

export default SignInPage;
