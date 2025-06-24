import CardsList from "../components/CardsList";
import Footer from "../components/Footer";
import MainDisplay from "../components/MainDisplay";
import Navbar from "../components/Navbar";

function Layout(){
    return (
        <>
            <Navbar />
            <MainDisplay />
            <CardsList />
            <Footer />
        </>
    );
}
export default Layout;