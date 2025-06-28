import CardsList from "../components/CardsList";
import Footer from "../components/Footer";
import MainDisplay from "../components/MainDisplay";
import Navbar from "../components/Navbar";

import EmailOffers from "./SubPage/EmailOffers";
import TourOptions from "./SubPage/TourOptions";


function Layout(){
    return (
        <>
            <Navbar />
            <MainDisplay />
            <TourOptions />
            <EmailOffers />
            
            <CardsList />
            <Footer />
        </>
    );
}
export default Layout;