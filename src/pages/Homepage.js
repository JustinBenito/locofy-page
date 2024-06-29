import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import HeroContainer from "../components/HeroContainer";
import SearchSectionHeader from "../components/SearchSectionHeader";
import ListingItem from "../components/ListingItem";
import Footer from "../components/Footer";

const Homepage = () => {
  const navigate = useNavigate();

  const onListingItemContainerClick = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-start leading-[normal] tracking-[normal]">
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection
      />
      <HeroContainer />
      <main className="self-stretch flex flex-col items-center justify-start py-6 px-20 gap-[22px] mq750:pl-10 mq750:pr-10 mq750:box-border mq1275:pt-5 mq1275:pb-5 mq1275:box-border">
        <SearchSectionHeader />
        <section className="w-full flex flex-row flex-wrap items-start justify-center gap-[20px_18.7px] max-w-[1280px] min-h-[1692px] mq1275:max-w-full">
          <ListingItem
            listingImage="/listing-image@2x.png"
            listingTitle="Brightwoods Cabin"
            listingSubtitle="Bridlepath, Ontario, Canada"
            rating="4.9"
            price="$658"
            trendIcon="/trend-icon@2x.png"
            showBestTime
            onListingItemContainerClick={onListingItemContainerClick}
          />
          <ListingItem
            listingImage="/image@2x.png"
            listingTitle="Urban Loft"
            listingSubtitle="Georgina Bay, Ontario, Canada"
            rating="4.5"
            price="$410"
            trendIcon="/trend-icon-1.svg"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-1@2x.png"
            listingTitle="Forestville Cottages"
            listingSubtitle="Simcoe, Ontario Canada"
            rating="5.0"
            price="$325"
            trendIcon="/trend-icon-1.svg"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-2@2x.png"
            listingTitle="Unionville Logde"
            listingSubtitle="Markham, Ontario Canada"
            rating="4.6"
            price="$485"
            trendIcon="/trend-icon@2x.png"
            showBestTime
          />
          <ListingItem
            listingImage="/image-3@2x.png"
            listingTitle="Missisuaga Aistream"
            listingSubtitle="Missisauga, Ontario, Canada"
            rating="4.8"
            price="$502"
            trendIcon="/trend-icon@2x.png"
            showBestTime
          />
          <ListingItem
            listingImage="/image-4@2x.png"
            listingTitle="Niagara Homes"
            listingSubtitle="Niagara, Ontario, Canada"
            rating="4.9"
            price="$655"
            trendIcon="/trend-icon-1.svg"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-5@2x.png"
            listingTitle="Sunny Estate"
            listingSubtitle="Barcort, Ontario Canada"
            rating="5.0"
            price="$320"
            trendIcon="/trend-icon@2x.png"
            showBestTime
          />
          <ListingItem
            listingImage="/image-6@2x.png"
            listingTitle="Lawrence Hills"
            listingSubtitle="Lawrence, Ontario Canada"
            rating="5.0"
            price="$350"
            trendIcon="/trend-icon-1.svg"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-7@2x.png"
            listingTitle="Simcoe Lake Lodge"
            listingSubtitle="Simcoe, Ontario, Canada"
            rating="5.0"
            price="$395"
            trendIcon="/trend-icon@2x.png"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-8@2x.png"
            listingTitle="Wasaga Beach Home"
            listingSubtitle="Georgina Bay, Ontario, Canada"
            rating="5.0"
            price="$385"
            trendIcon="/trend-icon@2x.png"
            showBestTime
          />
          <ListingItem
            listingImage="/image-9@2x.png"
            listingTitle="Banff Hills"
            listingSubtitle="Banff, Alberta, Canada"
            rating="5.0"
            price="$385"
            trendIcon="/trend-icon@2x.png"
            showBestTime
          />
          <ListingItem
            listingImage="/image-10@2x.png"
            listingTitle="Creemore Canada"
            listingSubtitle="Creemore, Alberta, Canada"
            rating="5.0"
            price="$385"
            trendIcon="/trend-icon-1.svg"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-11@2x.png"
            listingTitle="Kawartha Lakes"
            listingSubtitle="Kawartha, Alberta,  Canada"
            rating="5.0"
            price="$385"
            trendIcon="/trend-icon@2x.png"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-12@2x.png"
            listingTitle="Revelstoke Cabin"
            listingSubtitle="Revelstoke, Alberta, Canada"
            rating="5.0"
            price="$385"
            trendIcon="/trend-icon@2x.png"
            showBestTime
          />
          <ListingItem
            listingImage="/image-13@2x.png"
            listingTitle="Brightwoods Estate"
            listingSubtitle="Brightwoods Estate"
            rating="5.0"
            price="$385"
            trendIcon="/trend-icon-1.svg"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-14@2x.png"
            listingTitle="Brightwoods Estate"
            listingSubtitle="Brightwoods Estate"
            rating="5.0"
            price="$385"
            trendIcon="/trend-icon-1.svg"
            showBestTime={false}
          />
        </section>
        <button className="cursor-pointer py-[9px] px-7 bg-[transparent] w-[147px] rounded-md box-border overflow-hidden flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-accent hover:bg-lightseagreen-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightseagreen-100">
          <div className="relative text-base tracking-[0.46px] leading-[26px] font-semibold font-archivo text-accent text-center inline-block min-w-[88px]">
            Show more
          </div>
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
