import Header from "../components/Header";
import PageContent from "../components/PageContent";
import ListingDescription from "../components/ListingDescription";
import LocationAmenities from "../components/LocationAmenities";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import Footer from "../components/Footer";

const PropertyDetails = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start gap-[44px] leading-[normal] tracking-[normal] mq750:gap-[22px]">
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection
      />
      <PageContent />
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-[50px] box-border max-w-full mq750:pl-[25px] mq750:pr-[25px] mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[30px] max-w-full">
          <ListingDescription />
          <LocationAmenities />
        </div>
      </section>
      <FrameComponent />
      <FrameComponent1 />
      <Footer />
    </div>
  );
};

export default PropertyDetails;
