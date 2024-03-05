import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import AboutMe from "./AboutMe/AboutMe"
import AboutProject from "./AboutProject/AboutProject"
import NavTab from "./NavTab/NavTab"
import Techs from "./Techs/Techs"

export function Main({ loggedIn }) {

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main>
                <NavTab />
                <AboutProject />
                <Techs />
                <AboutMe />
            </main >
            <Footer />
        </>
    )
}