import './Button.css'
import WhiteArrow from '../../assets/vector.svg'


function Button({arrow, buttonStyle, Loading, children, ...props }){
    return(
        <button className={`button ${buttonStyle}`}{...props}>
            {children} {arrow && < img src={WhiteArrow} />}


        </button>
         
        

    )

}

export default Button