import React from "react";
import HeroSection from "../components/ui/HeroSection";
import LiveAuction from "../components/ui/Live Auction/LiveAuction";
import SellerSection from "../components/ui/Seller-section/SellerSection";

const Home = () => {
    return <>
        <HeroSection/>
        <LiveAuction/>
        <SellerSection/>
    </>
};

export default Home;