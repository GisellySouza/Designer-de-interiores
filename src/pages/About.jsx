import { useContext } from "react"

import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"
import AboutText from "../components/AboutText/abouttext"

//Context
import { AppContext } from "../contexts/AppContext"



function About(){
    const appContext = useContext(AppContext)
    return (
        <>
            <Header/>
            <Banner title={appContext.languages[appContext.language].menu.about} image="abouts.jpg"/>
            <AboutText/>
              
            
            <Footer/>
        </>
    )

}

export  default About





