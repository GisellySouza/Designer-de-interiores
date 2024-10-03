import { useContext } from "react"
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"
import ContactText from "../components/ContactText/ContactText"

//Context
import { AppContext } from "../contexts/AppContext"

function Contact(){
    const appContext = useContext(AppContext)

    return (
        <>
        <Header/>
        <Banner title={appContext.languages[appContext.language].menu.contact} image="contacts.jpg"/>
        <ContactText/> 
        
        <Footer/>
    </>
    )

}
export  default Contact