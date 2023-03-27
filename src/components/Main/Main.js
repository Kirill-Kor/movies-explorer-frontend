import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";


export default function Main({isLogged}) {
    return (
        <>
            <Header isLogged={isLogged}></Header>
            <main>
                <Promo></Promo>
                <AboutProject></AboutProject>
                <Techs></Techs>
                <AboutMe></AboutMe>
            </main>
            <Footer></Footer>
        </>
    )
}