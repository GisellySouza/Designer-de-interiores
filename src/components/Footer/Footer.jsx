import { useContext } from 'react'
import {Link} from 'react-router-dom'

//ASSETS
import './Footer.css'
import logo from '../../assets/logo.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagran.svg'
import linkedin from '../../assets/linkedin.svg'
import twiter from '../../assets/twiter.svg'
import brasil from '../../assets/brazil.svg'
import usa from '../../assets/usa.svg'

//Context
import { AppContext } from '../../contexts/AppContext'




function Footer(){
const appContext = useContext(AppContext)
const changeLanguage = (country) => {
    appContext.setLanguage(country)
}

    return(
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logol-col">
                        <img src={logo} className="footer-logo"/>
                        <p className="grey-1-color"> {appContext.languages[appContext.language].general.footerLogoText}</p>
                        <div className="d-flex social-links">
                            <a href="https://google.com" target="-blank">
                                <img src={facebook}/>                    
                            </a>
                            <a href="https://google.com" target="-blank">                            
                                <img src={twiter}/>                           
                            </a>
                            <a href="https://google.com" target="-blank">
                                <img src={linkedin}/>
                            </a>
                            <a href="https://google.com" target="-blank">                            
                                <img src={instagram}/>
                            </a>
                        </div>
                    </div>

                    <div className="d-flex mobile-fd-column">
                        <div className="footer-col mobile-fd-column .social-links">
                            <h3>{appContext.languages[appContext.language].general.pages}</h3>
                            <ul>
                                <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link> </li>
                                <li><Link to="/About"> {appContext.languages[appContext.language].menu.about}</Link> </li>
                                <li><Link to="/Contact"> {appContext.languages[appContext.language].menu.contact}</Link> </li>
                                <li><Link to="/Projects"> {appContext.languages[appContext.language].menu.projects}</Link> </li>
                            </ul>
                        </div>
                        <div className="footer-col mobile-fd-column">
                            <h3>{appContext.languages[appContext.language].menu.contact}</h3>
                            <p>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
                            <p>suporte@escoladnc.com.br</p>
                            <p>(19) 99187-4342</p>
                        </div>
                    </div> 
                </div>

                <div className="d-flex jc-space-between footer-copy">
                        <p className="grey-1-color">Copyright © DNC - 2024</p>
                        <div className="langs-area d-flex">
                            <img src={brasil} height ="29px" className='langs' onClick={() => changeLanguage("br")}  />
                            <img src={usa} height ="29px" className='langs' onClick={() => changeLanguage("en")}/>
                           
                        </div>
                </div>
            </div>    
        </footer>

    )

}

export default Footer